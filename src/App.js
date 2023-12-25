import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);
  const showMsg = (type, message)=>{
    setAlert({
      type : type,
      msg : message
    });
    setTimeout(() => {
      setAlert(null)
     }, 1500);
  };

  const toggleMode = ()=> {
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#333';
     document.body.style.color = '#ddd';
     showMsg("success", "dark mode has been enabled")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showMsg("success", "light mode has been enabled");
    }
  }

  return (
    <>
    <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
            <TextForm heading='TextManipulator - ReactApp' mode={mode} />
    </div>
    </>
  );
}

export default App;
