import React from 'react'
import NotesCard from '../NotesCard.jsx'
import "./CoursePage.css"
const CoursePage = () => {
  return (
    <div className='notes-page'>
    <div className="notes-filter-container">
      <button className="btn   notes-filter-button">All</button>
      <button className="btn   notes-filter-button">History</button>
      <button className="btn  notes-filter-button">Geography</button>
      <button className="btn   notes-filter-button">Science</button>
      <button className="btn   notes-filter-button">Hindi</button>
    </div>
    <div className="Notes-container row  m-0">
      <NotesCard/>
      <NotesCard/>
      <NotesCard/>
      <NotesCard/>
      <NotesCard/>
      <NotesCard/>
      <NotesCard/>
    </div>
</div>
  )
}

export default CoursePage