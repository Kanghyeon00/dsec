import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Curriculum from "./components/Curriculum";

function App() {
  return (
    <div className="App">




      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/curriculum/learn" element={<Curriculum />} />
      </Routes>
    </div>
  );
}

export default App;