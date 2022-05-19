import './App.css';
import Navbar from'./components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Featured from "./components/Featured";
import Collections from "./components/Collections";
import Support from "./components/Support";
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/featured" element = {<Featured/>}/>
          <Route path="/collections" element = {<Collections/>}/>
          <Route path="/support" element = {<Support/>}/>
        </Routes>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
