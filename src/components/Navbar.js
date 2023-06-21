import React from 'react'
import propTypes from 'prop-types'
import Modal1 from './Modal1'
// import { link} from 'react-router-dom'

export default function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg ${props.mode.nav} `}  >
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
          <div className='justify-center'>
           <form className="d-flex me-2" role="search">
          <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-dark me-4" type="submit">Search</button>
        </form>
        </div>
       {/* login button */}
          <Modal1 /> 

          {/* {Theme buttons } */}

           <div className="mx-2 ">
            <button className="btn btn-light" onClick={props.changeTheme} value="white" >White</button>
          </div>
          <div className="mx-2 ">
            <button className="btn btn-dark" onClick={props.changeTheme} value="dark" >Dark</button>
          </div>
          <div className="mx-2 ">
            <button className="btn" style={{backgroundColor:"yellow"}} onClick={props.changeTheme} value="yellow">yellow</button>
          </div>


        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = { title: propTypes.string.isRequired }
Navbar.defaultProps = { title: "set title here" }
