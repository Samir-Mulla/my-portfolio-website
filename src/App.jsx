import React, { useEffect, useState } from "react";
// import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import PortfolioForm from "./components/PortfolioForm/PortfolioForm";
import ScrollToTopButton from "./components/Button/ScrollToTopButton";
import CustomCursor from "./components/customCursor/customCursor";


function App() {
  
  return (
    <>
      <Header />
      <CustomCursor />
      <Hero />
      <About />
      <Skills />
      <PortfolioForm />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
