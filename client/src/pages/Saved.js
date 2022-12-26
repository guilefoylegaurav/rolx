import React from 'react'
import { Stack,  Heading, SimpleGrid, Flex, IconButton } from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import ItemCard from '../components/ItemCard'


export default function Saved() {
    return (
        <Stack paddingTop={{md: '60px'}}>
            <Flex justifyContent={'space-between'}>
                <IconButton size={'xs'} variant='outline' display={{base: 'flex', md: 'none'}}><ArrowBackIcon/></IconButton>
                <Flex w="full" justifyContent={{base: "center", md: 'flex-start'}}>
                 <Heading size={'md'} justifySelf={{base: "center", md: 'flex-start'}}>Saved Deals</Heading>
                 </Flex>
            </Flex>
            <Stack paddingY={4}>
            <SimpleGrid minChildWidth='200px' spacing="30px">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </SimpleGrid>
        </Stack>


        </Stack>
    )
}
