import React from 'react'
import ItemCard from '../components/ItemCard'
import { SimpleGrid, Stack } from '@chakra-ui/react'

export default function ListedItems() {
    return (
        <Stack paddingY={4}>
            <SimpleGrid minChildWidth='200px' spacing="30px">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </SimpleGrid>
        </Stack>
    );
}
