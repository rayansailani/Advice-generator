import { Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box, styled } from "@mui/system";
import axios from 'axios';

const AdviceCard = styled(Box)({
  background:"hsl(217, 19%, 24%)",
  padding:"2rem !important",
  borderRadius:'1.2rem',
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:'center',
  position:"relative !important",
})

const CustomText = styled(Typography)((props)=>({
  marginBottom:"1rem !important",
  textAlign:"center",
  color:props.color || "hsl(193, 38%, 86%)",
  textTransform: props.textTransform || "none",
  letterSpacing: props.letterSpacing && '6px',
  fontSize: props.fontSize,
}))

const DiceContainer = styled(Button)({
  background:'hsl(150, 100%, 66%)', 
  height:"63px" , 
  width:"63px", 
  borderRadius:"50%", 
  position:"absolute", 
  bottom:'-10%',
  "&:hover":{
    background:'hsl(150, 100%, 66%)', 
    boxShadow: '0 2px 25px 3px hsl(150, 100%, 66%)'
  }
})


export const Card = () => {
  const [advice, setAdvice] = useState({
    slip:{
      id:"0",
      advice:"sample advice"
    }
  });
  async function fetchAdvice() {
    try {
      let result = await axios.get("https://api.adviceslip.com/advice")
      if(result.data === advice){
        result = await axios.get("https://api.adviceslip.com/advice/" + parseInt(advice.data.slip.id) + 1);
      }
      setAdvice(result.data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchAdvice();
  } ,[]);
  
  return (
    <AdviceCard sx={{ maxWidth: {
      xs: "80vw",
      md: "30vw"
    }}}>
      <CustomText variant="body2" fontSize="12px" textTransform="uppercase" color="hsl(150, 100%, 66%)" letterSpacing="true"> Advice # {advice.slip.id}</CustomText>
      <CustomText variant="body2" fontSize="28px"> "{advice.slip.advice}"</CustomText>
      <div style={{ height:"3.4rem", width:"100%"}}>
        <img style={{width:'100%'}} alt=""  src="advice-generator-app-main/images/pattern-divider-mobile.svg" />
      </div>
      <DiceContainer onClick={fetchAdvice}>
        <img style={{ hieght:'14px !important', width:'40px !important'}} alt="" src="advice-generator-app-main/images/icon-dice.svg" />
      </DiceContainer>
    </AdviceCard>
  )
}
