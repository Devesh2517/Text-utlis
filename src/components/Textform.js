import React, {useState} from 'react'

export default function Textform(props) {
    
    const [text,setText] = useState("")
    const handleonclick=()=>{
        // console.log("uppercase clicked")
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const handleonchange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const handleSaveFileClick=()=>{
        let newtext= text.toLowerCase()
        setText(newtext)
    }
  return (
    <>
    <div className='container'>     
        <h1>{props.heading} </h1>
        <div className="mb-3" >
            
            <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="10" ></textarea>
        </div>
            <button className="btn btn-primary mx-1 " onClick={handleonclick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1 " onClick={handleSaveFileClick}>convert to lowercase</button>


    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} characters are there</p>
        <p>{text.split(" ").length*0.008}  minutes to read words</p>
    </div>
    </>
  )
}
