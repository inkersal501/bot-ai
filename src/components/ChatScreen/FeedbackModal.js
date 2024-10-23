import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
 
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade'; 
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ThumbDownSharpIcon from '@mui/icons-material/ThumbDownSharp';
import { Button, TextField, IconButton } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: 350, lg: 500},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function FeedbackModal({id, openModal, handleCloseModal, feedback, setFeedback, handleFeedback}) {
  
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if(feedback){
      if(handleFeedback(id, feedback))
        handleCloseModal();
    }else{  
      alert("Give your feedback");
    }
  };
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
                <IconButton onClick={handleCloseModal}><CloseIcon /></IconButton>
            </Box>
            <form onSubmit={handleFormSubmit}>
             <Box sx={{margin:"20px 0px",width:"100%"}} className='feedbackTextContainer'>
                <TextField
                    id="feedback" 
                    multiline
                    rows={5} 
                    placeholder='Feedback' 
                    onInput={(e)=>setFeedback(e.target.value)}
                    value={feedback}
                />
             </Box>
             <Box className='FeedbackbtnContainer'>
                <Button type="submit" variant='contained'>Submit Feedback</Button>
             </Box>

             </form>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default FeedbackModal;