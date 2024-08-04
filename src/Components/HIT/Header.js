import React from 'react'
import logo from "./assets/logo.jpg"
import { NavLink } from 'react-router-dom'

function Header  () {
  return (
    <div>
         <nav
            className="navbar navbar-expand-md navbar-light bg-light"
        >
            <div className="container">
                <NavLink className="navbar-brand" href="/">
                <img src ={logo} alt=''/>
                </NavLink>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
             
                <div class="collapse navbar-collapse justify-content-end " id="collapsibleNavId">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                       
                            <NavLink to="/" className="nav-link">
                               Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">
                               About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link">
                               Courses
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/batches" className="nav-link">
                               Batches
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                               Contact
                            </NavLink>
                        </li>
                                      
                                      
                        
                       
                    
                    </ul>
                 
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Header


