import React from 'react';
import './App.style.js';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SectionContent from './components/ContentSection';
import Testimony from './components/Testimony';
import Best from './components/Best';




function App() {
  return (
    <div className="App">
    <Nav />
    <Hero />
    <SectionContent />
    <Testimony />
    <Best />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
