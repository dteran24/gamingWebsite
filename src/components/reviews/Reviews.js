import React from 'react'
import {Box, Grid, GridItem, Heading, Text, Flex, Center} from '@chakra-ui/react'
import { StarIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { useSelector} from 'react-redux'

export default function Reviews() {
  const reviews = useSelector((state) => state.reviews);
  console.table(reviews)
 
  return (

  !reviews.length ? <Flex align='center' justify='center' h='50vh'><Heading>No Reviews Written!</Heading></Flex> : (
    <Center>
  <Grid m='8'>
    {reviews.map(review => (
        <GridItem m='5'>
          <Box borderWidth='1px' borderRadios='lg' p='5'>
            <Box>
              <Heading>{review.game}</Heading>
            </Box>
            <Box m='5'>
              <Text>{review.summary}</Text>
            </Box>
            <Flex justify='space-between'>
              <Text color='gray.500'>{`Created by ${review.author}`}</Text>
              <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < review.score ? 'yellow.300' : 'gray.300'}
              />
            ))}
            </Box>
            </Flex>
        </Box>
      </GridItem>
    
    ))}
    

  </Grid>
  </Center>
  ))
}

