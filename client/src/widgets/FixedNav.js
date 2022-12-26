import TabItem from '../components/TabItem'
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineHeart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import React from 'react'
import { Flex, InputGroup, InputLeftElement, Input, Box, Icon, Button, Heading, Container } from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function FixedNav() {
    // const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Flex as="header"
                zIndex="overlay"
                position="fixed" w="full" bg="white" shadow="md">
                
                <Container maxW="container.xl">
                    <Flex w="full"
                    gap={3}
                    display={{ base: "none", md: "flex" }}
                    top
                    h={8}
                    paddingY={8} alignItems="center">
                    <Heading >rolx</Heading>
                    <InputGroup w="20vw" size='sm'>
                        <InputLeftElement

                            pointerEvents='none'
                            children={< SearchIcon />}
                        />
                        <Input type='string' placeholder='Search' />




                    </InputGroup>
                    <Button size={'sm'} variant="ghost">Search</Button>
                    <Box flex="1"></Box>
                    <Link to="/"><Icon as={AiOutlineHome} fontSize="xl" color="purple.600"></Icon></Link>
                    <Link to="/addListing"><Icon as={AiOutlinePlusCircle} fontSize="xl" color="purple.300"></Icon></Link>
                    <Link to="/saved"><Icon as={AiOutlineHeart} fontSize="xl" color="purple.300"></Icon></Link>
                    <Link to="/profile"><Icon as={BsPerson} fontSize="xl" color="purple.300"></Icon></Link>
                    {/* <Button onClick={toggleColorMode} size="xs" variant="outline" color="purple.300">{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button> */}
                    </Flex>
                
                </Container>



            </Flex>
            <Flex as="footer"
                zIndex="overlay"
                padding={2}
                display={{ base: "flex", md: "none" }}
                position="fixed" marginX={{ base: "1vh", md: 0 }} w={{ base: "96vw", md: "full" }} bottom={2} h={12} bg="white" shadow="dark-lg" justifyContent="space-around" borderBottomRadius={10}>
                <TabItem path="/" icon={AiOutlineHome} activated />
                <TabItem path="/addListing" icon={AiOutlinePlusCircle} />
                <TabItem path="/saved"  icon={AiOutlineHeart} />
                <TabItem path="/profile"  icon={BsPerson} />

            </Flex>


        </>
    )
}
