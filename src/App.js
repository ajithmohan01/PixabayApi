import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
   