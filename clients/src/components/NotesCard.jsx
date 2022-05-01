import React from 'react'
import './NotesCard.css'
import {Link} from 'react-router-dom'
function NotesCard() {
  return (
     
        
    <div class="card note-card">
      <div className="img-container"></div>
      <div class="card-body card-body-cont">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make
          up the bulk of the card's content.
        </p>
        <Link to='/notes/notesId' class="btn btn-primary">
          Enroll Now
        </Link>
      </div>
     
  </div>
   
  )
}

export default NotesCard