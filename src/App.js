import "trix/dist/trix.css";
import "./App.css";
import Header from "./components/Header";
import React from "react";
import Editor from "./components/Trix";

function App() {
      return (
        <div className="container">
            <Header />
            <Editor />
      </div>
      );
}

export default App;
