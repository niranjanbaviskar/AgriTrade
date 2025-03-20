import React, { useState } from "react";
import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";
import { FaTruck, FaWarehouse, FaMapMarkerAlt, FaCalculator } from "react-icons/fa";
import { 
  Box, Heading, Text, Button, Grid, Input, VStack, Icon, Card, CardBody 
} from "@chakra-ui/react";

const LogisticsSupport = () => {
  const [cost, setCost] = useState(null);
  const [distance, setDistance] = useState(0);

  const calculateCost = () => {
    const estimatedCost = distance * 5; // Example: ₹5 per km
    setCost(estimatedCost);
  };

  return (
    <LawyerDashboardWrapper>
      <Box maxW="5xl" mx="auto" p={8} bg="white" boxShadow="xl" borderRadius="xl" border="1px" borderColor="gray.200">
        <Heading as="h2" size="xl" textAlign="center" mb={6} color="gray.800">
          🚜 Logistics Support
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {/* Order-Based Transportation */}
          <Card borderRadius="lg" boxShadow="md" _hover={{ boxShadow: "xl" }}>
            <CardBody textAlign="center">
              <Icon as={FaTruck} boxSize={12} color="green.500" />
              <Heading as="h3" size="md" mt={4}>Order-Based Transportation</Heading>
              <Text fontSize="sm" color="gray.600" mt={2}>
                Book trucks or vans based on your crop quantity and location.
              </Text>
              <Button mt={4} colorScheme="green" w="full">
                Book Now
              </Button>
            </CardBody>
          </Card>

          {/* Live Tracking of Shipments */}
          <Card borderRadius="lg" boxShadow="md" _hover={{ boxShadow: "xl" }}>
            <CardBody textAlign="center">
              <Icon as={FaMapMarkerAlt} boxSize={12} color="blue.500" />
              <Heading as="h3" size="md" mt={4}>Live Tracking</Heading>
              <Text fontSize="sm" color="gray.600" mt={2}>
                Track your shipments in real time with GPS updates.
              </Text>
              <Button mt={4} colorScheme="blue" w="full">
                Track Now
              </Button>
            </CardBody>
          </Card>

          {/* Warehouse & Storage Booking */}
          <Card borderRadius="lg" boxShadow="md" _hover={{ boxShadow: "xl" }}>
            <CardBody textAlign="center">
              <Icon as={FaWarehouse} boxSize={12} color="yellow.500" />
              <Heading as="h3" size="md" mt={4}>Warehouse Booking</Heading>
              <Text fontSize="sm" color="gray.600" mt={2}>
                Reserve cold storage or warehouses for your crops.
              </Text>
              <Button mt={4} colorScheme="yellow" w="full">
                Book Storage
              </Button>
            </CardBody>
          </Card>

          {/* Transport Cost Estimator */}
          <Card borderRadius="lg" boxShadow="md" _hover={{ boxShadow: "xl" }}>
            <CardBody textAlign="center">
              <Icon as={FaCalculator} boxSize={12} color="red.500" />
              <Heading as="h3" size="md" mt={4}>Transport Cost Estimator</Heading>
              <Text fontSize="sm" color="gray.600" mt={2}>
                Estimate transport costs based on distance.
              </Text>
              <VStack spacing={3} mt={3}>
                <Input
                  type="number"
                  placeholder="Enter distance (km)"
                  onChange={(e) => setDistance(e.target.value)}
                  focusBorderColor="red.400"
                />
                <Button colorScheme="red" w="full" onClick={calculateCost}>
                  Calculate
                </Button>
                {cost !== null && (
                  <Text fontSize="lg" color="green.600" fontWeight="bold">
                    Estimated Cost: ₹{cost}
                  </Text>
                )}
              </VStack>
            </CardBody>
          </Card>
        </Grid>
      </Box>
    </LawyerDashboardWrapper>
  );
};

export default LogisticsSupport;
