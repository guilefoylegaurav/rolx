import { Icon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'


import React from 'react'

export default function TabItem({ icon, activated=false }) {

    return (
      <Flex justifyContent="center">
        <Icon as = {icon} fontSize="2xl" color={activated ? "purple.600": "purple.200"} />
      </Flex>
        


    )
}
