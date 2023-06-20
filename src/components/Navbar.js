import React  from 'react'
import propTypes from 'prop-types'
// import Modal1 from './Modal1'
// import { link} from 'react-router-dom'

export default function Navbar(props) {
    let Darkmode = {
        
        border:'2px solid black',
        width:'40px',
        height:'20px'
    }
    
  return (
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}  >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline nav-fill">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" >About</a>
          </li>
          
          
        </ul>
        {/* <form className="d-flex me-2" role="search">
          <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success me-4" type="submit">Search</button>
        </form>

        {/* login button */}
        {/* <Modal1 mode={props.mode}/>  */}

        {/* dark mode switch */}
        
        <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'white'}`}  >
              <input className="form-check-input" onClick={props.yellowMode} type="checkbox" role="switch" style={Darkmode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">{props.Btn1Text}</label>
          </div>
      
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'white'}`}  >
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" style={Darkmode} id="flexSwitchCheckDefault"/>
              <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">{props.BtnText}</label>
          </div>
      

      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title:propTypes.string.isRequired}
Navbar.defaultProps={title:"set title here"}
