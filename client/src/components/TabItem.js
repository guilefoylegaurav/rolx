import { Icon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import React from 'react'

export default function TabItem({ path="/", icon, activated=false }) {

    return (
      <Flex justifyContent="center">
        <Link to={path}><Icon as = {icon} fontSize="2xl" color={activated ? "purple.600": "purple.200"} /></Link>
      </Flex>
        


    )
}
