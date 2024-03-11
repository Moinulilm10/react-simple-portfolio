// import ContactForm from "./components/Contact/ContactForm";
import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Banner from "./components/hero/Banner";
import LoadingSpinner from "./components/loadingspinner/LoadingSpinner";
import MyQuotes from "./components/myquotes/MyQuotes";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <>
      <Navbar />
      <Banner />
      <MyQuotes />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
