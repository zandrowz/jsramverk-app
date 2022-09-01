import  { TrixEditor } from "react-trix";
import React, { useRef } from "react";

function Editor() {
    const inputRef = useRef(null);
    function handleClick() {
        const element = document.querySelector("trix-editor")

        inputRef.current.value = element.editor.getDocument().toString();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <button onClick={handleClick}>Spara</button>
            <TrixEditor 
            ref={inputRef} />
        </div>
        );}

export default Editor;