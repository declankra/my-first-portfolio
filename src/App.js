import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route, } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import Resume from './components/Resume';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import TagManager from 'react-gtm-module'

// Add google tag manager for GUA 4
const tagManagerArgs = {
  gtmId: 'G-YVX9YT52JE'
}
TagManager.initialize(tagManagerArgs)


function App() {
  return (
    <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />                
                <Route path="/Projects" element={<Projects />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Resume" element={<Resume/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
    </div>


);
  }
  
export default App;


