import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Introduce from "./page/Introduce";
import Equipment from "./page/Equipment";

function App() {
  return (
    <div className="App">




      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </div>
  );
}

export default App;