import { Box, Stack, Typography } from '@mui/material'; 
import avatar from '../../assets/logo2.png';
import "./ChatScreen.css";
function Response({data}) {
 
  return (
    <div>
        <Box className='promptBox'>
            <Stack direction="row" spacing={2} alignItems="center">
                 <Box> 
                    <Box component="img" src={avatar} className='avatar'/>
                 </Box>
                 <Box>
                    <Stack spacing={2} textAlign="left">
                        <Typography component="p" variant='p' fontWeight="bold">Bot AI</Typography>
                        <Typography component="p" variant='p' margin="10px 0px 0px 0px !important">{data.prompt}</Typography>
                        <Box>
                            <Typography component="p" variant='p' color='rgba(0, 0, 0, 0.62)' fontSize="12px">{data.time}</Typography>
                        </Box>
                    </Stack>
                 </Box>
            </Stack>
        </Box>
    </div>
  )
}

export default Response;