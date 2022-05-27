import React from 'react'
import { Box, Button, LinkBox, LinkOverlay, Heading, Text, Grid, GridItem,ListItem,OrderedList, Center, Flex } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { LinkContainer} from 'react-router-bootstrap';
import { Carousel} from 'react-bootstrap'
import image1 from '../images/eldenrig.jpg'
import image2 from '../images/gow.jpg'
import image3 from '../images/light.jpg'
export default function Home() {
  return (
    <>
<Carousel id='carousel' className='m-5'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


  <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' gap={6} className='m-5'>
    <GridItem>
      <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
        <Box as='time' dateTime='2022-02-26'>
        30 days ago
        </Box>
        <Heading size='md' my='2'>
          <LinkOverlay href='https://www.wired.com/story/elden-ring-review/' target='_blank'>
              Elden Ring Is the Game of the Year
          </LinkOverlay>
        </Heading>
          <Text>
          Elden Ring, released on Friday, builds on the strengths of its predecessors in ways that will thrill longtime fans and convert new players. 
          This is a game that could not have been made on the first attempt.
          </Text>
      </LinkBox>
    </GridItem>
    <GridItem>
      <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
        <Box as='time' dateTime='2021-01-15'>
        17 days ago
        </Box>
        <Heading size='md' my='2'>
          <LinkOverlay href='https://www.pcgamer.com/dying-light-2-stay-human-review/' target='_blank'>
            DYING LIGHT 2: STAY HUMAN REVIEW
          </LinkOverlay>
        </Heading>
          <Text>
          I land a flying two-footed kick into a bandit and send him screaming off the edge of a roof and onto the zombie-filled streets below. 
          </Text>
      </LinkBox>
    </GridItem>
    <GridItem>
    <Box>
      <Heading> Trending Titles! </Heading>
        <OrderedList>
          <ListItem>Eldin Ring</ListItem>
          <ListItem>Apex Legends</ListItem>
          <ListItem>Fortnite</ListItem>
          <ListItem>Valorant</ListItem>
        </OrderedList>
    </Box>
    </GridItem>
    <GridItem>
      <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
        <Box as='time' dateTime='2022-02-24 15:30:00 +0000 UTC'>
        13 days ago
        </Box>
        <Heading size='md' my='2'>
          <LinkOverlay href='https://www.gamesradar.com/fortnite-patch-notes/' target='_blank'>
          Fortnite patch notes v20.00 hotfix for Chapter 3 Season 2
          </LinkOverlay>
        </Heading>
          <Text>
          he latest Fortnite patch notes are here for the v20.00 hotfix, and 
          although there were some pretty hefty changes made last week for the launch for Fortnite Season 2, this update isn't light on features either.
          </Text>
      </LinkBox>
    </GridItem>
    <GridItem colSpan={2}>
        <Box borderWidth='1px' rounded='md' h='full' >
          <Heading textAlign='center'>Write a review!</Heading>
          <Flex direction='column' justify='space-around' h='80%' >
            <Text ms='5'>Played a recent game that you liked or disliked? Lets hear about it!</Text>

            <Center>
            <LinkContainer to='/reviews'> 
              <Button w='40'><ArrowForwardIcon/></Button> 
            </LinkContainer>
            </Center>
            
          </Flex>
        </Box>
    </GridItem>
  </Grid>

</>







  )
}
