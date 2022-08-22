import Header from "./components/Header";
import React, { useRef } from "react";
import  { TrixEditor } from "react-trix";
// import './App.css';


function App() {
    const inputRef = useRef(null);
    function handleClick() {
        // update input value
        var element = document.querySelector("trix-editor")

        inputRef.current.value = element.editor.getDocument().toString();
        console.log(inputRef.current.value);
    }

      return (
        <div className="container">
            <Header />
            <TrixEditor 
            ref={inputRef} />
            <button onClick={handleClick}>Spara</button>
      </div>
      );
}

export default App;
