import React from 'react'
import { Heading, Flex, IconButton, Avatar, Stack, SimpleGrid, Button, Icon, GridItem, FormControl, FormLabel, Input, Textarea, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Text, Divider } from '@chakra-ui/react'
import { ArrowBackIcon, EditIcon } from '@chakra-ui/icons'
import { BsPerson } from 'react-icons/bs'

export default function Profile() {
  return (
    <Stack rowGap={2}>
      <Flex justifyContent={'space-between'}>
        <IconButton size={'xs'} variant='outline'><ArrowBackIcon /></IconButton>
        <Flex w="full" justifyContent={'center'}>
          <Heading size={'md'} justifySelf="center">Profile</Heading>
        </Flex>
      </Flex>
      <Flex justifyContent={'center'} paddingTop={5}>
        <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
      </Flex>
      <SimpleGrid columns={4} columnGap={3} rowGap={4} paddingTop={4}>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your name " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password " type={"password"} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea placeholder="Enter detailed bio " />
          </FormControl>
        </GridItem>
       
         
       
      </SimpleGrid>
     
      <Button leftIcon={<Icon as={BsPerson} />} alignSelf={{base: 'auto', md:'flex-end'}} variant="solid" size= {{base:"lg", md:'sm'}} bgGradient='linear(to-t, purple.400, purple.200)' color="white">
            Update Profile
          </Button>
      <Accordion allowToggle paddingBottom={'10'}>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bgGradient: 'linear(to-t, purple.400, purple.200)', color: 'white' }}>
              <Box flex="1" textAlign="left">
                My Ads
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack padding={1} >
              <Flex justifyContent={'space-between'} alignItems='baseline'>
                <Text fontSize={'md'}>IPhone SE for Sale</Text>
                <EditIcon />
              </Flex>
              <Text fontStyle={'italic'} fontSize={'xs'}>3 days ago</Text>
              <Divider />
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  )
}
