import React from 'react'

import Login1 from './Login1'

export default function Modal1(props) {
  const loginlink = {
    TextDecoder:'overline',
    color:'black'
  }
  return (  
  <div>
        {/* <!-- Button trigger modal --> */}
        
        <button className={`btn btn-outline-${props.mode === 'dark'?'light':'dark'}`} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login/Sign up</button>
   

  {/* <!-- Modal --> */}
  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Login</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Login1/>
      <div className='container my-3'>
        <a href='/' style={loginlink} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign Up</a>
      </div>
      </div>
      {/* <div className="modal-footer">
        <a href='/'  data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Sign Up</a>
      </div> */}
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Sign Up</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Login1></Login1>
      <div className='container my-3'>
        <a href="/" style={loginlink} data-bs-target="#exampleModalToggle" data-bs-toggle="modal"  >Login</a>
      </div>
      </div>
      {/* <div className="modal-footer">
        {/* <a href="/" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"  >Login</a> */}
        {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Login</button> */}
      {/* </div>  */}
    </div>
  </div>
</div>

  </div>
  )
}
