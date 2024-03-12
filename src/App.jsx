// import ContactForm from "./components/Contact/ContactForm";
import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Banner from "./components/hero/Banner";
import MyQuotes from "./components/myquotes/MyQuotes";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import { ThemeContext } from "./context";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
          <Navbar />
          <Banner />
          <MyQuotes />
          <About />
          <Experience />
          <Project />
          <Contact />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
