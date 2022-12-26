import React from 'react'
import { Stack,  Heading, SimpleGrid, Flex, IconButton } from '@chakra-ui/react'

import { ArrowBackIcon } from '@chakra-ui/icons'
import ItemCard from '../components/ItemCard'


export default function Saved() {
    return (
        <Stack>
            <Flex justifyContent={'space-between'}>
                <IconButton size={'xs'} variant='outline'><ArrowBackIcon/></IconButton>
                <Flex w="full" justifyContent={'center'}>
                 <Heading size={'md'} justifySelf="center">Saved Deals</Heading>
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
