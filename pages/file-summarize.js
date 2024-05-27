import { useState, useRef, useEffect } from 'react';
import DashBoardWrapper from '@/components/DashBoardWrapper';
import { Box, Button, Flex, Heading, Icon, Text, Select, Spinner } from '@chakra-ui/react';
import Files from 'react-files';
import { RxCross2 } from "react-icons/rx";

export default function FileSummarize() {
    const audioRef = useRef(null);
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState("english");
    const [loading, setLoading] = useState(false);
    const [audio, setAudio] = useState(null)
    const [precision, setPrecision] = useState(null);
    const [ratio, setRatio] = useState(null);
    const [isAudioLoaded, setIsAudioLoaded] = useState(false);

    function RemoveFile() {
        setFile(null);
        setSummary(null);
    }

    const handleChange = (files) => {
        setFile(files[0]);
        console.log(files[0]);
    }

    const handleError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    const uploadFile = () => {
        if (!file) {
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("lang", selectedLanguage);

        fetch("https://nyaysathi.replit.app/summarize", {
            // fetch("http://127.0.0.1/summarize", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                setSummary(result.summary);
                setAudio(result.voice)
                setPrecision(result.precision)
                setRatio(result.ratio)
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
        <DashBoardWrapper page="file">
            <Heading fontSize="3xl">Case Summarizer</Heading>
            <Box padding={{ base: 0, lg: 6 }} marginTop={{ base: 6, lg: 0 }}>
                {file ? (
                    <Box>
                        <Flex width="100%" bg="gray.200" rounded="10" padding="3" flexDirection="row" justifyContent="space-between" alignItems={"center"} mb="6">
                            <Flex flexDirection="column">
                                <Text fontSize={"md"} fontWeight={"bold"}>{file.name}</Text>
                                <Text>{file.sizeReadable}</Text>
                            </Flex>

                            <Button colorScheme="red" onClick={RemoveFile} rounded={"full"} padding={"2"}>
                                <Icon as={RxCross2} boxSize={6} />
                            </Button>
                        </Flex>
                        {summary ? (
                            <Flex flexDirection="column" gap={2} padding={6} border={"2px"} borderColor={"gray.200"} rounded={10}>
                                <Heading size="md" fontWeight="bold" textAlign={{ base: "center", lg: "left" }}>{file.name.split('.')[0]}</Heading>
                                <Text fontSize={{ base: "sm", lg: "md" }} textAlign={"justify"} mt={2}>{summary}</Text>
                                <Text fontSize={"sm"} color={"green"} mt={2}>Precision: {Math.round(precision * 100)} | Original to Summary Ratio: {Math.round(ratio)}</Text>
                                <audio ref={audioRef} controls >
                                    <source src={audio} />
                                    Your browser does not support the audio element.
                                </audio>
                            </Flex>
                        ) : (
                            <Flex flexDirection="column" gap={2} padding={6} border={"2px"} borderColor={"gray.200"} rounded={10}>
                                <Text fontSize={"md"} mb={2}>Select Language:</Text>
                                <Select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} mb={4}>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="bengali">Bengali</option>
                                    <option value="marathi">Marathi</option>
                                </Select>
                                {loading ? (
                                    <Spinner />
                                ) : (
                                    <Button size="md" colorScheme="yellow" fontWeight="bold" onClick={uploadFile}>Summarize</Button>
                                )}
                            </Flex>
                        )}
                    </Box>
                ) : (<Files
                    style={{ height: '100px', width: '100%', border: '2px dashed gray', borderRadius: '10px', textAlign: 'center', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    className='files-dropzone'
                    onChange={handleChange}
                    onError={handleError}
                    accepts={['image/png', 'image/jpg', 'image/jpeg', '.pdf']}
                    maxFileSize={1000000}
                    minFileSize={0}
                    clickable>
                    Drop files here or click to upload
                </Files>)}
            </Box>
        </DashBoardWrapper>
    )
}
