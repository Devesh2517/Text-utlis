import React from 'react'



export default function Login1() {
  return (
    <div>
        <form action="" >
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name='password'/>
    </div>
    <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
  )
}
