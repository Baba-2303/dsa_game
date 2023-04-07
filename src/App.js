// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Component/Navbar';
import Card2 from './Component/Card2';
import Footer from './Component/Footer';
import MainBody from './Component/MainBody';
import BinarySerch from './Component/BinarySerch';
import { Routes, Route } from "react-router-dom"

function App() {
  // const [component,setComponent] = useState('MainBody')
  // const changeComponent =()=>{
    
  // }
  return (
    <>
    <Navbar />
    <Routes>
      {/* <MainBody/> */}
      {/* <BinarySerch/> */}
      <Route path="/" element={ <MainBody/> } />
      <Route path="/binarysearch" element={ <BinarySerch/> } />
      
    </Routes>
    <hr />
    <Card2 />
    <Footer />
    </>
  );
}

export default App;
