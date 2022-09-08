import "trix/dist/trix.css";
import "./App.css";
import Header from "./components/Header";
import React from "react";

import Editor from "./components/Trix";

//import  { TrixEditor } from "react-trix";


function App() {
      return (
        <div>
            <Header />
            <Editor />
      </div>
      );}

export default App;
