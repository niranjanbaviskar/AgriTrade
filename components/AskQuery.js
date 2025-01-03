import {
  Button, Divider,
  Flex,
  Icon,
  Text,
  Textarea,
  Stack,
  Badge,
  Box,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { useAudioRecorder } from 'react-audio-voice-recorder';
import { UserAuth } from "@/lib/auth";
import { getLawyer } from "@/lib/db";

export default function AskQuery() {
  const audioRef = useRef(null);
  const { user } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState(null);
  const [apiOutput, setApiOutput] = useState("");
  const [specs, setSpecs] = useState([]);
  const [sourceDocs, setSourceDocs] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [idk, setIdk] = useState(false);
  const [hit, setHit] = useState(true);
  const [precision, setPrecision] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [audio, setAudio] = useState(null);
  const [blob, setBlob] = useState(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const {
    startRecording,
    stopRecording,
    recordingBlob,
  } = useAudioRecorder({ audioBitsPerSecond: 128000, mimeType: 'audio/wav' });

  const handleStartRecording = async () => {
    startRecording()
    setRecording(true);
  }


  const generateBengali = async () => {
    console.log(blob)
    const formData = new FormData();
    formData.append("file", blob);
    try {
      const endpoint = 'https://Agritrade.replit.app/ask-voice';
      // const endpoint = "http://localhost/ask-voice";
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const responseData = await response.json();
      console.log(responseData);

      if (responseData.answer.includes("I am not sure about this")) {
        setIdk(true);
      }

      setApiOutput(responseData.answer);
      setUserInput(responseData.question);
      setSpecs(responseData.specs);
      setAudio(responseData.voice);
      setSourceDocs(responseData.docs);
      setPrecision(responseData.precision);
      console.log(responseData);
      setRecorded(false);
      setRecording(false);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  const handleStopRecording = () => {
    stopRecording()
    setLoading(true)
  }

  const askSathi = async () => {
    try {
      setIdk(false);
      setLoading(true);
      const endpoint = 'https:/AgriTrade.replit.app/ask';
      // const endpoint = "http://127.0.0.1/ask";
      const requestData = {
        question: userInput,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',  // Ensure this is set correctly
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.answer.includes("I am not sure about this")) {
        setIdk(true);
        setIdk(false);
      }

      setApiOutput(responseData.answer);
      setPrecision(responseData.precision);
      setSpecs(responseData.specs);
      setAudio(responseData.voice);
      console.log(responseData);
      setSourceDocs(responseData.docs);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const reaskSathi = async () => {
    try {
      setIdk(false);
      setLoading(true);
      const endpoint = 'https://Agritrade.replit.app/reask';
      // const endpoint = "http://localhost/reask";
      const requestData = {
        question: userInput,
        response: apiOutput,
        docs: sourceDocs,
      };

      const response = await fetch(endpoint, {
        mode: "no-cors",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.answer.includes("I am not sure about this")) {
        setIdk(true);
        setHit(false)
      }

      setApiOutput(responseData.answer);
      setPrecision(responseData.precision);
      setAudio(responseData.voice);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    console.log("Specs:", specs);
    const fetchData = async () => {
      try {
        const resultLawyers = await getLawyer(specs);
        setLawyers(resultLawyers);
        console.log("Lawyers:", resultLawyers);
      } catch (error) {
        console.error("Error fetching lawyers:", error.message);
      }
    };

    fetchData();
  }, [specs, user]);

  useEffect(() => {
    if (!recordingBlob) return;
    const reader = new FileReader();
    reader.readAsArrayBuffer(recordingBlob);
    reader.onloadend = function () {
      const wavBlob = new Blob([reader.result], { type: 'audio/wav' });
      console.log(wavBlob)
      setBlob(wavBlob);
    }
    setRecorded(true)

  }, [setRecorded, recordingBlob])

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleCanPlay = () => {
      // Audio is ready to play
      setIsAudioLoaded(true);
      audioElement.play();
    };

    if (audioElement) {
      audioElement.addEventListener('canplay', handleCanPlay);

      // Cleanup event listener on component unmount
      return () => {
        audioElement.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <Flex flexDirection={"column"} gap={6}>
      <Flex gap={2} position={"relative"}>
        <Textarea
          placeholder="Ask your legal queries..."
          bg={"gray.50"}
          rows={3}
          resize="none"
          focusBorderColor="yellow.400"
          disabled={loading}
          paddingRight={12}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          colorScheme="yellow"
          size={{ base: "sm", lg: "md" }}
          rounded="full"
          position={"absolute"}
          bottom={{ base: 2, lg: 3 }}
          right={{ base: 12, lg: 16 }}
          isLoading={loading}
          zIndex={2}
          onClick={askSathi}
        >
          <Icon as={IoSend} color={"gray.50"} />
        </Button>
        {!recording ? (<Button
          colorScheme="yellow"
          size={{ base: "sm", lg: "md" }}
          rounded="full"
          position={"absolute"}
          bottom={{ base: 2, lg: 3 }}
          right={{ base: 2, lg: 3 }}
          isLoading={loading}
          zIndex={2}
          onClick={handleStartRecording}
        >
          <Icon as={FaMicrophone} color={"gray.50"} />
        </Button>) : (!recorded ? (<Button
          colorScheme="yellow"
          size={{ base: "sm", lg: "md" }}
          rounded="full"
          position={"absolute"}
          bottom={{ base: 2, lg: 3 }}
          right={{ base: 2, lg: 3 }}
          isLoading={loading}
          zIndex={2}
          onClick={handleStopRecording}
        >
          <Icon as={FaStop} color={"gray.50"} />
        </Button>

        ) : (
          <Button
            colorScheme="yellow"
            size={{ base: "sm", lg: "md" }}
            rounded="full"
            position={"absolute"}
            bottom={{ base: 2, lg: 3 }}
            right={{ base: 2, lg: 3 }}
            zIndex={2}
            onClick={generateBengali}
          >
            <Icon as={IoSend} color={"gray.50"} />
          </Button>
        ))}
      </Flex>

      <Flex
        flexDirection={"column"}
        gap={2}
        padding={6}
        rounded={10}
        boxShadow={"lg"}
        bgGradient="linear(to-r,  yellow.50, pink.50, purple.50)"
        border="1px"
        borderColor="gray.100"
      >
        {!loading && !apiOutput && (
          <Text>
            Hi, I am Agritrade. I can help you with your legal queries. Ask me
            anything. I can talk in English and Hindi.
          </Text>
        )}
        {loading && (
          <Text fontStyle={"italic"} fontWeight={"bold"}>
            AgriTrade is Thinking...
          </Text>
        )}
        {!loading && apiOutput && (
          <Flex flexDirection={"column"}>
            {/* <audio ref={audioRef} controls >
              <source src={audio} />
              Your browser does not support the audio element.
            </audio> */}
            <Text fontWeight={"bold"}>Agritrade</Text>
            {!idk && <Text>{apiOutput}</Text>}
            {idk && (
              <Flex flexDir={"column"} gap="4">
                <Text>
                  I am still learning and very sorry to say but I do not have
                  proper knowledge to answer your question. Just to be extra
                  sure can you recheck your question.
                </Text>
                <Text>
                  I have a link to the source where you might find information
                  relevant with your query.
                </Text>
                <Link href="https://www.indiankanoon.org/" passHref={true}>
                  <Button
                    as="a"
                    colorScheme="yellow"
                    size={{ base: "sm", lg: "md" }}
                    rounded="lg"
                  >
                    Indian Kanoon
                  </Button>
                </Link>
              </Flex>
            )}
            {/* make a red note to show Hit true or false and the precision */}
            {hit ? (
              <Text color={"green"}>
                Hit: {hit.toString()} | Precision: {precision}
              </Text>
            ) : (
              <Text color={"red"}>
                Miss
              </Text>
            )}
            {lawyers && (
              <Text mt={10} fontWeight={"bold"}>
                These are some source files where we found data from, feel free
                to read them for extra knowledge! case
              </Text>
            )}
            <Stack direction={{ base: "column", lg: "row" }}>
              {!idk && sourceDocs.length > 0 && sourceDocs.map((doc) => (
                <Link key={doc}
                  href={`https://storage.googleapis.com/Agritrade.appspot.com/${doc}.txt`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge colorScheme="purple">{doc}.txt</Badge>
                </Link>
              ))}
            </Stack>
            {lawyers && (
              <Text mt={10} fontWeight={"bold"}>
                In case you need lawyers here are some we recommed based on your
                case:
              </Text>
            )}
            <SimpleGrid columns={{ base: 1, lg: 3 }} gridGap={4} mt={4}>
              {!idk &&
                lawyers.map((lawyer) => (
                  <Flex key={lawyer.uid} direction="row" align="start" bg={"white"} boxShadow={"lg"} border="1px"
                    borderColor="gray.100" p={3} rounded={10} gap={2}>
                    <Avatar name='Dan Abrahmov' src={lawyer.photoURL} />
                    <Flex flexDir="column">
                      <Text fontSize="lg" fontWeight="bold">
                        {lawyer.name}
                      </Text>
                      <Text color={"gray.500"} fontSize={"xs"}>{lawyer.email} | {lawyer.phone}</Text>
                      <Text color={"gray.500"} fontSize={"xs"}>Reputation Points - {lawyer.credit}</Text>
                    </Flex>
                  </Flex>
                ))}
            </SimpleGrid>
          </Flex>
        )}
        {!loading && apiOutput && <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
          <Text fontWeight={"medium"} >Are you satisfied?</Text>
          <Button size={"sm"} colorScheme={"blackAlpha"} onClick={reaskSathi}><Icon as={IoMdThumbsDown} /></Button>
        </Flex>}
      </Flex>
    </Flex>
  );
}
