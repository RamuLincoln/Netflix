import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbar';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from './components/videoplayer/Single';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className='container-fluid'>
        
        <BrowserRouter>
        <Navbars />
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/movie/:id' element={<Single />}></Route>
        </Routes>
        </BrowserRouter>
         
    </div>
  )
}

export default App;