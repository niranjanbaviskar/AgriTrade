import LawyerDashboardWrapper from "@/components/LawyerDashboardWrapper";
import { useState } from "react";
import { Box, Image, Text, Heading, Flex, Select, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


export default function CropPriceDashboard() {
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");


    const cropData = [
        // Maharashtra
        { state: "Maharashtra", district: "Pune", crop: "Wheat", price: 2200 },
        { state: "Maharashtra", district: "Pune", crop: "Sugarcane", price: 2800 },
        { state: "Maharashtra", district: "Pune", crop: "Onion", price: 1500 },
        { state: "Maharashtra", district: "Pune", crop: "Tomato", price: 1800 },
    
        { state: "Maharashtra", district: "Mumbai", crop: "Rice", price: 2500 },
        { state: "Maharashtra", district: "Mumbai", crop: "Mango", price: 6000 },
        { state: "Maharashtra", district: "Mumbai", crop: "Banana", price: 3200 },
        { state: "Maharashtra", district: "Mumbai", crop: "Coconut", price: 5000 },
    
        { state: "Maharashtra", district: "Nagpur", crop: "Sugarcane", price: 2800 },
        { state: "Maharashtra", district: "Nagpur", crop: "Soybean", price: 3500 },
        { state: "Maharashtra", district: "Nagpur", crop: "Turmeric", price: 4000 },
        { state: "Maharashtra", district: "Nagpur", crop: "Cotton", price: 4500 },
        { state: "Maharashtra", district: "Nashik", crop: "Onion", price: 1500 },
        { state: "Maharashtra", district: "Kolhapur", crop: "Jowar", price: 1800 },
        { state: "Maharashtra", district: "Solapur", crop: "Bajra", price: 1600 },
        { state: "Maharashtra", district: "Aurangabad", crop: "Cotton", price: 4500 },
        { state: "Maharashtra", district: "Amravati", crop: "Soybean", price: 3500 },
        { state: "Maharashtra", district: "Thane", crop: "Mango", price: 6000 },
        { state: "Maharashtra", district: "Satara", crop: "Turmeric", price: 4000 },
    
        // Gujarat
        { state: "Gujarat", district: "Ahmedabad", crop: "Cotton", price: 5000 },
    { state: "Gujarat", district: "Ahmedabad", crop: "Groundnut", price: 3200 },
    { state: "Gujarat", district: "Ahmedabad", crop: "Castor", price: 3100 },
    { state: "Gujarat", district: "Ahmedabad", crop: "Sesame", price: 4200 },

    { state: "Gujarat", district: "Surat", crop: "Sugarcane", price: 2800 },
    { state: "Gujarat", district: "Surat", crop: "Rice", price: 2900 },
    { state: "Gujarat", district: "Surat", crop: "Banana", price: 2600 },
    { state: "Gujarat", district: "Surat", crop: "Maize", price: 2700 },

    { state: "Gujarat", district: "Rajkot", crop: "Groundnut", price: 3200 },
    { state: "Gujarat", district: "Rajkot", crop: "Cumin", price: 4000 },
    { state: "Gujarat", district: "Rajkot", crop: "Wheat", price: 2100 },
    { state: "Gujarat", district: "Rajkot", crop: "Sesame", price: 4200 },

        { state: "Gujarat", district: "Vadodara", crop: "Wheat", price: 2100 },
        { state: "Gujarat", district: "Bhavnagar", crop: "Cumin", price: 4000 },
        { state: "Gujarat", district: "Jamnagar", crop: "Sesame", price: 4200 },
        { state: "Gujarat", district: "Anand", crop: "Tobacco", price: 2800 },
        { state: "Gujarat", district: "Gandhinagar", crop: "Castor", price: 3100 },
        { state: "Gujarat", district: "Junagadh", crop: "Peanut", price: 3300 },
        { state: "Gujarat", district: "Mehsana", crop: "Mustard", price: 2900 },
    
        // Punjab
        { state: "Punjab", district: "Ludhiana", crop: "Rice", price: 3100 },
        { state: "Punjab", district: "Ludhiana", crop: "Wheat", price: 2200 },
        { state: "Punjab", district: "Ludhiana", crop: "Mustard", price: 2600 },
        { state: "Punjab", district: "Ludhiana", crop: "Potato", price: 1700 },
    
        { state: "Punjab", district: "Amritsar", crop: "Mustard", price: 2600 },
        { state: "Punjab", district: "Amritsar", crop: "Sugarcane", price: 2900 },
        { state: "Punjab", district: "Amritsar", crop: "Wheat", price: 2200 },
        { state: "Punjab", district: "Amritsar", crop: "Barley", price: 2300 },
        { state: "Punjab", district: "Jalandhar", crop: "Maize", price: 2700 },
        { state: "Punjab", district: "Patiala", crop: "Barley", price: 2300 },
        { state: "Punjab", district: "Bathinda", crop: "Sugarcane", price: 2900 },
        { state: "Punjab", district: "Firozpur", crop: "Wheat", price: 2200 },
        { state: "Punjab", district: "Moga", crop: "Gram", price: 2500 },
        { state: "Punjab", district: "Hoshiarpur", crop: "Potato", price: 1700 },
        { state: "Punjab", district: "Rupnagar", crop: "Tomato", price: 3200 },
        { state: "Punjab", district: "Pathankot", crop: "Apple", price: 7000 },
    
        // Uttar Pradesh
        { state: "Uttar Pradesh", district: "Lucknow", crop: "Potato", price: 1600 },
        { state: "Uttar Pradesh", district: "Lucknow", crop: "Wheat", price: 2200 },
        { state: "Uttar Pradesh", district: "Lucknow", crop: "Paddy", price: 2000 },
        { state: "Uttar Pradesh", district: "Lucknow", crop: "Sugarcane", price: 2700 },
    
        { state: "Uttar Pradesh", district: "Kanpur", crop: "Paddy", price: 2000 },
        { state: "Uttar Pradesh", district: "Kanpur", crop: "Mustard", price: 2500 },
        { state: "Uttar Pradesh", district: "Kanpur", crop: "Jaggery", price: 3300 },
        { state: "Uttar Pradesh", district: "Kanpur", crop: "Soybean", price: 3500 },
    
        { state: "Uttar Pradesh", district: "Varanasi", crop: "Sugarcane", price: 2700 },
        { state: "Uttar Pradesh", district: "Agra", crop: "Tomato", price: 2200 },
        { state: "Uttar Pradesh", district: "Allahabad", crop: "Guava", price: 5000 },
        { state: "Uttar Pradesh", district: "Gorakhpur", crop: "Banana", price: 2800 },
        { state: "Uttar Pradesh", district: "Meerut", crop: "Jaggery", price: 3300 },
        { state: "Uttar Pradesh", district: "Noida", crop: "Cauliflower", price: 2500 },
        { state: "Uttar Pradesh", district: "Bareilly", crop: "Mustard", price: 2700 },
        { state: "Uttar Pradesh", district: "Moradabad", crop: "Pearl Millet", price: 1900 },
    
        // Rajasthan
        { state: "Rajasthan", district: "Jaipur", crop: "Bajra", price: 1900 },
        { state: "Rajasthan", district: "Jodhpur", crop: "Barley", price: 2400 },
        { state: "Rajasthan", district: "Udaipur", crop: "Coriander", price: 3200 },
        { state: "Rajasthan", district: "Ajmer", crop: "Wheat", price: 2200 },
        { state: "Rajasthan", district: "Bikaner", crop: "Groundnut", price: 3300 },
        { state: "Rajasthan", district: "Kota", crop: "Soybean", price: 3500 },
        { state: "Rajasthan", district: "Alwar", crop: "Rice", price: 2900 },
        { state: "Rajasthan", district: "Sikar", crop: "Cumin", price: 4000 },
        { state: "Rajasthan", district: "Barmer", crop: "Mustard", price: 3100 },
        { state: "Rajasthan", district: "Jaisalmer", crop: "Pearl Millet", price: 2100 },
    
        // Bihar
         // Bihar
    { state: "Bihar", district: "Patna", crop: "Maize", price: 2200 },
    { state: "Bihar", district: "Patna", crop: "Wheat", price: 2100 },
    { state: "Bihar", district: "Patna", crop: "Rice", price: 2500 },
    { state: "Bihar", district: "Patna", crop: "Pulses", price: 3500 },

    { state: "Bihar", district: "Gaya", crop: "Wheat", price: 2100 },
    { state: "Bihar", district: "Gaya", crop: "Mustard", price: 2700 },
    { state: "Bihar", district: "Gaya", crop: "Jute", price: 3500 },
    { state: "Bihar", district: "Gaya", crop: "Sugarcane", price: 2900 },
        { state: "Bihar", district: "Bhagalpur", crop: "Rice", price: 2500 },
        { state: "Bihar", district: "Muzaffarpur", crop: "Litchi", price: 5500 },
        { state: "Bihar", district: "Darbhanga", crop: "Sugarcane", price: 2900 },
        { state: "Bihar", district: "Purnia", crop: "Jute", price: 3500 },
        { state: "Bihar", district: "Araria", crop: "Makhana", price: 6500 },
        { state: "Bihar", district: "Nalanda", crop: "Potato", price: 1600 },
        { state: "Bihar", district: "Begusarai", crop: "Mustard", price: 2700 },
        { state: "Bihar", district: "Siwan", crop: "Gram", price: 2500 },
    
        // Tamil Nadu
        { state: "Tamil Nadu", district: "Chennai", crop: "Turmeric", price: 4500 },
        { state: "Tamil Nadu", district: "Chennai", crop: "Banana", price: 3200 },
        { state: "Tamil Nadu", district: "Chennai", crop: "Groundnut", price: 3400 },
        { state: "Tamil Nadu", district: "Chennai", crop: "Tea", price: 5000 },
    
        { state: "Tamil Nadu", district: "Madurai", crop: "Groundnut", price: 3400 },
        { state: "Tamil Nadu", district: "Madurai", crop: "Coconut", price: 6000 },
        { state: "Tamil Nadu", district: "Madurai", crop: "Pepper", price: 7500 },
        { state: "Tamil Nadu", district: "Madurai", crop: "Coffee", price: 6500 },
        { state: "Tamil Nadu", district: "Coimbatore", crop: "Coconut", price: 6000 },
        { state: "Tamil Nadu", district: "Tiruchirapalli", crop: "Banana", price: 3200 },
        { state: "Tamil Nadu", district: "Erode", crop: "Pepper", price: 7500 },
        { state: "Tamil Nadu", district: "Vellore", crop: "Tea", price: 5000 },
        { state: "Tamil Nadu", district: "Salem", crop: "Coffee", price: 6500 },
        { state: "Tamil Nadu", district: "Dindigul", crop: "Pineapple", price: 4800 },
        { state: "Tamil Nadu", district: "Kanyakumari", crop: "Rubber", price: 8200 },
        { state: "Tamil Nadu", district: "Thanjavur", crop: "Rice", price: 2800 },
    ];
    

    const filteredData = cropData.filter(
        (item) =>
            (!selectedState || item.state === selectedState) &&
            (!selectedDistrict || item.district === selectedDistrict)
    );

    return (
        <LawyerDashboardWrapper>

             {/* Header with Logo & Live Indicator */}
             <Flex justify="space-between" align="center" p={4} bg="white" boxShadow="sm">
                {/* <Image src={logoSrc} alt="Logo" boxSize="50px" /> */}

                {/* Live Indicator */}
                <Flex align="center" gap={2}>
                    <Box 
                        w="10px" 
                        h="10px" 
                        bg="red.500" 
                        borderRadius="full" 
                        animation="blink 1s infinite alternate"
                    />
                    <Text fontWeight="bold" color="red.500">Live</Text>
                </Flex>
            </Flex>

            <Box p={6} bg="gray.100" minH="50vh" borderRadius="lg">
                <Heading mb={4}>📊 Crop Price Dashboard</Heading>

                <Box display="flex" gap={4} mb={4}>
    <Select placeholder="Select State" onChange={(e) => setSelectedState(e.target.value)}>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Punjab">Punjab</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Bihar">Bihar</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
    </Select>

    <Select placeholder="Select District" onChange={(e) => setSelectedDistrict(e.target.value)}>
        {selectedState === "Maharashtra" && (
            <>
                <option value="Pune">Pune</option>
                <option value="Nashik">Nashik</option>
                <option value="Kolhapur">Kolhapur</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Solapur">Solapur</option>
                <option value="Aurangabad">Aurangabad</option>
                <option value="Amravati">Amravati</option>
                <option value="Thane">Thane</option>
                <option value="Satara">Satara</option>
            </>
        )}
        {selectedState === "Gujarat" && (
            <>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Bhavnagar">Bhavnagar</option>
                <option value="Mehsana">Mehsana</option>
                <option value="Junagadh">Junagadh</option>
                <option value="Gandhinagar">Gandhinagar</option>
                <option value="Jamnagar">Jamnagar</option>
                <option value="Anand">Anand</option>
            </>
        )}
        {selectedState === "Uttar Pradesh" && (
            <>
                <option value="Lucknow">Lucknow</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Agra">Agra</option>
                <option value="Allahabad">Allahabad</option>
                <option value="Meerut">Meerut</option>
                <option value="Noida">Noida</option>
                <option value="Bareilly">Bareilly</option>
                <option value="Moradabad">Moradabad</option>
                <option value="Gorakhpur">Gorakhpur</option>
            </>
        )}
        {selectedState === "Bihar" && (
            <>
                <option value="Patna">Patna</option>
                <option value="Gaya">Gaya</option>
                <option value="Bhagalpur">Bhagalpur</option>
                <option value="Darbhanga">Darbhanga</option>
                <option value="Muzaffarpur">Muzaffarpur</option>
                <option value="Purnia">Purnia</option>
                <option value="Araria">Araria</option>
                <option value="Nalanda">Nalanda</option>
                <option value="Begusarai">Begusarai</option>
                <option value="Siwan">Siwan</option>
            </>
        )}
        {selectedState === "Rajasthan" && (
            <>
                <option value="Jaipur">Jaipur</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Ajmer">Ajmer</option>
                <option value="Bikaner">Bikaner</option>
                <option value="Kota">Kota</option>
                <option value="Alwar">Alwar</option>
                <option value="Sikar">Sikar</option>
                <option value="Barmer">Barmer</option>
                <option value="Jaisalmer">Jaisalmer</option>
            </>
        )}
        {selectedState === "Tamil Nadu" && (
            <>
                <option value="Chennai">Chennai</option>
                <option value="Madurai">Madurai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Tiruchirapalli">Tiruchirapalli</option>
                <option value="Erode">Erode</option>
                <option value="Vellore">Vellore</option>
                <option value="Salem">Salem</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Thanjavur">Thanjavur</option>
            </>
        )}
        {selectedState === "Punjab" && (
            <>
                <option value="Ludhiana">Ludhiana</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Jalandhar">Jalandhar</option>
                <option value="Patiala">Patiala</option>
                <option value="Bathinda">Bathinda</option>
                <option value="Firozpur">Firozpur</option>
                <option value="Moga">Moga</option>
                <option value="Hoshiarpur">Hoshiarpur</option>
                <option value="Rupnagar">Rupnagar</option>
                <option value="Pathankot">Pathankot</option>
            </>
        )}
    </Select>
</Box>

                <Box bg="white" p={4} borderRadius="lg" boxShadow="md">
                    <Table variant="simple">
                        <Thead bg="blue.500">
                            <Tr>
                                <Th color="white">State</Th>
                                <Th color="white">District</Th>
                                <Th color="white">Crop</Th>
                                <Th color="white">Price (₹/Quintal)</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <Tr key={index}>
                                        <Td>{item.state}</Td>
                                        <Td>{item.district}</Td>
                                        <Td>{item.crop}</Td>
                                        <Td>₹{item.price}</Td>
                                    </Tr>
                                ))
                            ) : (
                                <Tr>
                                    <Td colSpan={4} textAlign="center">
                                        No Data Available
                                    </Td>
                                </Tr>
                            )}
                        </Tbody>
                    </Table>
                </Box>
            </Box>
        </LawyerDashboardWrapper>
    );
}
