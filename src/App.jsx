import Navbar from "./components/navbar/Navbar";
import Outlook from "./components/hero/Outlook";
import "./app.css";
import AboutMe from "./components/aboutme/AboutMe";
import ShowMore from "./components/work/ShowMore/ShowMore"
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import {
  DarkModeProvider,
  useDarkMode,
} from "./components/contexts/DarkModeContext";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DarkModeProvider>
              <MyComp />
            </DarkModeProvider>
          }
        ></Route>
        <Route path="/showmore" element={<ShowMore/>}/>
      </Routes>
    </Router>
  );
};

const MyComp = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div id="width" className={darkMode ? "darkMode" : "lightMode"}>
      <Navbar/>
      <Outlook />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
