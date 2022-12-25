import { Icon } from '@chakra-ui/icons'
import { Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function CategoryTile({label, icon}) {
    const [bgGrad, setBgGrad] = useState('linear(to-t, gray.200, gray.200)')
    const [txtCol, setTxtCol] = useState("gray.500")

    const toggle = () => {
        setBgGrad('linear(to-t, purple.400, purple.200)')
        setTxtCol("whiteAlpha.900")
    }

    return (
        <Stack w={{base:"full", md: "80px"}} padding={3} bgGradient={bgGrad} borderRadius={{base: 22, md: 9}} justifyContent="center" onClick={toggle}>
            <Text color={txtCol} alignSelf="center" fontSize="sm" fontWeight="bold">{label}</Text>
            <Icon 
            display={{base: "flex", md:"none"}}
            as = {icon} alignSelf="center" color={txtCol} fontSize="4xl" />

        </Stack>
    )
}
