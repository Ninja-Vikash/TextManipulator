import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light')
  const [modeName, setModeName] = useState(<i class="ri-moon-fill"></i>)
  const [myStyle, setMyStyle] = useState({
    backgroundColor : 'white',
    color : 'black'
  })

  const toggleMode = ()=> {
    if(mode === 'light'){
     setMode('dark');
     setModeName(<i class="ri-sun-fill"></i>);
     document.body.style.backgroundColor = '#333';
     document.body.style.color = '#ddd';
     setMyStyle({
      backgroundColor : '#333',
      color : 'white'
     })
    }
    else{
      setMode('light');
      setModeName(<i class="ri-moon-fill"></i>);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setMyStyle({
        backgroundColor : 'white',
        color : 'black'
       })
    }
  }

  return (
    <>
    <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
    <div className="container">
      <TextForm heading='Enter your text to analyse' mode={mode} myStyle={myStyle}/>
    </div>
    </>
  );
}

export default App;
