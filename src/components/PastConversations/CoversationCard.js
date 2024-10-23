import { Box, Stack, Typography, Rating } from '@mui/material'
import React from 'react'

import userAvatar from '../../assets/avatar.png';
import botAvatar from '../../assets/logo2.png';

function CoversationCard({data}) {
  return (
    <div>
        <Box className="coversationCard" boxShadow={8}>
            <Stack direction={"column"} spacing={2} justifyContent={"center"}>
                <Box>
                    <Stack direction={"row"} spacing={2}>
                        <Box component="img" src={userAvatar} sx={{width:"20px",height:"20px", borderRadius:"50%"}}/>
                        <Typography sx={{fontWeight:"bold"}}>You :</Typography>
                        <Typography>{data.request.prompt}</Typography>
                    </Stack>
                </Box>
                <Box>
                    <Stack direction={"row"} spacing={2} alignItems={"start"}>
                        <Box component="img" src={botAvatar} sx={{width:"20px",height:"20px", borderRadius:"50%"}}/>
                        <Stack direction={"column"} spacing={2} justifyContent={"center"}>
                            <Stack direction={"row"} spacing={2}>                            
                                <Typography sx={{whiteSpace:"nowrap",fontWeight:"bold"}}>Bot AI :</Typography>
                                <Typography>{data.response.prompt}</Typography>                            
                            </Stack>
                            {data.response.rating && <Box>
                            <Typography sx={{fontWeight:"bold"}}>Rating</Typography>
                            <Rating name="read-only" value={data.response.rating} readOnly className='ratingIcons' />
                            </Box>}
                            {data.response.feedback && <Box sx={{display:"flex", gap:"10px"}}>
                            <Typography sx={{fontWeight:"bold"}}>Feedback : </Typography>
                            <Typography>{data.response.feedback}</Typography>
                            </Box>}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    </div>
  )
}

export default CoversationCard