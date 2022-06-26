
import { Container } from '@mui/system';
import React from 'react';
import { Card } from './Components/Card';
import "./index.css"
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope",
  },
});

const CardContainer = styled(Container)({
  display:"flex",
  flexDirection:'column',
  alignItems:"center",
  justifyContent:"center",
  minWidth:'100vw !important',
  minHeight:"100vh !important",
  background:'hsl(217, 19%, 38%)',
})

export const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <CardContainer maxWidth="lg" disableGutters>
          <Card/>
        </CardContainer>
      </ThemeProvider>
  )
}
