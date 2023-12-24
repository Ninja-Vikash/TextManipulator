import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [modeName, setModeName] = useState(<i className="ri-moon-fill"></i>)
  const [myStyle, setMyStyle] = useState({
    backgroundColor : 'white',
    color : 'black'
  })
  
  const [alert, setAlert] = useState(null)
  const showMsg = (type, message)=>{
    setAlert({
      type : type,
      msg : message
    })
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
     showMsg("success", "dark mode has been enabled")
     setTimeout(() => {
      setAlert(null)
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
      showMsg("success", "light mode has been enabled");
      setTimeout(() => {
        setAlert(null)
       }, 1500);
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm heading='Enter your text to analyse' mode={mode} myStyle={myStyle}/>
          {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
