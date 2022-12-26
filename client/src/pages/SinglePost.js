
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Stack, Button, Heading, Flex, IconButton, Image, Text, Avatar, Badge, Box } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';


export default function SinglePost() {
  const { id } = useParams();
  return (
    <Stack rowGap={2} paddingBottom={10}>
      <Flex justifyContent={'space-between'}>
        <IconButton size={'xs'} variant='outline'><ArrowBackIcon /></IconButton>
       
          <Heading paddingX="5" size={'md'} justifySelf="center"><Text noOfLines={1}>Samsung Phone Blah Blah Blah</Text></Heading>
        
        <Badge paddingTop={1} bg='purple.400' color='white'>INR 30000</Badge>
      </Flex>
      <Box h='2'></Box>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rose_O%27Neill_-_When_We_All_Believe_%28Santa_Claus_and_children_illustration_from_the_1903_December_2_issue_of_Puck%29.jpg/825px-Rose_O%27Neill_-_When_We_All_Believe_%28Santa_Claus_and_children_illustration_from_the_1903_December_2_issue_of_Puck%29.jpg" alt="image" />
      <Flex justifyContent={'space-between'} alignItems='center'>
        <Heading fontSize={'xl'}>Samsung Phone for Sale</Heading>
        <IconButton variant="unstyled" icon={<AiOutlineHeart />}></IconButton>
      </Flex>
      <Flex gap={3} alignItems='center'>
        
        <Avatar size={'sm'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}

        <Text fontSize={'sm'} fontWeight='bold'>Segun Adebayo</Text>


      </Flex>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      {/* <SimpleGrid columns={4} columnGap={3} rowGap={4} paddingTop={4}>
        <GridItem colSpan={3}>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input placeholder="Product Name " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input placeholder="Price " type={"number"}/>
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Enter item description" />
          </FormControl>
        </GridItem>
      
        <GridItem colSpan={4}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rose_O%27Neill_-_When_We_All_Believe_%28Santa_Claus_and_children_illustration_from_the_1903_December_2_issue_of_Puck%29.jpg/825px-Rose_O%27Neill_-_When_We_All_Believe_%28Santa_Claus_and_children_illustration_from_the_1903_December_2_issue_of_Puck%29.jpg" alt="image" />
        </GridItem>
        <GridItem colSpan={4}>
          <Button  variant="solid" width="full" size="lg" bgGradient='linear(to-t, purple.400, purple.200)' color="white">
          buttonLabel
          </Button>
        </GridItem>
        </SimpleGrid> */}
         <Button alignSelf={{base: 'auto', md: 'flex-end'}}  variant="solid" size={{base:"lg", md: 'sm'}} bgGradient='linear(to-t, purple.400, purple.200)' color="white">
          Contact seller
          </Button>

    </Stack>
  )
}
