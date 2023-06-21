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


  const [alert, setAlert] = useState(null)

  const [theme, setTheme] = useState({ nav: "bg-primary  navbar-dark", button: ["btn-primary", {}], textArea: {}, about: {} })

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const changeTheme = (event) => {
    if (event.target.value === "white") {
      setTheme({ nav: "bg-light navbar-light", button: ["btn-primary", {}], textArea: {}, about: {} })
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("light mode is enabled", "success")
    }
    else if (event.target.value === "dark") {
      setTheme({
        nav: "bg-dark navbar-dark", button: ["", { backgroundColor: "rgb(14, 27, 59)", color: "white" }], textArea: { backgroundColor: "rgb(14, 27, 59)", color: "white" }
        , about: { backgroundColor: "rgb(14, 27, 59)", color: "white" }
      })
      document.body.style.backgroundColor = "rgb(14, 27, 59)"
      document.body.style.color = "white"
      showAlert("Dark mode is enabled", "success")
    }
    else if (event.target.value === "yellow") {
      setTheme({
        nav: "bg-yellow navbar-light", button: ["", { backgroundColor: "#d2d242", color: "black", border: '2px solid black' }], textArea: { backgroundColor: "yellow", color: 'black' }
        , about: { backgroundColor: "yellow", color: 'black' }
      })
      document.body.style.backgroundColor = "yellow"
      document.body.style.color = "white"
      showAlert("yellow mode is enabled", "success")
    }

  }



  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutlis" mode={theme} changeTheme={changeTheme} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Textform showAlert={showAlert} heading="enter the text" mode={theme} />
        <About mode={theme} />
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
