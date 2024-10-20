import { Box, Stack, Typography, FormControl, Select, MenuItem } from '@mui/material';
import React, {useState} from 'react';
import './PastConversations.css'; 

function PastConversations() {

    const [ratingSelect, setRatingSelect] = useState("All Ratings");

    const handleChange = (event) => {
        setRatingSelect(event.target.value);
    };

    return (
        <div>
            <Box className="pastConversations">
                <Stack spacing={2}>

                    <Box textAlign="center">
                        <Typography variant='h5' component="h6">Conversation History</Typography>
                        <FormControl sx={{marginTop: "20px"}} size="small"> 
                            <Select 
                                id="rating-select"
                                value={ratingSelect} 
                                onChange={handleChange}
                                className='selectBox'
                                sx={{width: "150px", borderRadius: "33px"}} 
                            >   
                                <MenuItem value={"All Ratings"}>All Ratings</MenuItem>
                                <MenuItem value={1}>1 Star</MenuItem>
                                <MenuItem value={2}>2 Star</MenuItem>
                                <MenuItem value={3}>3 Star</MenuItem>
                                <MenuItem value={4}>4 Star</MenuItem>
                                <MenuItem value={5}>5 Star</MenuItem> 
                            </Select>
                        </FormControl>
                    </Box>

                </Stack>
                
            </Box>
        </div>
    )
}

export default PastConversations;