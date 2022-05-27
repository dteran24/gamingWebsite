import React,{useRef, useState} from 'react'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, 
        Textarea, Button, FormControl, FormLabel,Input, Slider, SliderMark, SliderFilledTrack, 
        SliderTrack, Tooltip, SliderThumb} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { createReview } from '../actions/reviews';

export default function CreateReviewModule(props) {
    const { isOpen, onClose } = props;
    const dispatch = useDispatch();
    const initialRef = useRef();
    const [sliderValue, setSliderValue] = React.useState(0);
    const [showTooltip, setShowTooltip] = React.useState(false);
    const [reviewData, setReviewData] = useState({author: '', game: '', summary: '', score: 0});
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(createReview(reviewData))
    
    }


const ratingTranslate = (rating) => {
    switch(rating){
        case 0:
            return "Unplayable!";
        case 1:
            return "Terrrbile!";
        case 2:
            return "Needs Improvement!";
        case 3:
            return "Not bad, but not great.";
        case 4:
            return "Great!";
        case 5:
            return "Amazing!"
        default: 
            return "";
    }
}

console.log(reviewData);
return (
    <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
        <form onSubmit={handleSubmit}>
            <ModalHeader>Write a Review</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            
            <FormControl>
                <FormLabel>Author name</FormLabel>
                <Input ref={initialRef} 
                    placeholder='Author name' 
                    name='author' 
                    value={reviewData.author} 
                    onChange={(e) => setReviewData({...reviewData, author: e.target.value})} 
                />
            </FormControl>
            <FormControl>
                <FormLabel>Game</FormLabel>
                <Input 
                    placeholder='Game'
                    name='game' 
                    value={reviewData.game} 
                    onChange={(e) => setReviewData({...reviewData, game: e.target.value})} 
                />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Summary</FormLabel>
                <Textarea
                    value={reviewData.summary}
                    placeholder='Enter your thoughts here!'
                    name='summary'
                    onChange={(e) => setReviewData({...reviewData, summary: e.target.value})}
                    size='sm'
                />
            </FormControl>

            <FormControl>
                <FormLabel>Rating</FormLabel>
                <Slider
                    id='slider'
                    focusThumbOnChange={false}
                    defaultValue={0}
                    min={0}
                    max={5}
                    colorScheme='teal'
                    onChange={(v) =>{ setSliderValue(v); setReviewData({...reviewData, score: v})}}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>0</SliderMark>
                    <SliderMark value={1} mt='1' ml='-2.5' fontSize='sm'>1</SliderMark>
                    <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>2</SliderMark>
                    <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>3</SliderMark>
                    <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>4</SliderMark>
                    <SliderMark value={5} mt='1' ml='-2.5' fontSize='sm'>5</SliderMark>
                    <SliderTrack><SliderFilledTrack /></SliderTrack>
                        <Tooltip
                            hasArrow
                            bg='teal.500'
                            color='white'
                            placement='top'
                            isOpen={showTooltip}
                            label={ratingTranslate(sliderValue)}
                        >
                            <SliderThumb />
                        </Tooltip>
                 </Slider>
            </FormControl>
            
            </ModalBody>

            <ModalFooter>
            <Button colorScheme='blue' type='submit' mr={3} onClick={onClose}>
                Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            
            </ModalFooter>
            </form>
        </ModalContent>
        </Modal>
    )
}
