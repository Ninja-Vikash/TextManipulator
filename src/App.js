import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light')
  const [modeName, setModeName] = useState(<i className="ri-moon-fill"></i>)
  const [myStyle, setMyStyle] = useState({
    backgroundColor : 'white',
    color : 'black'
  })
  const [type, setType] = useState(null)
  const showMsg = ()=>{
    if(mode === 'light'){
      setType('Sucess! dark mode is enabled')
    }
    else{
      setType('Success! light mode is enabled')
    }
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
     setMode('dark');
     setModeName(<i className="ri-sun-fill"></i>);
     document.body.style.backgroundColor = '#333';
     document.body.style.color = '#ddd';
     setMyStyle({
      backgroundColor : '#333',
      color : 'white'
     });
     showMsg()
     setTimeout(() => {
       setType(null)
      }, 1500);
    }
    else{
      setMode('light');
      setModeName(<i className="ri-moon-fill"></i>);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setMyStyle({
        backgroundColor : 'white',
        color : 'black'
       });
      showMsg()
      setTimeout(() => {
       setType(null)
      }, 1500);
    }
  }

  return (
    <>
    <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
    <Alert type={type}/>
    <div className="container">
      <TextForm heading='Enter your text to analyse' mode={mode} myStyle={myStyle}/>
    </div>
    </>
  );
}

export default App;
