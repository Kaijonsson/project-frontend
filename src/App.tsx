import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
