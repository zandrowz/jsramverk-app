import  { TrixEditor } from "react-trix";
import React, { useState } from "react";

function Editor() {
    const [message, setMessage] = useState("");

    function handleChange(event, newMessage) {
      setMessage(newMessage);
    }
    
    const handleClick = event => {
        //event.preventDefault();
        console.log(message);
    }

    return (
        <div>
            <button onClick={handleClick}>Spara</button>
            <TrixEditor 
            onChange={handleChange}/>
        </div>
        );}

export default Editor;
