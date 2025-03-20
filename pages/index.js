import { ChakraLink, Flex, Heading, Text, Button, Image, Stack, useBreakpointValue, background, ChakraProvider } from '@chakra-ui/react'

import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Flex direction={{ base: 'column', md: 'row' }} px={4} bg="white" color="black" align="center" justify="space-between" w="100%">
        {/* Left Section */}
        <Flex align="center">
          <Image src="E.jpg" alt="Banner Image" boxSize="70px" borderRadius="10px" mr={2} bg={'white'} width={'65px'} mt={'38px'}height={'100px'} />
          <Stack>
            <Heading fontSize={{ base: 'sm', md: 'md' }} mt={'25px'} mb={-3} >कृषि एवं किसान कल्याण मंत्रालय</Heading>
            <Text fontWeight="bold" textTransform={'uppercase'} fontSize={{ base: 'xl', md: '2xl' }} >Ministry of & <br style={{ margin: '-0.7em' }} />AGRICULTURE AND FARMERS WELFARE</Text>
          </Stack>
        </Flex>

        {/* Right Section */}
        <Flex align="center">
          
        </Flex>
      </Flex>

      <Stack direction={{ base: 'column', md: 'row' }}>
        <Flex px={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Image src='/icon.svg' alt="Logo" width="85px" mt={'30px'} mb={'-30px'}></Image>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'} fontSize={'59px'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'yellow.400',
                  zIndex: -1,
                  

                }}>
                AgriTrade
              </Text>
              <br />{' '}
              <Text color={'black'} as={'span'} fontSize={'47px'} >
              Bridge the Gap: Direct Market, Direct Gains

              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} >
            AgriTrade is a revolutionary mobile app designed to transform the agricultural market by providing farmers with direct access to companies in need of their products. In an industry often plagued by intermediaries and inefficiencies, AgriTrade aims to streamline the process of agricultural trade, ensuring farmers receive fair pricing and companies secure high-quality, fresh produce.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Link href="/login">
                <Button
                  size={'lg'}
                  rounded={'full'}
                  bg={'yellow.400'}
                  color={'black'}
                >
                  Login as Farmer
                </Button>
              </Link>
              <Link href="/lawyer/login">
                <Button rounded={'full'} bg={'gray.200'} color={'black'} size={'lg'}>Login As company</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} p={8}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
            <Image
            mt={'-10px'}
            ml={{base: 0, lg: '185px'}}
              alt={'Login Image'}
              objectFit={'cover'}
              src='Modi.png'
              style={{
                width:'550px',
                borderRadius: '15px', // Add rounded corners
                overflow: 'hidden', // Hide overflow content


              }}
            />
          </div>
        </Flex>
      </Stack >
    </>
  )

  // return <Flex
  // Empowering You with Legal Wisdom: 
  //   flexDirection="column"
  //   justifyContent="center"
  //   alignItems="center"
  //   minHeight="100vh"
  // >
  //   <Heading size="2xl" fontWeight="bold" textAlign="center">
  //     Nyay Sathi
  //   </Heading>
  //   <Text mt={6}>
  //     Empowering You with Legal Wisdom: 
  //     Companion.
  //   </Text>
  //   <Link href="/login">
  //     <Button
  //       variant="solid"
  //       size="md"
  //       colorScheme="yellow"
  //       mt={6}
  //       fontWeight="bold"
  //     >
  //       Login
  //     </Button>
  //   </Link>
  //   <Link href="/lawyer/login">
  //     <Button
  //       variant="solid"
  //       size="md"
  //       colorScheme="yellow"
  //       mt={6}
  //       fontWeight="bold"
  //     >
  //       Login as Lawyer
  //     </Button>
  //   </Link>
  // </Flex>
}