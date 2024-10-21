import { Box, Stack, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CoversationCard from './CoversationCard';


function Coversation({selectedRating}) {

  //eslint-disable-next-line
  const [savedData, setSavedData] = useState(JSON.parse(localStorage.getItem("BotAiSavedData")) || []);
  const [tempData, setTempData] = useState({});
  const [loading, setLoading] = useState(true);

  const dataGroupBy = (data) =>{
    const groupData = data.reduce((acc, item)=>{
      const date = item.date.split("T")[0].split("-").reverse().join("/");
      if(!acc[date])
          acc[date] = [];
      acc[date].push(item);
      return acc;
    }, {}); 
    
    return groupData;   
  };
  
  useEffect(()=>{
    const filterData = ()=>{
      if(selectedRating==="All Ratings"){
        return savedData;
      }else{
        const filteredData = savedData.filter((data)=>{
          return data.response.rating===selectedRating;    
        });
        return filteredData;
      }
    };
    const filteredData = filterData();
    setTempData(dataGroupBy(filteredData));
    setLoading(false); 
  //eslint-disable-next-line
  },[selectedRating]);
  
  return (
    <div>
      <Box sx={{padding: "10px 20px", marginBottom: "100px"}}>
        {!tempData && <Typography>No data found</Typography>}
        {loading && <CircularProgress />}
        {!loading && Object.entries(tempData).map(([date, dateEntries]) => (
          <Box key={date}>
            <Typography sx={{margin: "20px 0px 10px 0px", fontWeight: "bold"}} variant='h6'>{date}</Typography>
          
            <Stack spacing={2}>
            
            {dateEntries.map((data)=>(
              
              <CoversationCard key={data.id} data={data}/>
              
            ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default Coversation;