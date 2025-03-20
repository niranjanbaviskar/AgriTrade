import { useState } from 'react';
import DashBoardWrapper from '@/components/DashBoardWrapper';
import { Box, Button, Flex, Heading, Icon, Text, Input, Textarea, SimpleGrid, Image } from '@chakra-ui/react';
import Files from 'react-files';
import { RxCross2 } from 'react-icons/rx';
import { Upload, Plus } from 'lucide-react';

export default function UploadCrop() {
    const [file, setFile] = useState(null);
    const [cropName, setCropName] = useState('');
    const [cropType, setCropType] = useState('');
    const [expectedRate, setExpectedRate] = useState('');
    const [expectedDate, setExpectedDate] = useState('');
    const [description, setDescription] = useState('');
    const [crops, setCrops] = useState([
        { name: 'Wheat', type: 'Grain', price: '20', expectedDate: '2025-04-01', description: 'High-quality wheat.', image: 'https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop.jpg' },
        { name: 'Rice', type: 'Grain', price: '30', expectedDate: '2025-05-15', description: 'Organic rice.', image: 'https://cdn.britannica.com/17/176517-050-6F2B774A/Pile-uncooked-rice-grains-Oryza-sativa.jpg' },
        { name: 'Tomato', type: 'Vegetable', price: '15', expectedDate: '2025-03-20', description: 'Fresh red tomatoes.', image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=pexels-pixabay-533280.jpg&fm=jpg' },
        { name: 'Potato', type: 'Vegetable', price: '10', expectedDate: '2025-04-10', description: 'Premium quality potatoes.', image: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg' }
    ]);

    const handleChange = (files) => {
        setFile(files[0]);
    };

    const handleError = (error) => {
        console.log('Error:', error.message);
    };

    const addCropToList = () => {
        if (!file || !cropName || !cropType || !expectedRate || !expectedDate || !description) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        const newCrop = {
            name: cropName,
            type: cropType,
            price: expectedRate,
            expectedDate,
            description,
            image: URL.createObjectURL(file),
        };
        
        setCrops([...crops, newCrop]);
        setCropName('');
        setCropType('');
        setExpectedRate('');
        setExpectedDate('');
        setDescription('');
        setFile(null);
    };

    return (
        <DashBoardWrapper page='upload'>
            <Box bg='gray.100' p={6} rounded='md'>
                <Heading fontSize='3xl' mb={4}>Upload Your Crop</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    <Box p={6} border='1px solid gray' rounded='md' bg='white'>
                        {file ? (
                            <Flex align='center' justify='space-between' mb={4}>
                                <Text>{file.name}</Text>
                                <Button colorScheme='red' onClick={() => setFile(null)}>
                                    <Icon as={RxCross2} />
                                </Button>
                            </Flex>
                        ) : (
                            <Files
                                className='files-dropzone'
                                onChange={handleChange}
                                onError={handleError}
                                accepts={['image/png', 'image/jpg', 'image/jpeg']}
                                maxFileSize={5000000}
                                clickable>
                                <Flex p={6} border='2px dashed gray' align='center' justify='center' cursor='pointer'>
                                    <Upload size={24} />
                                    <Text ml={2}>Drop image or click to upload</Text>
                                </Flex>
                            </Files>
                        )}
                        <Input placeholder='Crop Name' value={cropName} onChange={(e) => setCropName(e.target.value)} mt={4} />
                        <Input placeholder='Crop Type' value={cropType} onChange={(e) => setCropType(e.target.value)} mt={4} />
                        <Input placeholder='Expected Price (per kg)' type='number' value={expectedRate} onChange={(e) => setExpectedRate(e.target.value)} mt={4} />
                        <Input placeholder='Expected Harvest Date' type='date' value={expectedDate} onChange={(e) => setExpectedDate(e.target.value)} mt={4} />
                        <Textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} mt={4} />
                        <Button mt={4} colorScheme='green' onClick={addCropToList}>Add Crop</Button>
                    </Box>
                    <Box>
                        <Heading fontSize='xl' mb={4}>Added Crops (Temporary)</Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            {crops.map((crop, index) => (
                                <Box key={index} p={4} border='1px solid gray' rounded='md' bg='white'>
                                    <Image src={crop.image} alt={crop.name} width='100%' height='100px' objectFit='cover' rounded='md' mb={2} />
                                    <Text fontWeight='bold'>{crop.name} ({crop.type})</Text>
                                    <Text>Price: ₹{crop.price} /kg</Text>
                                    <Text>Expected: {crop.expectedDate}</Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </SimpleGrid>
            </Box>
        </DashBoardWrapper>
    );
}
