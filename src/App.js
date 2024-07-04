import React, { useEffect, useState } from 'react';
import { createTheme, MantineProvider, Container } from '@mantine/core';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from './components/Loading';
import { Register } from './pages/register/Register';
import { MainPage } from './pages/main/MainPage';


import './App.css';

function App() {

  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md',
  });

  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
  });

  return (
    <MantineProvider theme={theme}>
    <Container
      p={0}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path={`/register`} element={<Register />} />

              <Route
                path="/home"
                element={ <MainPage />}
              ></Route>
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </Container>
    </MantineProvider>
  );
}

export default App;
