import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Loading} from './components/Loading';
import { Register } from './pages/register/Register';
import { MainPage } from './pages/main/MainPage';
import {ScorePage} from './pages/score/ScorePage';


import './App.css';

function App() {



  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
  });

  return (
    <div className="App">
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

              <Route path="/score" element={<ScorePage />} />

              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
