import React from 'react'
import QuizCard from '../QuizCard'
import './QuizSection.css'
function QuizSection() {
  return (
    <div className='quiz-section'>
        <h1>Quiz Section</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur delectus eveniet reiciendis minima, minus eligendi mollitia iusto inventore omnis. </p>
        <div className="quiz-container row  m-0">
             <QuizCard/>
             <QuizCard/>
             <QuizCard/>
             <QuizCard/>
             <QuizCard/>
             <QuizCard/>
              
               </div>
    </div>
  )
}

export default QuizSection