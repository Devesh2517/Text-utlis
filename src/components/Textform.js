import React, { useState } from 'react'

export default function Textform(props) {

    const [text, setText] = useState("")

    const handleonclick = () => {
        let newtext = text.toUpperCase();
        props.showAlert("Converted to uppercase", "success")
        setText(newtext)
    }
    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const handleloclick = () => {
        let newtext = text.toLowerCase()
        props.showAlert("Converted to lowercase", "success")

        setText(newtext)
    }

    const handlecopy = () => {
        let copytext = text
        props.showAlert("Copy successfull", "success")

        navigator.clipboard.writeText(copytext)
        
    }

    const handleclear = () => {
        setText("")
        props.showAlert("Cleared succesusfully", "success")

    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/)
        props.showAlert("removed extra spcess", "success")

        setText(newtext.join(" "))
    }

    return (
        <>
            <div className='container' style={props.mode.textArea}>
                <h1 className='mb-4' >{props.heading} </h1>
                <div className="mb-3" >

                    <textarea className="form-control" value={text} onChange={handleonchange} style={props.mode.textArea} id="mybox" rows="10" ></textarea>
                </div>
                <button disabled={text.length === 0} style={props.mode.button[1]} className={`btn ${props.mode.button[0]}  mx-2 my-2`} onClick={handleonclick}>convert to uppercase</button>
                <button disabled={text.length === 0} style={props.mode.button[1]} className={`btn ${props.mode.button[0]}  mx-2 my-2`} onClick={handleloclick}>convert to lowercase</button>
                <button disabled={text.length === 0} style={props.mode.button[1]} className={`btn ${props.mode.button[0]} mx-2 my-2`} onClick={handlecopy}>copy text</button>
                <button disabled={text.length === 0} style={props.mode.button[1]} className={`btn ${props.mode.button[0]} mx-2 my-2`} onClick={handleclear}>clear text</button>
                <button disabled={text.length === 0} style={props.mode.button[1]} className={`btn ${props.mode.button[0]} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                <div className="container my-3">
                    <h1>Your text summary</h1>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} characters are there</p>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008}  minutes to read words</p>
                    <h3>Preview</h3>
                    <p>{text.length > 0 ? text : "Noting to preview"}</p>
                </div>
            </div>

        </>
    )
}
