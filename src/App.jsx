import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import PortfolioForm from "./components/PortfolioForm/PortfolioForm";
import ScrollToTopButton from "./components/Button/ScrollToTopButton";
import CustomCursor from "./components/customCursor/customCursor";
import Services from "./components/Services/services";
import Projects from "./components/Projects/Projects";
import LiveChatWidget from "./components/LiveChatWidget/LiveChatWidget";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <CustomCursor />
      <PortfolioForm />
      <ScrollToTopButton />
      <LiveChatWidget />
      <Footer />
    </>
  );
}

export default App;
