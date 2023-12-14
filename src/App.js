import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Introduce from "./page/Introduce";
import Equipment from "./page/Equipment";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">




      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;