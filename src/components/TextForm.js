import React, {useState} from 'react'

export default function TextForm(props) {
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
        // console.log("On change")
        setText(event.target.value)
    }

    const clickOnClear = ()=> {
        // console.log("I am clear")
        setText('')
    }


  return (
    <>
    <div className='container my-4'>
        <div className="form-floating">
            <h1>{props.heading}</h1>
            <textarea id='myBox' className="form-control" onChange={handleOnChange} style={props.myStyle} value={text} size={`height : 100px`}></textarea>
        </div>

        <div className="btn btn-primary my-4 mx-2" onClick={clickOnUppercase}>UPPERCASE</div>
        <div className="btn btn-primary mx-2" onClick={clickOnLowercase}>LOWERCASE</div>
        <div className="btn btn-primary mx-2" onClick={clickOnClear}>CLEAR</div>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} letters</p>
        <p>{0.02 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text above to preview here"}</p>
    </div>
    </>
  )
}
