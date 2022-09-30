//import "trix/dist/trix.css";
import "./App.css";
import React from "react";

import Editor from "./components/Trix";

//import  { TrixEditor } from "react-trix";


function App() {
      return (
        <div>
            <header className="header">
                <h1>React Trix Editor</h1>
            </header>
            <Editor />
        </div>
      );}

export default App;
