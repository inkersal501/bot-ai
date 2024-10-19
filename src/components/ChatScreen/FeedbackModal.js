import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
 
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade'; 
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function FeedbackModal({openModal, handleOpenModal, handleCloseModal}) {
 


  return (
    <div> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }} 
      >
        <Fade in={openModal} className='feedbackModal'>
          <Box sx={style}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <Typography
                 sx={{display:"flex", alignItems:"center", justifyContent:"start",gap:"10px"}}
                 id="transition-modal-title" variant="h6" component="p">
                <ThumbDownSharpIcon color="#ffc107" fontSize='12px'/> Provide additional feedback
                </Typography>
                <CloseIcon color='light' onClick={handleCloseModal} cursor="pointer"/>
            </Box>
             <Box>
                <TextField
                    id="outlined-multiline-static" 
                    multiline
                    rows={5} 
                    placeholder='Feedback'
                />
             </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default FeedbackModal;