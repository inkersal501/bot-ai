import { Box, Stack, Typography, FormControl, Select, MenuItem } from '@mui/material';
import React, {useState} from 'react';
import './PastConversations.css'; 
import Coversation from './Coversation';

function PastConversations() {

    const [selectedRating, setSelectedRating] = useState("All Ratings");

    const handleChange = (event) => {
        setSelectedRating(event.target.value);
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
                                value={selectedRating} 
                                onChange={handleChange} 
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
                    <Box>
                        <Coversation selectedRating={selectedRating}/>
                    </Box>

                </Stack>
                
            </Box>
        </div>
    )
}

export default PastConversations;