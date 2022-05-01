
import React from 'react'
import { Link } from 'react-router-dom'
import './QuizCard.css'
function QuizCard(props) {
  const value = props.quizindex
  const url = `/quiz/${value}`
  return (
    <Link className='quiz-wrapper card' to={url}>
    <div className='quiz-card   '>
      <div className="img-cont">
         <img src="https://thumbs.dreamstime.com/b/quiz-sign-written-wooden-blackboard-chalkboard-white-background-42995016.jpg" alt="" />
      </div>
      <div>
          <h2>History {props.quizindex}</h2>  
          <p>Topic : Current Afairs</p>
          <p>  Standard: VIth</p>   
      </div>
    </div></Link>
  )
}

export default QuizCard