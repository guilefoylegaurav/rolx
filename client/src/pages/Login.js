import { Button, FormControl, GridItem, Heading, Input, SimpleGrid, Stack, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import Login from '../widgets/LogIn'
import SignUp from '../widgets/SignUp'

export default function LogIn() {

    const [register, setRegister] = useState(true)

    const toggle = () => {
        setRegister(!register)
    }

    if (register) {
        return <SignUp toggle={toggle}/>
    }
    return <Login toggle={toggle}/>

}
