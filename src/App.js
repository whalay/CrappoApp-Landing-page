import React, { useEffect } from 'react';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Article from './Components/Article';
import Section from './Components/Section';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Hero2 from './Components/Hero2';

import Aos from 'aos';
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <Article />
      <Section />
      <Body />
      <Footer />
    </>
  );
}

export default App;
