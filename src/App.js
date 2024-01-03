import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Introduce from "./page/Introduce";
import Equipment from "./page/Equipment";
import { Analytics } from '@vercel/analytics/react';
import Certification from "./page/Certification";
import Contact from "./page/Contact";
import Content from "./page/Content";
import Portfolio from "./page/Portfolio";
import Login from "./page/Login";
import Register from "./page/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/content" element={<Content />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;