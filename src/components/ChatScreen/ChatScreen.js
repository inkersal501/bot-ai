import React, { useEffect, useState, useRef } from 'react';
import { Box, LinearProgress } from '@mui/material';
import AskQuestion from '../AskQuestion/AskQuestion'; 
import './ChatScreen.css';
import DefaultChatScreen from './DefaultChatScreen';
import qdata from '../../assets/data.json';
import MyQuestion from './MyQuestion';
import Response from './Response';
import { useSnackbar } from 'notistack';
 
const ChatScreen = ({ newchat, setNewChat }) => {
    
    const defResponse = "Sorry, we cannot find the answer for the prompt"; 
    const [askedQuestn, setAskedQuestn] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [asked, setAsked] = useState(false); 
    const [inProgress, setInProgress] = useState(false);
    const [tempData, setTempData] = useState(JSON.parse(localStorage.getItem("BotAiTempData")) || []);
    const boxRef = useRef(null); 
    const { enqueueSnackbar } = useSnackbar();
    // eslint-disable-next-line no-unused-vars
    const [savedData, setSavedData] = useState(JSON.parse(localStorage.getItem("BotAiSavedData")) || []);

    const currDate = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; 

        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        return { time: `${hours}:${minutesStr} ${ampm}`, date: date.toISOString() };
    };

    const addToStorage = (from, prompt, id) =>{
      const temp = tempData;
      temp.push({id, from: from, prompt : prompt, ...currDate() });      
      localStorage.setItem("BotAiTempData", JSON.stringify(tempData));
      setTempData(JSON.parse(localStorage.getItem("BotAiTempData")) || []);
    };

    const clearAsk = ()=>{
      setAskedQuestn("");
      setAsked(false); 
      setInProgress(false);
    };

    const handleAskedQuestn = (e) =>{
      e.preventDefault();
      if(inProgress)
        window.alert("Wait for the response");

      if(askedQuestn){
        setNewChat(false);
        setAsked(true);
        setInProgress(true);

        addToStorage("user", askedQuestn, Date.now());

        setTimeout(() => {
          const result = qdata.filter(ans=>{
            return ans["question"].toLowerCase().includes(askedQuestn.trim().toLowerCase());
          })[0];
          let response = result?result.response:defResponse; 
          addToStorage("bot", response, Date.now()+1); 
          clearAsk();   
        }, 1000);         

      }else{
        console.log("Error: Type Something");
        clearAsk();
      }
      
    };

    const scrollToBottom = () => {
        if (boxRef.current) {
            boxRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [tempData]); 

    useEffect(() => {
        if (newchat) {
            setTempData([]);
            localStorage.removeItem("BotAiTempData");
        }
    }, [newchat]);

    const handleRating = (id, rating)=>{
        const temp = tempData.map((data)=>{
            if(id===data.id){
                data.rating=rating;
            }
            return data;
        });    
        localStorage.setItem("BotAiTempData", JSON.stringify(temp));
        setTempData(JSON.parse(localStorage.getItem("BotAiTempData")) || []);
        return true;
    };

    const handleFeedback = (id, feedback) =>{
        const temp = tempData.map((data)=>{
            if(id===data.id){
                data.feedback=feedback;
            }
            return data;
        });    
        localStorage.setItem("BotAiTempData", JSON.stringify(temp));
        setTempData(JSON.parse(localStorage.getItem("BotAiTempData")) || []);
        return true;
    };

    const handleSave = ()=>{
        if(tempData && tempData.length>0){
            localStorage.setItem("BotAiSavedData", JSON.stringify(tempData));
            setSavedData(JSON.parse(localStorage.getItem("BotAiSavedData")) || []);
            enqueueSnackbar("Conversation saved!", {variant: "success"});
        }else{
            enqueueSnackbar("No Conversations found", {variant: "danger"});
        }        
    };

    return (
        <Box className='chatScreen'> 
            {newchat ? (
                <DefaultChatScreen />
            ) : (          
                <Box className="chatContent">
                    {tempData.map((data) => (
                        <Box key={data.id}>
                            {data.from === "user" ? (
                                <MyQuestion data={data} />
                            ) : (
                                <Response data={data} handleRating={handleRating} handleFeedback={handleFeedback}/>
                            )}
                        </Box>
                    ))}  
                    <div ref={boxRef} style={{ float: 'left', clear: 'both' }} />
                    {inProgress && <LinearProgress />}
                </Box>
            )}
            <AskQuestion                 
                askedQuestn={askedQuestn} 
                setAskedQuestn={setAskedQuestn} 
                handleAskedQuestn={handleAskedQuestn}  
                inProgress={inProgress}
                handleSave={handleSave}
            />
        </Box>
    );
};

export default ChatScreen;
