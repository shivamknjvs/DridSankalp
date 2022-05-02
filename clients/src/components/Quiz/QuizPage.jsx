 import React,{useEffect, useState} from 'react'
 import './QuizPage.css'
import QuizCard from '../QuizCard'
  const QuizPage = () => {
    const [quizData , setQuizData] = useState([]);
   const  fetchData= async()=>{
   try{
  const res = await fetch("/getquiz",{
   
      method:"GET",
      headers:{
       
        "Content-Type":"application/json" 
     
      } 
      
    
  })


    const data =await res.json();
   
     setQuizData(data.quizdata);
     
  
}
catch(err){
  console.log(err);
}

}

  useEffect(() => {
      
   fetchData();
  }, [])
  
  

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
             
            quizData&&
             quizData.map( (quiz) =>{
               return (
                 <QuizCard  

                 quiz={quiz}
                 /> 
               )
             } )
             
           }
           
         </div>
     </div>
   )
 }
 
 export default QuizPage