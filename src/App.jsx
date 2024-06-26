// import ContactForm from "./components/Contact/ContactForm";
import { Route, Routes } from "react-router-dom";
import DataFromBackend from "./components/DataFromBackend/DataFromBackend";
import NotFoundPage from "./components/NotFound/NotFound";
import UserCreate from "./components/UserCreate";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Banner from "./components/hero/Banner";
import MyQuotes from "./components/myquotes/MyQuotes";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/quotes" element={<MyQuotes />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<DataFromBackend />} />
        <Route path="/user-create" element={<UserCreate />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
