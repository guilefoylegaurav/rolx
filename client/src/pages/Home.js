import { Container, Stack, Divider } from '@chakra-ui/react'
import React from 'react'
import Categories from '../widgets/Categories'
import FixedNav from '../widgets/FixedNav'
import ListedItems from '../widgets/ListedItems'
import Search from '../widgets/Search'

const Home = () => {
    
    return (
        <>
          <FixedNav />
            <Container maxW="container.xl" padding={5}>
                <Stack>

                    <Search />
                    <Divider />
                    <Categories />
                    <Divider />
                    <ListedItems />
                </Stack>

            </Container>
          

        </>
    )
}

export default Home