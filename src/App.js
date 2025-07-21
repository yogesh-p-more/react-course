import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = (modeType) => {
  if (modeType === "dark") {
    setMode("dark");
    document.body.style.backgroundColor = "#343a40"; // Bootstrap dark color
    showAlert("Dark mode has been enabled", "success");
  } else if (modeType === "darkBlue") {
    setMode("darkBlue");
    document.body.style.backgroundColor = "#042743"; // Custom dark blue
    showAlert("Dark Blue mode has been enabled", "success");
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
  }
};

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
