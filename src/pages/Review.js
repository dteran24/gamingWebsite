import React,{ useEffect} from 'react'
import { useDispatch } from 'react-redux';
import Reviews from '../components/reviews/Reviews';
import CreateReviewModule from '../components/CreateReviewModule';
import { getReviews } from '../actions/reviews';
import {Button, useDisclosure, Center} from '@chakra-ui/react'

export default function Review() {
  const dispatch = useDispatch();
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch])

  return (
    <>
      <Reviews/>
      <Center>
        <Button m='5' onClick={onOpen}>Write a Review</Button>
      </Center>
    
      <CreateReviewModule isOpen={isOpen} onClose={onClose}/>
    </>
    
  )
}
