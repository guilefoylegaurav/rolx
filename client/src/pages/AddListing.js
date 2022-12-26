
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Stack, Button, Heading, Flex, IconButton, Image, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Icon } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function AddListing() {
  return (
    <Stack>
        <Flex justifyContent={'space-between'}>
                <IconButton size={'xs'} variant='outline'><ArrowBackIcon/></IconButton>
                <Flex w="full" justifyContent={'center'}>
                 <Heading size={'md'} justifySelf="center">List Item</Heading>
                 </Flex>
            </Flex>
        <SimpleGrid columns={4} columnGap={3} rowGap={4} paddingTop={4}>
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
          <Button leftIcon={<Icon as={AiOutlinePlusCircle} />} variant="solid" width="full" size="lg" bgGradient='linear(to-t, purple.400, purple.200)' color="white">
            Add Item
          </Button>
        </GridItem>
        </SimpleGrid>
    </Stack>
  )
}
