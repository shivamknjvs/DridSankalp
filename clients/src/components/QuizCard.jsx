
import React from 'react'
import { Link } from 'react-router-dom'
import './QuizCard.css'
function QuizCard(props) {
  const value = props.quiz._id
 const url = `/quiz/${value}`
  return (
    <Link className='quiz-wrapper card' to={url}>
    <div className='quiz-card   '>
      <div className="img-cont">
         <img src="https://thumbs.dreamstime.com/b/quiz-sign-written-wooden-blackboard-chalkboard-white-background-42995016.jpg" alt="" />
      </div>
      <div>
          <h2>{props.quiz.subject} </h2>  
          <p>Topic : {props.quiz.subject}</p>
          <p>  Standard: VIth</p>   
      </div>
    </div></Link>
  )
}

export default QuizCard