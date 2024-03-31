import React, { useEffect, useState } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
