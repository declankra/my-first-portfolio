import React from 'react';
import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/navbar/Header';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import DataVisualization from './components/DataVisualization';
import About from './pages/About';
import Footer from './components/Footer';
import Changelog from './components/Changelog';
import Contact from './pages/Contact';
import DoingNow from './components/DoingNow';
 

function App() {
  return (
    <div className="App">
        <Header/><br />

    <main>   
       <Homepage />
       <hr></hr>
      
       <Projects /> 
       <hr></hr>
       <Resume />
       <hr></hr>
       <About />
       <hr></hr>
       <Contact />
       <hr></hr>
    </main> 

        <Footer />

    </div>
  );
}
export default App;

/*
const App = () => {
  return (
    <div className="App">
    <Router>
      <Header />
      
      <Routes>
        <Route exact path="./pages/Homepage" component={Homepage} />
        <Route path="./pages/Projects" component={Projects} />
        <Route path="./pages/Resume" component={Resume} />
        <Route path="./pages/About" component={About} />
        <Route path="./pages/Contact" component={Contact} />
      </Routes>
    </Router>
    
    < Homepage />
    < Resume />

    </div>

  );
};
export default App;
*/

/*
          <Resume/>
          <Changelog />
          <Contact />
          <DoingNow />
*/

      /* insert google tag // 
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YVX9YT52JE"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-YVX9YT52JE');
      </script>
      */ 

      /*
      <Router>
         <Route>
            <Route exact path="/" component={Homepage} />
            <Route path="/Projects" component={Projects} />
            <Route path="/DataVisualization" component={DataVisualization} />
            <Route path="/Resume" component={Resume} />
            <Route path="/About" component={About} />
        </Route>
      </Router>
      */
 /*
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Routes>
  </Router>
  */