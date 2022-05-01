import React from 'react'

import logoImg from '../Assets/DridSankalpLogo.jpeg'
import './navbar.css'
import {HiSearch} from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    

      <nav className="navbar navbar-expand-lg m-0 p-0 navbar-wrapper nav-wrap  ">
        <div className="container-fluid p-0 m-0">
          <Link className="navbar-brand nav-logo d-flex" to='/'>
              <img src={logoImg} alt="" />
              <p>Drad Sankalp</p>
          </Link>
          <button className="navbar-toggler burgur-icon-wrapper" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span   className="navbar-toggler-icon burgur-icon  " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex nav-ul">
             <li className="nav-item">
                <Link className="nav-link active" to='/quiz'>   Article</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/notes'>Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/quiz'>   Quiz</Link>
              </li>
              
            
            <form className="d-flex">
             <div className="search-cont d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <HiSearch className='search-icon' />
              </div>
             </form>
            <li className="nav-item">
                <Link to='/login' className="nav-link btn pe-3 ps-3 active btn login-li ">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export default Navbar