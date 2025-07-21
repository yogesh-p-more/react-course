import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success")
  };
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!", "success")
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText)
    props.showAlert("Cleared text!", "success")
  }
  const handleOnChange = (e) => {
    setText(e.target.value)
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed!", "success")
  }
  return (
    <>
      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : props.mode === "dark" ? "#343a40" : "#042743",
              color: props.mode === "light" ? "black" : "white"
            }}
            id="myBox"
            rows="8"
            value={text}
          />

        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>


      </div>

      <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>Your Text Summary</h1>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} <strong>Words</strong> and {text.length} <strong>Characters</strong>
        </p>
        <p>{0.008 * text.split(" ").length} <strong>Minutes read</strong></p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
