import { Stack, Text, Heading, InputGroup, InputLeftElement, Input, Flex} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import React from 'react'

export default function Search() {
    // const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Stack paddingY={2} display={{base: "flex", md:"none"}}>
            <Text>Mohali, Punjab</Text>
            <Flex w="full" justifyContent="flex-start">
                <Heading>Best Products</Heading>
                {/* <Flex><Button onClick={toggleColorMode} size="sm" >{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button></Flex> */}
            </Flex>

            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={< SearchIcon />}
                />
                <Input type='string' placeholder='Search' />
            </InputGroup>
        </Stack>
    )
}
