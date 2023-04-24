import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import Projects from './components/Projects';
import DataVisualization from './components/DataVisualization';
import About from './components/About';
import Footer from './components/Footer';
import Changelog from './components/Changelog';
import Contact from './components/Contact';
import DoingNow from './components/DoingNow';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Homepage />
        <Resume />
        <Projects />
        <DataVisualization />
        <About />
        <Changelog />
        <Contact />
        <DoingNow />
      </main>
      <Footer />
    </div>
  );

}
export default App;
