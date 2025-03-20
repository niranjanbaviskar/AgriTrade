import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";
import { useState, useEffect } from "react";
import axios from "axios";
import {
    SimpleGrid,
    Image,
    Heading,
    Text,
    Link,
    VStack,
    Card,
    CardBody,
    Stack,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Flex,
    Spinner,
} from "@chakra-ui/react";

export default function NewsPage() {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get("https://newsapi.org/v2/everything", {
                    params: {
                        q: "Farmer", // Modify query based on category
                        sources: "google-news-in,the-hindu,the-times-of-india",
                        language: "en",
                        sortBy: "publishedAt",
                        page: page,
                        pageSize: 9, // Adjust page size if needed
                        apiKey: "0e01e6a9ee8841bf826bb5bfb0854fae",
                    },
                });
                setNews((prevNews) => [...prevNews, ...response.data.articles]);
            } catch (error) {
                setError("Failed to fetch news. Please try again later.");
                console.error("Error fetching news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [page]);

    return (
        <LawyerDashboardWrapper page="news">
            <Heading fontSize="3xl" id="heading">Latest News & Updates</Heading>
            {error && <Text color="red.500">{error}</Text>}
            <VStack spacing={8} align="stretch" mt={6}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {news.map((article, index) => (
                        <Card key={index} maxW="sm">
                            <CardBody>
                                <Image
                                    src={article.urlToImage || "/default-news.jpg"}
                                    alt={article.title}
                                    borderRadius="lg"
                                    fallbackSrc="/default-news.jpg"
                                />
                                <Stack mt={6} spacing={3}>
                                    <Heading size="md">{article.title}</Heading>
                                    <Text>{article.description}</Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link href={article.url} isExternal>
                                    <ButtonGroup spacing={2}>
                                        <Button variant="solid" colorScheme="yellow">
                                            Read More
                                        </Button>
                                    </ButtonGroup>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </VStack>
            
            <Flex justifyContent="center" alignItems="center" mt={6}>
                {loading ? <Spinner size="lg" /> : (
                    <Button colorScheme="yellow" onClick={() => setPage(page + 1)}>
                        Load More
                    </Button>
                )}
            </Flex>
        </LawyerDashboardWrapper>
    );
}
