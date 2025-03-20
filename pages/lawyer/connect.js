import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";
import { useState } from "react";
import { Box, Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Icon, Text, useToast } from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialFarmers = [
    { id: 1, name: "Niranjan Baviskar", crop: "Red Chili", quantity: "5000 Kg", price: "₹120/Kg", status: "Pending" },
    { id: 2, name: "Suresh Patil", crop: "Tamarind", quantity: "300 Kg", price: "₹90/Kg", status: "Confirmed" },
    { id: 3, name: "Amit Deshmukh", crop: "Wheat", quantity: "700 Kg", price: "₹25/Kg", status: "Pending" },
    { id: 4, name: "Manoj Yadav", crop: "Sugarcane", quantity: "1000 Kg", price: "₹40/Kg", status: "Pending" },
    { id: 5, name: "Rakesh Singh", crop: "Onions", quantity: "800 Kg", price: "₹30/Kg", status: "Pending" },
    { id: 6, name: "Vikram Jadhav", crop: "Potatoes", quantity: "600 Kg", price: "₹20/Kg", status: "Pending" }
];

export default function CompanyDashboard() {
    const [farmers, setFarmers] = useState(initialFarmers);
    const toast = useToast();

    const approveDeal = (id) => {
        setFarmers((prevFarmers) =>
            prevFarmers.map((farmer) =>
                farmer.id === id ? { ...farmer, status: "Confirmed" } : farmer
            )
        );
        toast({
            title: "Deal Approved!",
            description: "The farmer's deal has been successfully approved.",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
        });
    };

    return (
        <LawyerDashboardWrapper page="company">
            <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="md">
                <Heading size="lg" mb={4}>Connected Farmers</Heading>
                <Text mb={4} color="gray.600">View details of farmers and finalize deals.</Text>

                <Table variant="simple" size="md">
                    <Thead bg="gray.200">
                        <Tr>
                            <Th>Farmer Name</Th>
                            <Th>Crop</Th>
                            <Th>Quantity</Th>
                            <Th>Price</Th>
                            <Th>Status</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {farmers.map((farmer) => (
                            <Tr key={farmer.id} bg="white">
                                <Td>{farmer.name}</Td>
                                <Td>{farmer.crop}</Td>
                                <Td>{farmer.quantity}</Td>
                                <Td>{farmer.price}</Td>
                                <Td>
                                    {farmer.status === "Confirmed" ? (
                                        <Icon as={FaCheckCircle} color="green.500" />
                                    ) : (
                                        <Icon as={FaTimesCircle} color="red.500" />
                                    )}
                                </Td>
                                <Td>
                                    {farmer.status === "Pending" ? (
                                        <Button 
                                            colorScheme="green" 
                                            size="sm" 
                                            mr={2} 
                                            onClick={() => approveDeal(farmer.id)}
                                        >
                                            Approve
                                        </Button>
                                    ) : (
                                        <Button colorScheme="gray" size="sm" disabled>
                                            Approved
                                        </Button>
                                    )}
                                    <Button colorScheme="red" size="sm">Reject</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </LawyerDashboardWrapper>
    );
}
