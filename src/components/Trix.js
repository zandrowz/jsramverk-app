import  { TrixEditor } from "react-trix";
import React, { useRef } from "react";

function Editor() {
    const inputRef = useRef(null);
    function handleClick() {
        // update input value
        var element = document.querySelector("trix-editor")

        inputRef.current.value = element.editor.getDocument().toString();
        console.log(inputRef.current.value);
    }

    return (
        <div>
            <TrixEditor 
            ref={inputRef} />
            <button onClick={handleClick}>Spara</button>
        </div>
);

}

export default Editor;