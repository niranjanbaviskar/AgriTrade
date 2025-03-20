import { UserAuth } from '@/lib/auth';
import Link from 'next/link'
import { FiUser } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { Flex, Icon, Image, Button, Text, Divider, Box } from '@chakra-ui/react'
import { AiOutlineFileSearch } from "react-icons/ai";
import { LuLogOut, LuNewspaper } from "react-icons/lu";
import { TbCloudUpload } from "react-icons/tb";
import { RiContactsBookLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";



export default function LawyerDashboardWrapper({ children, page }) {
    const dashboard = page === "dashboard" ? true : false;
    const profile = page === "profile" ? true : false;
    
const files = page === "files";
const storages = page === "storages";
const aid = page === "aid";
const news = page === "news";
const logestic = page === "logestic";
const faqs = page === "faqs";


    const {logOut} = UserAuth();

    return (
        <Flex
            flexDirection={{ base: "column-reverse", lg: "row" }}
            minHeight="100vh"

        >
            <Flex zIndex={10} width={{ base: "100%", lg: "250px" }} backgroundColor="gray.100" flexDirection={{ base: "row", lg: "column" }} justifyContent={{ base: "center", lg: "space-between" }} alignItems={"center"} padding={{ base: 2, lg: 6 }} gap={{ base: 2, lg: 4 }} minHeight={{ base: "60px", lg: "100vh" }} position={"fixed"} bottom={0}>
                <Flex flexDirection={{ base: "row", lg: "column" }} gap={{ base: 2, lg: 4 }} width={{ base: "80%", lg: "auto" }} justifyContent={"space-evenly"}>
                    <Flex justifyContent="center" alignItems="center" display={{ base: "none", lg: "block" }} >
                        <Image src="/logo.svg" alt="Nyay Sathi" width={"100%"} />
                    </Flex>
                    <Divider display={{ base: "none", lg: "block" }} />
                    <Link href="/lawyer/dashboard">
                        <Button colorScheme='gray' bg={dashboard && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                            <Icon boxSize={{ base: 7, lg: 5 }} as={HiOutlineHome} />
                            <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>Home</Text>
                        </Button>
                    </Link>
                    <Link href="/lawyer/farmerreg" width="100%">
                                            <Button colorScheme='gray' bg={files && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                                                <Icon boxSize={{ base: 7, lg: 5 }} as={AiOutlineFileSearch} />
                                                <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>Registered Farmers</Text>
                                            </Button>
                                        </Link>
                                        <Link href="/lawyer/connect" width="100%">
                                            <Button colorScheme='gray' bg={storages && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                                                <Icon boxSize={{ base: 7, lg: 5 }} as={TbCloudUpload} />
                                                <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>connected farmer</Text>
                                            </Button>
                                        </Link>
                                        <Link href="/lawyer/aid-directory1" width="100%">
                                            <Button colorScheme='gray' bg={aid && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                                                <Icon boxSize={{ base: 7, lg: 5 }} as={RiContactsBookLine} />
                                                <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>crops & land information</Text>
                                            </Button>
                                        </Link>
                                        {/* <Box display={{ base: "none", lg: "block" }}>
                                            <Link href="/lawyer/news" width="100%">
                                                <Button colorScheme='gray' bg={news && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                                                    <Icon boxSize={{ base: 7, lg: 5 }} as={LuNewspaper} />
                                                    <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>New & Updates</Text>
                                                </Button>
                                            </Link>
                                        </Box> */}
                                        <Box display={{ base: "none", lg: "block" }}>
                                            <Link href="/lawyer/logestic" width="100%">
                                                <Button colorScheme='gray' bg={logestic && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                                                    <Icon boxSize={{ base: 7, lg: 5 }} as={FaCar} />
                                                    <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>Logistic Support</Text>
                                                </Button>
                                            </Link>
                                        </Box>
                                        <Box display={{ base: "none", lg: "block" }}>
                                            <Link href="/lawyer/faqs" width="100%">
                                                <Button colorScheme='gray' bg={faqs && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width="100%">
                                                <Icon boxSize={{ base: 7, lg: 5 }} as={FaQuestionCircle} />
                                                    <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>FAQs</Text>
                                                </Button>
                                            </Link>
                                        </Box>


                </Flex>

                <Flex flexDirection={{ base: "row", lg: "row" }} justifyContent={"space-between"} gap={4} width={{ base: "20%", lg: "100%" }}>
                    <Link href="/lawyer/profile" width={{ base: "0", lg: "100%" }}>
                        <Button colorScheme='gray' bg={profile && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" width={{ base: "auto", lg: "100%" }} >
                            <Icon boxSize={{ base: 7, lg: 5 }} as={FiUser} />
                            <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>Profile</Text>
                        </Button>
                    </Link>
                    <Button colorScheme='gray' bg={profile && "gray.200"} padding={2} rounded={{ base: "full", lg: 4 }} alignItems={"center"} justifyContent="flex-start" onClick={logOut} display={{ base: "none", lg: "block" }} >
                        <Icon boxSize={{ base: 7, lg: 5 }} as={LuLogOut} />
                        {/* <Text display={{ base: "none", lg: "block" }} marginLeft={{ base: 0, lg: 3 }}>Profile</Text> */}
                    </Button>
                </Flex>
            </Flex>
            <Flex flexDirection={"column"} marginLeft={{ base: "0", lg: "250px" }} marginBottom={{ base: "50px", lg: "0" }} width={"100%"} minHeight={"100vh"} padding={8}>
                {children}
            </Flex>
        </Flex>
    )
}
