import React, { useEffect } from 'react'
import "./User.css"
 import { useNavigate } from 'react-router-dom'
const User = () => {
  
  return (
    <div method="GET" className='User'>
        <div className="user-wrapper d-flex">
           <div className="user-col user-detail">
               <div className="user-img-container"> 
               </div>
               <h3>Shivam Chaudhary</h3>
               <p>Favourate Subject : Math</p>
               <p>Class : 12th</p>

           </div>
           <div className="user-col user-performance">
               <div className="toggle-cont d-flex">
                    <p>My Notes</p>
                    <p>My Quizes </p>
               </div>
           </div>
        </div>
    </div>
  )
}

export default User