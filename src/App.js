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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enable", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success")
    }
  }
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
