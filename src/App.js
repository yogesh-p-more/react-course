import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {  Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, typ: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = (modeType) => {
    if (modeType === "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else if (modeType === "darkBlue") {
      setMode("darkBlue");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Blue mode has been enabled", "success");
      document.title = "Textutils - Blue Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="/about-us" element={<About />} />
        </Routes>


    </>
  );
}

export default App;
