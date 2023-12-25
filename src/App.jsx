import {BrowserRouter, Routes, Route, Router} from "react-router-dom";

import './App.css'

import Navbar from "./components/Navbar.jsx";
import Themes from "./components/Themes.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Portafolio from "./pages/portafolio/Portafolio.jsx";
import Contact from "./pages/contact/Contact.jsx";

function App() {

  return <BrowserRouter>
    <Navbar/>
    <Themes/>
    <Routes>
      <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="portfolio" element={<Portafolio/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>

}

export default App
