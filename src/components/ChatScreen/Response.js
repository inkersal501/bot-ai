import { Box, Stack, Typography, Rating, IconButton } from '@mui/material'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'; 
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

import avatar from '../../assets/logo2.png';
import "./ChatScreen.css";
import { useState } from 'react';
import FeedbackModal from './FeedbackModal';


function Response({data, handleRating, handleFeedback}) {
  
  const response = data.response;
  const [showLike, setShowLike] = useState(false);   
  const [rating, setRating] = useState(response.rating || 0);
  const [showRating, setShowRating] = useState(rating>0?true:false);
  const [editableRating, setEditableRating] = useState(false);
  const [feedback, setFeedback] = useState(response.feedback?response.feedback:"")
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  const handleSetRating = (newValue)=>{
    setRating(newValue);
    handleRating(data.id, newValue);
    setEditableRating(false); 
  };

  return (
    <div>
        <Box className='promptBox' onMouseOver={()=>setShowLike(true)} onMouseOut={()=>setShowLike(false)} boxShadow={5}>
            <Stack direction="row" spacing={2} alignItems="center">
                 <Box> 
                    <Box component="img" src={avatar} className='avatar'/>
                 </Box>
                 <Box sx={{padding: {lg: '0px 10px 0px 0px'}}}>
                    <Stack spacing={2} textAlign="left">
                        <Typography component="p" variant='p' fontWeight="bold">Bot AI</Typography>
                        <Typography component="p" variant='p' margin="10px 0px 0px 0px !important">{response.prompt}</Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography component="p" variant='p' fontSize="12px" sx={{color:"primary.text"}}>{response.time}</Typography>
                            {showLike &&
                            <Stack direction="row" spacing={1}>
                              {!showRating ?
                              <IconButton onClick={()=>{setShowRating(true);setEditableRating(true)}}>
                                <ThumbUpOffAltIcon />
                              </IconButton>
                              :
                              <IconButton onClick={()=>{setShowRating(false);setEditableRating(false)}}>
                                <ThumbUpAltIcon />
                              </IconButton>
                              }
                              <IconButton onClick={handleOpenModal}>
                                <ThumbDownOffAltIcon />
                              </IconButton>
                            </Stack>
                            }
                        </Stack>
                        {showRating && 
                          <Box>
                          <Typography component="legend">Rate this response</Typography>
                          <Rating
                            readOnly={!editableRating}
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                              handleSetRating(newValue);
                            }}
                            className='ratingIcons' 
                          />
                          </Box>
                        }
                        {response.feedback && response.feedback!=="" && 
                          <Box sx={{display:"flex", justifyContent:"start", gap:"10px"}}>
                            <Typography component="p" fontWeight="bold">Feedback :</Typography>
                            <Typography component="p" >{response.feedback}</Typography>
                          </Box>
                        }
                    </Stack>
                 </Box>
            </Stack>
            
        </Box>
       {openModal && 
        <FeedbackModal 
          id={data.id}
          openModal={openModal} 
          handleCloseModal={handleCloseModal} 
          feedback={feedback}
          setFeedback={setFeedback} 
          handleFeedback={handleFeedback}          
        /> }
    </div>
  )
}

export default Response;