import { Divider } from '@chakra-ui/react'
import React from 'react'
import Categories from '../widgets/Categories'

import ListedItems from '../widgets/ListedItems'
import Search from '../widgets/Search'

const Home = () => {
    
    return (
        <>
          
           

                    <Search />
                    <Divider />
                    <Categories />
                    <Divider />
                    <ListedItems />
               
          

        </>
    )
}

export default Home