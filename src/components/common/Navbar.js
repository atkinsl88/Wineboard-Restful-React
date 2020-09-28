import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (


  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        {/* <Link to="/" className="navbar-item">Home</Link> */}
        <Link to="/wines" className="navbar-item">View Wines</Link>
        <Link to="/wines/new" className="navbar-item">Add a Wine</Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/register" className="navbar-item">Register</Link>
          <Link to="/login" className="navbar-item">Log in</Link>
        </div>
      </div>
    </div>
  </nav>
  
)

export default Navbar