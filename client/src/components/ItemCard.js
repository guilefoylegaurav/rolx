import { Stack, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function ItemCard() {
    const priceColor = useColorModeValue("whiteAlpha.900", "whiteAlpha.900")
    const descColor = useColorModeValue("gray.500", "whiteAlpha.500")
    return (
     <Flex justifyContent="center" w="full">
        <Stack borderRadius={20} shadow="md" justifyContent="center">
            <Stack h="150px" backgroundImage="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Samsung_Galaxy_Watches.jpg/1024px-Samsung_Galaxy_Watches.jpg" backgroundSize={'cover'}
                backgroundPosition={'center center'}
                justifyContent="flex-end" borderTopRadius={20}>
                <Flex borderRadius={20} paddingY={1} paddingX={4} backgroundColor="gray.800" w="-webkit-fit-content" marginLeft="20px" marginBottom="-14px">
                    <Text fontWeight="bold" color={priceColor} fontSize="xs">₹ 20000</Text>
                </Flex>
            </Stack>
            <Stack h="100px" padding={4}>
                <Heading fontSize={{ base: "md" }}>Smartwatch for sale</Heading>
                <Text
                    fontSize="xs" color={descColor} noOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

            </Stack>
        </Stack>
        </Flex>
    )
}
