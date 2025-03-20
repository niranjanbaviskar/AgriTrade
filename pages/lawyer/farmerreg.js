import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";
import { useState } from "react";
import {
    Box, Button, Flex, Heading, Text, Stack, Icon, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, useDisclosure
} from "@chakra-ui/react";
import { User, Info, Star, ShoppingCart } from "lucide-react";

const farmers = [
    {
        id: 1,
        name: "Ramesh Patil",
        rating: 4.6,
        crop: "red chili(dry)",
        description: "Experienced farmer cultivating high-quality wheat using sustainable methods. Ensuring chemical-free produce with rich nutritional value.",
        quantity: "50000 kg",
        pricePerKg: "₹125",
    },
    {
        id: 2,
        name: "Suresh Yadav",
        rating: 4.8,
        crop: "Rice",
        description: "Specialist in organic rice farming, providing premium-grade grains grown without pesticides.",
        quantity: "8000 kg",
        pricePerKg: "₹32",
    },
    {
        id: 3,
        name: "Mahesh Singh",
        rating: 4.5,
        crop: "Sugarcane",
        description: "Dedicated to producing high-yield sugarcane with optimal sucrose content for best quality.",
        quantity: "12000 kg",
        pricePerKg: "₹18",
    },
    {
        id: 4,
        name: "Anil Sharma",
        rating: 4.7,
        crop: "Tomatoes",
        description: "Growing fresh, pesticide-free tomatoes with high shelf life and superior taste.",
        quantity: "3000 kg",
        pricePerKg: "₹40",
    },
    {
        id: 5,
        name: "Vijay Kumar",
        rating: 4.3,
        crop: "Onions",
        description: "Providing farm-fresh onions with long-term storage capabilities and export quality.",
        quantity: "7000 kg",
        pricePerKg: "₹22",
    },
    {
        id: 6,
        name: "Rahul Verma",
        rating: 4.9,
        crop: "Potatoes",
        description: "Cultivating disease-resistant, high-yield potatoes suitable for multiple culinary applications.",
        quantity: "10000 kg",
        pricePerKg: "₹20",
    },
];

export default function RegisteredFarmers() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedFarmer, setSelectedFarmer] = useState(null);

    const handleFarmerClick = (farmer) => {
        setSelectedFarmer(farmer);
        onOpen();
    };

    return (
        <LawyerDashboardWrapper>
            <Box p={8} bg="gray.100" minH="100vh">
                <Heading fontSize="3xl" mb={6} textAlign="center" color="green.600">
                    Registered Farmers
                </Heading>
                <Stack spacing={6}>
                    {farmers.map((farmer) => (
                        <Box 
                            key={farmer.id} 
                            p={6} 
                            bg="white" 
                            shadow="md" 
                            borderRadius="lg" 
                            cursor="pointer"
                            transition="0.2s" 
                            _hover={{ shadow: "xl", transform: "scale(1.02)" }}
                            onClick={() => handleFarmerClick(farmer)}
                        >
                            <Flex align="center" justify="space-between">
                                <Flex align="center">
                                    <Icon as={User} boxSize={8} mr={3} color="green.500" />
                                    <Heading fontSize="xl">{farmer.name}</Heading>
                                </Flex>
                                <Flex align="center">
                                    <Icon as={Star} color="yellow.400" boxSize={6} />
                                    <Text ml={2} fontSize="lg" fontWeight="bold">{farmer.rating}</Text>
                                </Flex>
                            </Flex>
                            <Text fontSize="md" color="gray.600" mt={2}>
                                🌾 Crop: {farmer.crop}
                            </Text>
                        </Box>
                    ))}
                </Stack>

                {/* Modal for Farmer Details */}
                <Modal isOpen={isOpen} onClose={onClose} size="md">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Flex align="center">
                                <Icon as={Info} boxSize={6} color="green.500" mr={3} />
                                {selectedFarmer?.name}
                            </Flex>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">
                                🌾 Crop: {selectedFarmer?.crop}
                            </Text>
                            <Flex mt={2} align="center">
                                <Icon as={Star} color="yellow.400" boxSize={6} />
                                <Text ml={2} fontSize="lg" fontWeight="bold">
                                    {selectedFarmer?.rating} / 5
                                </Text>
                            </Flex>
                            <Text mt={3} fontSize="md">{selectedFarmer?.description}</Text>
                            <Text mt={4} fontWeight="bold" fontSize="lg">Crop Quantity:</Text>
                            <Box mt={2} bg="gray.200" p={3} borderRadius="md">
                                {selectedFarmer?.quantity}
                            </Box>
                            <Text mt={4} fontWeight="bold" fontSize="lg">Price per kg:</Text>
                            <Box mt={2} bg="gray.200" p={3} borderRadius="md">
                                {selectedFarmer?.pricePerKg}
                            </Box>
                            <Button
                                mt={4}
                                colorScheme="green"
                                w="full"
                                leftIcon={<Icon as={ShoppingCart} />}
                            >
                                Buy Crop
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </LawyerDashboardWrapper>
    );
}
