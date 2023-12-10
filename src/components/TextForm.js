import React, {useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState("")
    const clickOnUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const clickOnLowercase = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=> {
        console.log("On change")
        setText(event.target.value)
    }
  return (
    <>
    <div className='container my-4'>
        <div className="form-floating">
            <h1>Enter your text to Analyze</h1>
            <textarea className="form-control" onChange={handleOnChange} value={text} area-aria-rowspan="8" id="floatingTextarea"></textarea>
        </div>
        <div className="btn btn-primary my-3" onClick={clickOnUppercase}>COVERT TO UPPERCASE</div>
        <div className="btn btn-primary mx-3" onClick={clickOnLowercase}>COVERT TO LOWERCASE</div>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.02 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
