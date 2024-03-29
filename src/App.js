import React, { useState, useEffect } from "react";
import "./style.css";
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


// Importing the Components
import NewPage from "./components/NewPage";
import Spinner from "./components/spinner";
import NavBarComponent from "./components/NavBarComponent";
import Home from "./components/Home/Home";
import Tab1 from "./components/Tab1/Tab1";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Resume from "./components/Resume";
import FooterBar from "./components/FooterBar";
import GoodReads from "./components/About/GoodReads";

function App() {
  <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"  type='text/css'></link>
  //Initializing [[scrollable]] variable to true. We control scrolling behaviour through this variable
  const [scrollable, setScrollable] = useState(false);
  // We set the id of the parent div to scroll after the below mentioned timeout.
  // We are basically showing the spinner for 1.5 seconds 
  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollable(true);
    },1500);
    // while demounting the component we clear the timer
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Router>
      {/*Rednering Spinner Component here*/}
      <Spinner scrollable={scrollable}/>
      <div className = "App" id = {scrollable ? "scroll" : "no-scroll"}>
        <NavBarComponent />
        <NewPage />
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          {/*This is a sample Tab. Other Tabs could go below this - Projects/Experience/Certifications/Contact/Blog etc*/}
          <Route path ="/experience" element={<Experience/>}/>
          <Route path ="/resume" element={<Resume/>}/>
          <Route path ="/goodreads" element={<GoodReads/>}/>
        </Routes>
      </div>
      <FooterBar/>
    </Router>
  );
}

export default App;
