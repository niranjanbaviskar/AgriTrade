import { useState, useRef } from "react";
import Groq from "groq-sdk";
import { Mic, MicOff, Search, Volume2, VolumeX } from "lucide-react";
import { Box, Button, Text, VStack, Heading, Input, useToast, HStack } from "@chakra-ui/react";

function AgriTradeBot() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [query, setQuery] = useState("");
  const [currentResponse, setCurrentResponse] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const toast = useToast();

  const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });

  const get_completion = async (prompt) => {
    if (!prompt) {
      toast({ title: "Enter a query", status: "warning", duration: 2000 });
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentResponse("");

    try {
      const systemPrompt = `You are an AI assistant helping farmers with agricultural trade. Provide:
      - Crop price updates and best market rates.
      - Government schemes and subsidies info.
      - Buyer connections and logistics advice.
      - Weather insights for selling crops.`;

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.5,
      });

      const response = completion?.choices?.[0]?.message?.content || "No response from AI.";
      setCurrentResponse(response);
      speakText(response);
    } catch (err) {
      console.error("Groq API Error:", err);
      setError(`Error: ${err.message || "Something went wrong."}`);
    } finally {
      setLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      setCurrentResponse("");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      timerRef.current = setInterval(() => setRecordingTime((prev) => prev + 1), 1000);
    } catch (err) {
      setError("Failed to access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      clearInterval(timerRef.current);
      setRecordingTime(0);
  
      // Use Web Speech API for speech recognition
       const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "mr-IN";
      recognition.onresult = (event) => {
        const speechText = event.results[0][0].transcript;
        setQuery(speechText);
        get_completion(speechText);
      };

      recognition.onerror = (event) => {
        if (event.error === "no-speech") {
          setError("No speech detected. Please try again.");
          recognition.start(); // Restart recognition if no speech detected
        } else {
          setError("Speech recognition error: " + event.error);
        }
      };      
      
      recognition.start();
    }
  };
  

  const speakText = (text) => {
    if (window.speechSynthesis) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-US";
      speech.rate = 1;
      speech.pitch = 1;
      speech.onstart = () => setIsSpeaking(true);
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
    } else {
      toast({ title: "Text-to-Speech not supported", status: "error", duration: 2000 });
    }
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <VStack minH="100vh" bgGradient="linear(to-b, green.300, black)" p={8} spacing={6} align="center" justify="center">
      <Heading color="white">KrishiMitra - your smart farming assistant</Heading>
      <Text color="green.200">{loading ? "Processing..." : "Enter a query or use voice input."}</Text>
      {error && <Text color="red.400">{error}</Text>}

      {/* Search Box */}
      <HStack spacing={2} w="full" maxW="lg">
        <Input
          placeholder="Ask about crops, prices, or government schemes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          bg="gray.600"
          color="white"
          _placeholder={{ color: "gray.400" }}
        />
        <Button leftIcon={<Search />} colorScheme="blue" onClick={() => get_completion(query)} isDisabled={loading}>
        </Button>
      </HStack>

      {/* Voice Recording Button */}
      <Button
        leftIcon={isRecording ? <MicOff /> : <Mic />}
        colorScheme={isRecording ? "red" : "green"}
        onClick={isRecording ? stopRecording : startRecording}
        isDisabled={loading}
      >
        {isRecording ? `Stop Recording (${recordingTime}s)` : ""}
      </Button>

      {/* Response Box */}
      <Box bg="gray.600" color="white" p={4} borderRadius="md" boxShadow="lg" w="full" maxW="lg">
        <Heading size="md">Response</Heading>
        <Text color="green.300" mt={2} minH="40px">
          {currentResponse || "Your response will appear here..."}
        </Text>
        {currentResponse && (
          <HStack mt={2}>
            <Button leftIcon={<Volume2 />} colorScheme="purple" onClick={() => speakText(currentResponse)} isDisabled={isSpeaking}>
              Listen
            </Button>
            <Button leftIcon={<VolumeX />} colorScheme="red" onClick={stopSpeaking}>
              Stop Speaking
            </Button>
          </HStack>
        )}
      </Box>
    </VStack>
  );
}

export default AgriTradeBot;
