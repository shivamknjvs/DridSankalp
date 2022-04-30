 import React from 'react'
 import './QuizPage.css'
import QuizCard from '../QuizCard'
 const QuizPage = () => {



   return (
     <div className='quiz-page'>
         <div className="filter-container">
           <button className="btn   filter-button">All</button>
           <button className="btn   filter-button">History</button>
            <button className="btn  filter-button">Geography</button>
           <button className="btn   filter-button">Science</button>
           <button className="btn   filter-button">Hindi</button>
         </div>
         <div className="quiz-container row  m-0">
           <QuizCard/>
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
 
 export default QuizPage