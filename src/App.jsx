// import ContactForm from "./components/Contact/ContactForm";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFound/NotFound";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Banner from "./components/hero/Banner";
import MyQuotes from "./components/myquotes/MyQuotes";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
// import { ThemeContext } from "./context";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      {/* <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
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
      </ThemeContext.Provider> */}
      {/* <ThemeContext.Provider value={{ darkMode, setDarkMode }}> */}
      <Navbar />
      <Routes>
        {/* <div className={`w-full h-full ${darkMode ? "dark" : ""}`}> */}
        <Route path="/" element={<Banner />} />
        <Route path="/quotes" element={<MyQuotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* </div> */}
      </Routes>
      <Footer />
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
