  import Navbar from "./components/Navbar"
  import Textform from "./components/Textform"
  import './App.css';
  import About from "./components/About";
  import { useState } from "react";
  import Alert from "./components/Alert";
  // import {
  //   BrowserRouter as Router,
  //   Routes,
  //   Route,
    
  // } from "react-router-dom";


  function App() {
    
    const [Mode,setMode] = useState('light')
    const [alert,setAlert] = useState(null)
    const [BtnText,setBtnText] = useState("Enable Dark mode")
    const [Btn1Text,setBtn1Text] = useState("Enable yellow mode")


    const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }

    const togglemode = ()=>{
      if(Mode === 'light'){
        setMode('dark')
        setAlert('light')
        setBtnText('Enable light mode')
        showAlert("Dark mode is enabled","success")
        document.body.style.backgroundColor = '#343a40'
        // document.title = 'Textutils-DarkMode'
      }
      else
      {
        setMode('light')
        showAlert("Light mode is enabled","success")
        setBtnText("Enable Dark mode")
        document.body.style.backgroundColor = 'white'
        // document.title = 'Textutils'
      }
    }

    const yellowMode = ()=>{
      if(Mode === 'light'){
        setMode('yellow')
        setAlert('light')
        setBtn1Text('Enable Light mode')
        showAlert("yellow mode is enabled","success")
        document.body.style.backgroundColor = 'yellow'
        // document.title = 'Textutils-YellowMode'
      }
      else
      {
        setMode('light')
        showAlert("Light mode is enabled","success")
        setBtn1Text("Enable Yellow mode")
        document.body.style.backgroundColor = 'white'
        // document.title = 'Textutils'
      }
    }
    return (
    <>
    {/* <Router> */}
      <Navbar title="Textutlis" mode={Mode} togglemode={togglemode} yellowMode = {yellowMode} BtnText={BtnText} Btn1Text={Btn1Text}/>
      <Alert alert ={alert}/>
      <div className="container my-5">
      <Textform showAlert= {showAlert} heading="enter the text" mode = {Mode}/>
     <About mode={Mode}/>
      {/* <Routes>
        <Route path="/about" element={<About mode={Mode}/>}/>
        <Route exact path="/" element={<Textform showAlert= {showAlert} heading="Word counter , character counter , remove extra spaces" mode = {Mode}/>}/>
      </Routes> */}
      </div>
      {/* </Router> */}
    </>
    );
  }

  export default App;
