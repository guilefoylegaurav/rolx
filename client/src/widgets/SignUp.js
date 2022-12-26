import { Button, ButtonGroup, FormControl, GridItem, Heading, Input, SimpleGrid, Stack, Textarea } from '@chakra-ui/react'

import React from 'react'

export default function SignUp({toggle}) {
    return (
        <Stack paddingTop={{base:'24vh', md: '70px'}}>
        <Heading fontSize={{base: '2xl', md: 'xl' }}>Register</Heading>
            <SimpleGrid columns={4} columnGap={3} rowGap={4} paddingTop={4}>
                <GridItem colSpan={4}>
                    <FormControl>

                        <Input placeholder="Name" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={4}>
                    <FormControl>

                        <Input placeholder="Email " type={'email'} />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={4}>
                    <FormControl>
                        <Textarea placeholder="Bio" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={4}>
                </GridItem>
                
            </SimpleGrid>
            <Button alignSelf={{base: 'auto', md:'flex-end'}} variant="solid" size= {{base:"lg", md:'md'}} bgGradient='linear(to-t, purple.400, purple.200)' color="white">
            Register
          </Button>
            <Button alignSelf={'flex-end'} fontSize={'sm'} variant='link' onClick={toggle}>Login instead</Button>
        </Stack>
    )
}
