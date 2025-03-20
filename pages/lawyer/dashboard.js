import { Box, Flex, Heading, Text, SimpleGrid, Card, CardHeader, CardBody, Divider } from "@chakra-ui/react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Factory, ShoppingCart, Leaf, TrendingUp } from "lucide-react";
import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";

const companyDetails = {
    name: "SpiceKing Pvt Ltd",
    description: "SpiceKing Pvt Ltd is a renowned manufacturer of high-quality, aromatic masalas and spices, carefully sourced and crafted to elevate culinary experiences. With a strong presence in global markets, we ensure purity, authenticity, and unmatched flavor in every blend, serving both households and businesses with excellence.",
    isoNumber: "ISO 9001:2015",
    regNumber: "REG-987654321"
}; 

const profitData = [
    { year: "2020", profit: 50000 },
    { year: "2021", profit: 75000 },
    { year: "2022", profit: 120000 },
    { year: "2023", profit: 150000 },
];

const salesData = [
    { year: "2020", sales: 80000 },
    { year: "2021", sales: 95000 },
    { year: "2022", sales: 130000 },
    { year: "2023", sales: 170000 },
];

const cropDemandData = [
    { crop: "Turmeric", quantity: 500 },
    { crop: "Chili", quantity: 700 },
    { crop: "Coriander", quantity: 600 },
];

const spiceMarketData = [
    { spice: "Turmeric", marketDemand: 40 },
    { spice: "Chili", marketDemand: 35 },
    { spice: "Coriander", marketDemand: 25 },
];

const COLORS = ["#FFA500", "#FF6347", "#32CD32"]; // Orange, Red, Green

export default function Dashboard() {
    return (
        <LawyerDashboardWrapper page="dashboard">
            <Box bg="gray.100" minH="100vh" p={5}>
                {/* Company Name & Details */}
                <Flex direction="column" align="center" textAlign="center" mb={6}>
                    <Heading fontSize="4xl" color="blue.600">🌿 {companyDetails.name}</Heading>
                    <Text fontSize="lg" color="gray.700" mt={2}>{companyDetails.description}</Text>
                    <Text fontSize="md" color="gray.500" mt={1}>ISO: {companyDetails.isoNumber} | Reg No: {companyDetails.regNumber}</Text>
                </Flex>

                  {/* Graphs Box */}
                  <Box bg="gray.300" p={6} borderRadius="lg" boxShadow="lg">

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {/* Profitability Graph */}
                    <Card bg="white" p={4} borderRadius="md" boxShadow="md">
                        <CardHeader>
                            <Flex align="center" gap={2}>
                                <TrendingUp size={24} color="blue" />
                                <Heading fontSize="xl">Profitability Over Years</Heading>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={profitData}>
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="profit" stroke="#3182CE" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardBody>
                    </Card>

                    {/* Sales Per Year */}
                    <Card bg="white" p={4} borderRadius="md" boxShadow="md">
                        <CardHeader>
                            <Flex align="center" gap={2}>
                                <ShoppingCart size={24} color="green" />
                                <Heading fontSize="xl">Sales Per Year</Heading>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={salesData}>
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="sales" fill="#38A169" barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardBody>
                    </Card>

                    {/* Crop Requirement */}
                    <Card bg="white" p={4} borderRadius="md" boxShadow="md">
                        <CardHeader>
                            <Flex align="center" gap={2}>
                                <Leaf size={24} color="orange" />
                                <Heading fontSize="xl">Agricultural Crop Demand</Heading>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie data={cropDemandData} dataKey="quantity" nameKey="crop" cx="50%" cy="50%" outerRadius={80} label>
                                        {cropDemandData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardBody>
                    </Card>

                    {/* Spice Market Demand */}
                    <Card bg="white" p={4} borderRadius="md" boxShadow="md">
                        <CardHeader>
                            <Flex align="center" gap={2}>
                                <Factory size={24} color="red" />
                                <Heading fontSize="xl">Spice Market Demand</Heading>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={spiceMarketData}>
                                    <XAxis dataKey="spice" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="marketDemand" fill="#E53E3E" barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Box>
            </Box>
        </LawyerDashboardWrapper>
    );
}
