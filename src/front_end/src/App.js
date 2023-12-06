import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import "./App.css"; // Import the CSS file
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;