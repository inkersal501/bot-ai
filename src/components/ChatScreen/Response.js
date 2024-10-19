import { Box, Stack, Typography, Rating } from '@mui/material'; 
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'; 
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import avatar from '../../assets/logo2.png';
import "./ChatScreen.css";
import { useState } from 'react';
function Response({data, handleRating}) {
  
  const [showLike, setShowLike] = useState(false);   
  const [rating, setRating] = useState(data.rating || 0);
  const [showRating, setShowRating] = useState(rating>0?true:false);
  
  const handleSetRating = (newValue)=>{
    setRating(newValue);
    handleRating(data.id, newValue); 
  };

  return (
    <div>
        <Box className='promptBox' onMouseOver={()=>setShowLike(true)} onMouseOut={()=>setShowLike(false)}>
            <Stack direction="row" spacing={2} alignItems="center">
                 <Box> 
                    <Box component="img" src={avatar} className='avatar'/>
                 </Box>
                 <Box sx={{padding: {lg: '0px 10px 0px 0px'}}}>
                    <Stack spacing={2} textAlign="left">
                        <Typography component="p" variant='p' fontWeight="bold">Bot AI</Typography>
                        <Typography component="p" variant='p' margin="10px 0px 0px 0px !important">{data.prompt}</Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography component="p" variant='p' color='rgba(0, 0, 0, 0.62)' fontSize="12px">{data.time}</Typography>
                            {showLike &&
                            <Stack direction="row" spacing={1}>
                              <ThumbUpOffAltIcon
                                onClick={()=>setShowRating(true)}
                                color="dark" fontSize='12px' cursor="pointer"
                              />
                              <ThumbDownOffAltIcon color="dark" fontSize='12px' />
                            </Stack>
                            }
                        </Stack>
                        {showRating && 
                          <Box>
                          <Typography component="legend">Rate this response</Typography>
                          <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                              handleSetRating(newValue);
                            }}
                          />
                          </Box>
                          }
                    </Stack>
                 </Box>
            </Stack>
            
        </Box>
    </div>
  )
}

export default Response;