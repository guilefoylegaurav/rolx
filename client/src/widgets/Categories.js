import { Flex, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import CategoryTile from '../components/CategoryTile'
import { AiOutlineHome, AiOutlineCar, AiOutlineLaptop } from 'react-icons/ai'
import { FaDog, FaChair } from 'react-icons/fa'
export default function Categories() {
    return (
        <Stack paddingTop={{base:2, md: 10}} paddingBottom={{base: 2, md: 4}}>
            <Text fontWeight="bold" fontSize={{base: "md", md: "xl"}} alignSelf={{base: "flex-start", md:"flex-end"}}>Browse</Text>
            <Flex justifyContent={{ base: "flex-start", md: "flex-end"}} w="full" gap={2} overflowX={{base:"scroll", md:"visible"}}>
                <CategoryTile label="Property" icon={AiOutlineHome} />
                <CategoryTile label="Vehicles" icon={AiOutlineCar} />
                <CategoryTile label="Gadgets" icon={AiOutlineLaptop} />
                <CategoryTile label="Furniture" icon={FaChair} />
                <CategoryTile label="Petcare" icon={FaDog} />
            </Flex></Stack>
    )
}