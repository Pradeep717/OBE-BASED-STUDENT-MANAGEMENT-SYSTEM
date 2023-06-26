import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from "react-redux"
import { logoutUser } from "../actions/user_action"
import Logo from "../Images/logo_red.png"
import './Navbar.css'

const NavBar = () => {
  const history = useHistory()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const logoutUserProfile = () => {
    localStorage.removeItem('currentUser');
    history.push('/landing')
  }
  return (
    <nav className='nav'>
      <div className="nav-container" >
        <div >
          <img src={Logo} className='logo' />
        </div>
        <div className='names'>
          <a href="#" className="name1" >STUDENT MANAGEMENT SYSTEM</a>
          <a href="#" className='name2'>FACULTY OF ENGINEERING - UNIVERSITY OF RUHUNA</a>
        </div>
        {<div style={{ marginLeft: "60px" }}>
          {currentUser !== null && <><button onClick={() => logoutUserProfile()} >logout</button></>}
        </div>}


      </div>
    </nav>
  )
}


export default NavBar