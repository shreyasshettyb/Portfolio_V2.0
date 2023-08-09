import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = ["purple","teal"];

  return (
    <>
      <Nav color={color[1]} />
      <Header color={color[0]} />
      <About color={color[1]} />
      <Skills color={color[0]} />
      <Certificates color={color[1]} />
      <Projects color={color[0]} />
      <Contact color={color[1]} />
      <Footer />
    </>
  );
}

export default App;
