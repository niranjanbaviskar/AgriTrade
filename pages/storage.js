import DashBoardWrapper from "@/components/DashBoardWrapper";
import { useState } from "react";
import {
    Box, Button, Flex, Heading, Text, Stack, Icon, Modal, ModalOverlay, ModalContent,
    ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Factory, Info, Star, ExternalLink, CheckCircle} from "lucide-react";
import { useToast } from "@chakra-ui/react";


const companies = [
    {
        id: 1,
        name: "SpiceKing Pvt Ltd",
        established: "2010",
        rating: 4.7,
        description: "SpiceKing Pvt Ltd is a renowned manufacturer of high-quality, aromatic masalas and spices, carefully sourced and crafted to elevate culinary experiences. With a strong presence in global markets, we ensure purity, authenticity, and unmatched flavor in every blend, serving both households and businesses with excellence.",
        rawMaterials: ["red chili", "Turmeric", "Coriander"],
        website: "https://agromart.com"
    },
    {
        id: 2,
        name: "FreshHarvest Industries",
        established: "2015",
        rating: 4.5,
        description: "FreshHarvest Industries is committed to providing fresh, organic produce to consumers worldwide. The company works closely with organic farmers to cultivate chemical-free vegetables, fruits, and spices. With a strong emphasis on sustainability, FreshHarvest aims to revolutionize the organic farming industry through advanced agricultural techniques and eco-friendly packaging.",
        rawMaterials: ["Vegetables", "Fruits", "Spices"],
        website: "https://freshharvest.com"
    },
    {
        id: 3,
        name: "GreenAgro Solutions",
        established: "2012",
        rating: 4.2,
        description: "GreenAgro Solutions specializes in sustainable farming and innovative agricultural trading. The company collaborates with farmers to promote environmentally friendly farming methods that increase crop yield without harming the soil. GreenAgro is dedicated to providing high-quality produce while reducing carbon footprints through smart agricultural practices.",
        rawMaterials: ["Sugarcane", "Cotton", "Pulses"],
        website: "https://greenagro.com"
    },
    {
        id: 4,
        name: "PureFarm Exports",
        established: "2008",
        rating: 4.8,
        description: "PureFarm Exports is a globally recognized supplier of high-quality crops, including tea, coffee, and cocoa. The company collaborates with thousands of farmers to ensure premium quality exports. With a strong presence in the global food industry, PureFarm Exports guarantees fair trade practices and helps farmers secure better earnings by eliminating middlemen.",
        rawMaterials: ["Tea", "Coffee", "Cocoa"],
        website: "https://purefarm.com"
    },
    {
        id: 5,
        name: "EcoAgri Enterprises",
        established: "2019",
        rating: 4.4,
        description: "EcoAgri Enterprises is dedicated to promoting eco-friendly and sustainable farming solutions. The company offers innovative organic farming techniques, soil enrichment programs, and natural pest control solutions. With a commitment to environmental conservation, EcoAgri helps farmers transition to more sustainable agricultural methods while ensuring high productivity.",
        rawMaterials: ["Organic Wheat", "Rice", "Barley"],
        website: "https://ecoagri.com"
    },
    {
        id: 6,
        name: "HarvestLink International",
        established: "2011",
        rating: 4.6,
        description: "HarvestLink International is a global leader in the agribusiness sector, providing end-to-end supply chain solutions for farmers and buyers. The company specializes in grain trading, livestock feed, and agricultural consulting. By leveraging advanced technology, HarvestLink enhances the efficiency of farming operations and ensures fair pricing for farmers.",
        rawMaterials: ["Wheat", "Barley", "Soybeans"],
        website: "https://harvestlink.com"
    },
    {
        id: 7,
        name: "AgriTech Innovations",
        established: "2016",
        rating: 4.5,
        description: "AgriTech Innovations is at the forefront of agricultural technology, providing cutting-edge solutions such as precision farming, smart irrigation, and AI-powered crop monitoring. The company partners with farmers to improve efficiency, maximize yields, and reduce wastage through data-driven insights and automation.",
        rawMaterials: ["Smart Sensors", "Irrigation Equipment", "Agri Drones"],
        website: "https://agritechinnovations.com"
    },
    {
        id: 8,
        name: "FarmDirect Solutions",
        established: "2013",
        rating: 4.3,
        description: "FarmDirect Solutions connects farmers directly with retailers and consumers, eliminating unnecessary intermediaries and ensuring fair pricing. The company offers an online marketplace where farmers can list their products and negotiate deals with buyers in real-time. With a strong presence in digital agriculture, FarmDirect is revolutionizing the way fresh produce reaches customers.",
        rawMaterials: ["Fresh Produce", "Herbs", "Dairy Products"],
        website: "https://farmdirect.com"
    },
    {
        id: 9,
        name: "AgroFuture Pvt Ltd",
        established: "2020",
        rating: 4.7,
        description: "AgroFuture Pvt Ltd focuses on modernizing traditional farming through AI-driven analytics, automated harvesting, and blockchain-based supply chain management. The company helps farmers optimize their production and access global markets with greater transparency and efficiency. AgroFuture aims to shape the future of agriculture through sustainable and technological advancements.",
        rawMaterials: ["AI Farming Solutions", "Automated Harvesting Tools", "Blockchain Supply Chain"],
        website: "https://agrofuture.com"
    }
];


export default function RegisteredCompanies() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isCropOpen, onOpen: onCropOpen, onClose: onCropClose } = useDisclosure();
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [cropDetails, setCropDetails] = useState({ name: "", quantity: "", price: "" });
    const toast = useToast();

    const handleCompanyClick = (company) => {
        setSelectedCompany(company);
        onOpen();
    };

    const handleProceed = () => {
        onClose();
        onCropOpen();
    };

    const handleSubmit = () => {
        toast({
            title: "Crop Details Submitted",
            description: `Your crop details have been sent to ${selectedCompany?.name}.`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top"
        });
        onCropClose();
    };

    return (
        <DashBoardWrapper>
            <Box p={8} bg="gray.100" minH="100vh">
                <Heading fontSize="3xl" mb={6} textAlign="center" color="blue.600">
                    Registered Companies
                </Heading>
                <Stack spacing={6}>
                    {companies.map((company) => (
                        <Box 
                            key={company.id} 
                            p={6} 
                            bg="white" 
                            shadow="md" 
                            borderRadius="lg" 
                            cursor="pointer"
                            transition="0.2s" 
                            _hover={{ shadow: "xl", transform: "scale(1.02)" }}
                            onClick={() => handleCompanyClick(company)}
                        >
                            <Flex align="center" justify="space-between">
                                <Flex align="center">
                                    <Icon as={Factory} boxSize={8} mr={3} color="blue.500" />
                                    <Heading fontSize="xl">{company.name}</Heading>
                                </Flex>
                                <Flex align="center">
                                    <Icon as={Star} color="yellow.400" boxSize={6} />
                                    <Text ml={2} fontSize="lg" fontWeight="bold">{company.rating}</Text>
                                </Flex>
                            </Flex>
                            <Text fontSize="md" color="gray.600" mt={2}>
                                📅 Established: {company.established}
                            </Text>
                        </Box>
                    ))}
                </Stack>

                {/* Company Details Modal */}
                <Modal isOpen={isOpen} onClose={onClose} size="md">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <Flex align="center">
                                <Icon as={Info} boxSize={6} color="blue.500" mr={3} />
                                {selectedCompany?.name}
                            </Flex>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text fontSize="lg" fontWeight="bold" color="gray.700">
                                📅 Established: {selectedCompany?.established}
                            </Text>
                            <Flex mt={2} align="center">
                                <Icon as={Star} color="yellow.400" boxSize={6} />
                                <Text ml={2} fontSize="lg" fontWeight="bold">
                                    {selectedCompany?.rating} / 5
                                </Text>
                            </Flex>
                            <Text mt={3} fontSize="md">{selectedCompany?.description}</Text>
                            <Text mt={4} fontWeight="bold" fontSize="lg">Required Raw Materials:</Text>
                            <Box mt={2} bg="gray.200" p={3} borderRadius="md">
                                {selectedCompany?.rawMaterials.join(", ")}
                            </Box>
                            <Button
                                as="a"
                                href={selectedCompany?.website}
                                target="_blank"
                                mt={4}
                                colorScheme="blue"
                                w="full"
                                leftIcon={<Icon as={ExternalLink} />}
                            >
                                Visit Website
                            </Button>
                            <Button
                                mt={3}
                                colorScheme="green"
                                w="full"
                                leftIcon={<Icon as={CheckCircle} />}
                                onClick={handleProceed}
                            >
                                Proceed
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                {/* Crop Details Modal */}
                <Modal isOpen={isCropOpen} onClose={onCropClose} size="md">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Enter Crop Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl>
                                <FormLabel>Crop Name</FormLabel>
                                <Input 
                                    placeholder="Enter crop name" 
                                    value={cropDetails.name} 
                                    onChange={(e) => setCropDetails({ ...cropDetails, name: e.target.value })} 
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Quantity (in kg)</FormLabel>
                                <Input 
                                    type="number" 
                                    placeholder="Enter quantity" 
                                    value={cropDetails.quantity} 
                                    onChange={(e) => setCropDetails({ ...cropDetails, quantity: e.target.value })} 
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Price per kg</FormLabel>
                                <Input 
                                    type="number" 
                                    placeholder="Enter price per kg" 
                                    value={cropDetails.price} 
                                    onChange={(e) => setCropDetails({ ...cropDetails, price: e.target.value })} 
                                />
                            </FormControl>
                            <Button 
                                mt={6} 
                                colorScheme="blue" 
                                w="full" 
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </DashBoardWrapper>
    );
}