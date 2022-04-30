
import React from 'react'
import './QuizCard.css'
function QuizCard() {
  return (
    <div className='quiz-card   card'>
      <div className="img-cont">
         <img src="https://thumbs.dreamstime.com/b/quiz-sign-written-wooden-blackboard-chalkboard-white-background-42995016.jpg" alt="" />
      </div>
      <div>
          <h2>History</h2>  
          <p>Topic : Current Afairs</p>
          <p>  Standard: VIth</p>   
      </div>
    </div>
  )
}

export default QuizCard