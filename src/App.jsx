// import ContactForm from "./components/Contact/ContactForm";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Banner from "./components/hero/Banner";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Experience />
      <Project />
      <Contact />
      {/* <ContactForm /> */}
    </>
  );
}

export default App;
