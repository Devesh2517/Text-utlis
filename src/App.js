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
    
    // const [Theme,setTheme] = useState()
    const [alert,setAlert] = useState(null)
    // const [BtnText,setBtnText] = useState("Enable Dark mode")
    // const [Btn1Text,setBtn1Text] = useState("Enable yellow mode")
    const [theme, setTheme] = useState({ nav: "bg-primary navbar-dark", button: ["btn-primary", {}], textArea: {} })
    
    const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
    const changeTheme = (event) => {
        if (event.target.value === "white") {
            setTheme({ nav: "bg-light navbar-light", button: ["btn-primary", {}], textArea: {} })
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black" 
            showAlert("light mode is enabled","success")
        }
        else if (event.target.value === "dark") {
            setTheme({ nav: "bg-dark navbar-dark", button: ["", { backgroundColor: "rgb(14, 27, 59)", color: "white" }], textArea: { backgroundColor: "rgb(14, 27, 59)", color: "white" } })
            document.body.style.backgroundColor = "rgb(14, 27, 59)"
            document.body.style.color = "white"
            showAlert("Dark mode is enabled","success")
        }
        else if (event.target.value === "yellow") {
            setTheme({ nav: "bg-yellow navbar-dark", button: ["", { backgroundColor: "yellow", color: "black" ,border:'2px solid black'}], textArea: { backgroundColor: "yellow" } })
            document.body.style.backgroundColor = "yellow"
            document.body.style.color = "white"
            showAlert("yellow mode is enabled","success")
        }
        // else if (event.target.value === "Theme4") {
        //     setTheme({ nav: "navbar-dark", button: ["", { backgroundColor: "rgb(66, 25, 60)", color: "white" }], textArea: { backgroundColor: "rgb(236, 184, 227)" } })
        //     document.getElementById("nav").style.backgroundColor = "rgb(49, 14, 59)"
        //     document.body.style.backgroundColor = "rgb(108, 21, 132)"
        //     document.body.style.color = "white"
        // }
    }


    // const togglemode = ()=>{
    
    //     setMode('#343a40')
    //     setAlert('light')
       
    //     showAlert("Dark mode is enabled","success")
    //     document.body.style.backgroundColor = '#343a40'
        // document.title = 'Textutils-DarkMode'
  
      // else
      // {
      //   setMode('light')
      //   showAlert("Light mode is enabled","success")
       
      //   document.body.style.backgroundColor = 'white'
      //   // document.title = 'Textutils'
      // }
    // }

    // const yellowMode = ()=>{
    //   setMode('yellow')
    //   showAlert("yellow mode is enabled","success")
    //   // if(Mode === 'dark'){
    //   //   setMode('yellow')
    //   //   setAlert('light')
       
    //   //   showAlert("yellow mode is enabled","success")
    //   //   document.body.style.backgroundColor = 'yellow'
    //   //   // document.title = 'Textutils-YellowMode'
    //   // }
    //   // else
    //   // {
    //   //   setMode('ye')
    //   //   showAlert("Light mode is enabled","success")
       
    //   //   document.body.style.backgroundColor = 'white'
    //   //   // document.title = 'Textutils'
    //   // }
    // }
    return (
    <>
    {/* <Router> */}
      <Navbar title="Textutlis" mode={theme} changeTheme={changeTheme} />
      <Alert alert ={alert}/>
      <div className="container my-5">
      <Textform showAlert= {showAlert} heading="enter the text"  mode = {theme}/>
     <About mode={theme}/>
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
