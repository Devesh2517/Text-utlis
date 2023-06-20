import React, {useState} from 'react'

export default function Textform(props) {
    
    const [text,setText] = useState("")
    const handleonclick=()=>{
        // console.log("uppercase clicked")
        let newtext= text.toUpperCase();
        props.showAlert("Converted to uppercase","success")
        setText(newtext)
    }
    const handleonchange=(event)=>{
        // console.log("on change")
        
        setText(event.target.value)
    }

    const handleloclick=()=>{
        let newtext= text.toLowerCase()
        props.showAlert("Converted to lowercase","success")

        setText(newtext)
    }

    const handlecopy=()=>{
        let copytext = text 
        props.showAlert("Copy successfull","success")

        navigator.clipboard.writeText(copytext)
    }

    const handleclear=()=>{
        setText("")
        props.showAlert("Cleared succesusfully","success")

    }

    const handleExtraSpaces=()=>{
        let newtext = text.split(/[ ]+/)
        props.showAlert("removed extra spcess","success")

        setText(newtext.join(" "))
    }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>     
        <h1>{props.heading} </h1>
        <div className="mb-3" >
            
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#343a40':'white',
        color:props.mode==='dark'?'white':'black' }} id="mybox" rows="10" ></textarea>
        </div>
            <button className="btn btn-primary mx-1 " onClick={handleonclick}>convert to uppercase</button>
            <button className="btn btn-primary mx-1 " onClick={handleloclick}>convert to lowercase</button>
            <button className="btn btn-primary mx-1 " onClick={handlecopy}>copy text</button>
            <button className="btn btn-primary mx-1 " onClick={handleclear}>clear text</button>
            <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters are there</p>
            <p>{text.split(" ").length*0.008}  minutes to read words</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"enter something text here to preview"}</p>
    </div>
    </div>
   
    </>
  )
}
