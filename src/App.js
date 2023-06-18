import Navbar from "./components/Navbar"
// import Textform from "./components/Textform"

import './App.css';
import About from "./components/About";

function App() {
  return (
   <>
    <Navbar title="pharma Quick"/>
    <div className="container my-5">
      {/* <Textform heading="enter the text"/> */}
      <About></About>
    </div>
   
   </>
  );
}

export default App;
