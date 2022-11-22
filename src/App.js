import React from "react"
// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer'
import About from "./Componets/About";
import Home from "./Componets/Home";
import Couses from "./Componets/Couses";
import Volunteers from "./Componets/Volunteers";
import NewsListning from "./Componets/NewsListning";
import NewsDetails from "./Componets/NewsDetails";
import Contact from "./Componets/Contact";
import Donate from "./Componets/Donate";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About name="Vishwas"/>} />
        <Route path="/causes" element={<Couses/>} />
        <Route path="/volunteer" element={<Volunteers/>} />
        <Route path="/news/listning" element={<NewsListning />} />
        <Route path="/news/details" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donate/>} />




        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
