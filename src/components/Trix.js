import "trix/dist/trix.css";
import  { TrixEditor } from "react-trix";
import React, { useState, useEffect } from "react";
import docsModel from "./../models/docs.js";

function Editor() {
    const [data, setData] = useState("");
    //const [message, setMessage] = useState("");
    const [docs, setDocs] = useState([]);
    const [currentDoc, setCurrentDoc] = useState({});
    const [title, setTitle] = useState("");
    
    useEffect(() => {
        (async () => {
            const allDocs = await docsModel.getAllDocs();
            setDocs(allDocs);
        })();
    }, [currentDoc]);

    // let fetchDoc = () => {
    //     let selectedId = document.getElementById("myDoc").value;
    //     let selectedDoc = docs[selectedId];

    //     setCurrentDoc(selectedDoc);
    //     console.log(selectedDoc);
    // };

    const fetchDoc = event => {
        const selectedDocId = document.getElementById("myDoc").value;
        const selectedDoc = docs[selectedDocId];

        if (selectedDocId !== "-99") {
            setCurrentDoc(selectedDoc);
            //console.log(selectedDoc);
        } else {
            setCurrentDoc({_id: null, name:"", content:""});
        }
        if (selectedDoc !== undefined) {
            setEditorContent(selectedDoc);
            setTitle(event.target.value)
        }
     };

    // function fetchDoc(e) {
    //     const id = e.target.value.trim().toString();
    //     if (id !== "-99") {
    //         setCurrentDoc(docs[id]);
    //     } else {
    //         setCurrentDoc({_id: null, name:"", content:""});
    //     }
    //     console.log(docs[id].content)
    // }

    function setEditorContent(selectedDoc) {
        let element = document.querySelector("trix-editor");
        element.value = "";
        //element.editor.setSelectedRange([0, 0]);
        element.editor.insertHTML(selectedDoc.content);
    }

    const setName = event => {
        console.log(event.target.value)
        setTitle(event.target.value);
    }

    // function handleChange(event, newMessage) {
    //   //setMessage(newMessage);
    //   setEditorContent(newMessage)
    //   console.log(setEditorContent(newMessage))
    // }

    // const handleChange = (newMessage) => {
    //     setMessage(newMessage);
    // }

    // Prints out in the console
    // const handleClick = event => {
    //     console.log(message);
    // }

    // const handleClick = () => {
    //     console.log(message);
    // }

    let handleChange = (event) => { 
        setData(event);
    };

    const saveForm = event => {
        document.getElementById("saveForm").style.display = "block";
    }

    const createObject = async (event) => {
        event.target.value = null;
        event.preventDefault();
        let newDoc={};
        newDoc.content=data;
        newDoc.name=title;

        await docsModel.createDoc(newDoc);
        window.location.reload();
    };

    const updateDoc = async () => {
        currentDoc.content = data;
        //console.log(currentDoc.content)
        await docsModel.updateDoc(currentDoc);
    }

    // async function updateDoc() {
    //     currentDoc.content = data;
    //     //console.log(currentDoc.content)
    //     await docsModel.updateDoc(currentDoc);
    // }


    return (
        <div className="editor">
            <trix-toolbar id = "trix-toolbar">
                <select id="myDoc" onChange={fetchDoc} >
                    <option value="-99" key="0">Choose a document</option>
                    {docs.map((doc, index) => <option value={index} key={index}>{doc.name}</option>)}
                </select>

                <button className="btn1" onClick={saveForm}>Create new</button>
                <button className="btn" onClick={() => updateDoc()}>Update</button>
                {/* <button onClick={handleClick}>Reset</button> */}
            </trix-toolbar>

            <form className = "saveForm" id = "saveForm" onSubmit = { (event) => { createObject(event);} } style = {{display: "none"}}>
                <input className="btn" id="button" type = "submit" value = "Save"></input>
                <label>Enter a title: <input className="documentTitle" id="documentTitle" type="text" onChange={ (event) => { setName(event); }} /></label>
                
            </form>

{/* 
            <form className='documentTitle'>
                <input type="text" id="documentTitle" className='titleField' placeholder="< Title >" defaultValue={currentDoc.name} onChange={ (event) => { setName(event); }}>
                </input>
            </form> */}
            <TrixEditor className="trix-editor" toolbar="trix-toolbar"
                // value = {data}
                initialValue = {currentDoc.content}
                placeholder="Write something..."
                onfocus="this.value=''"
                //autoFocus={true}
                //name="message"
                onChange={handleChange}
                
                //onEditorReady={handleEditorReady} 
                />
                <h2>Here you can create new documents or update existing ones.</h2>
                <h2>Don't forget to save when creating a new one.</h2>
        </div>
        );}

export default Editor;
