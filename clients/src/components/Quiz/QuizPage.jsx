 import React from 'react'
 import './QuizPage.css'
import QuizCard from '../QuizCard'
 const QuizPage = () => {

  const quizdb = [1,2,3,4,5,6,7]

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
           {
             quizdb.map( (quiz) =>{
               return (
                 <QuizCard 
                 
                  quizindex={quiz}
                 /> 
               )
             } )
           }
           
         </div>
     </div>
   )
 }
 
 export default QuizPage