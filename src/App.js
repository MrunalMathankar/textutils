import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled' ,'success');
      let link = document.querySelectorAll('.nav-Link');
      Array.from(link).forEach((element)=>{
        element.style.color = 'black';
      })

      let primarybtn = document.getElementsByClassName('btn-primary');
      Array.from(primarybtn).forEach((element)=>{
        element.style.backgroundColor = 'blue';
        element.style.borderColor = 'blue';
      })
  
      // document.querySelector('.btn-success').style.backgroundColor = 'green';
      // document.querySelector('.btn-success').style.borderColor = 'green';
      // document.querySelector('.btn-danger').style.backgroundColor = 'red';
      // document.querySelector('.btn-danger').style.borderColor = 'red';
     
    }
    else{

      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled' ,'success');
      let link = document.querySelectorAll('.nav-Link');
      Array.from(link).forEach((element)=>{
        element.style.color = 'white';
      })

      let primarybtn = document.getElementsByClassName('btn-primary');
      Array.from(primarybtn).forEach((element)=>{
        element.style.backgroundColor = 'blue';
        element.style.borderColor = 'blue';
      })
  
    
      // document.querySelector('.btn-success').style.backgroundColor = 'green';
      // document.querySelector('.btn-success').style.borderColor = 'green';
      // document.querySelector('.btn-danger').style.backgroundColor = 'red';
      // document.querySelector('.btn-danger').style.borderColor = 'red';
      
    }
  }
  const [alert, setalert] = useState(null);
  const showAlert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const setcolor=(e)=>{
    document.body.style.backgroundColor= e.target.value;

    let primarybtn = document.getElementsByClassName('btn-primary');
    Array.from(primarybtn).forEach((element)=>{
      element.style.backgroundColor=e.target.value;
      element.style.borderColor = e.target.value;
    })

    document.querySelector('.btn-success').style.backgroundColor = e.target.value;
    document.querySelector('.btn-success').style.borderColor = e.target.value;
    document.querySelector('.btn-danger').style.backgroundColor = e.target.value;
    document.querySelector('.btn-danger').style.borderColor = e.target.value;

    
    
  }
 
  return (
    <>
      <Router>
    {/* passing the pops to the navbar we are doing this because in case in the future if we want to change the title or about or home then we can chage it directly here only */}
    {/* <Navbar title='TextUtils' about="About" home="Home"/>   */}
    {/* so here if we didnt pass the title or home or about it will take from the default props we created in navbar.js file */}
    {/* <Navbar/>  */}
        <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode}  setcolor={setcolor}/>
        <Alert alert={alert}/>
        <Switch>
          {/* we use exact here beacuse react uses partial matching and to match with our exact about component we use exact here */}
              <Route exact path="/about">
                <About />
              </Route>
              <Route  path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              </Route>
            </Switch>
    </Router>
    
    </>
    
    );
  }

export default App;
