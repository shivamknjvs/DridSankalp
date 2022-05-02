import React,{useState,useEffect} from 'react'
import "./Quizpaper.css"
import { useParams } from 'react-router-dom'
const Quizpaper = () => {
    const params = useParams();
    const id = params.quizid;
    console.log(id)
    
     const [allQues, setallQues] = useState([])
    const [toggleAns, settoggleAns] = useState('none')
    const [toggleAnsText, settoggleAnsText] = useState('Answer')
    const toggleAnsfun =()=>{
        if(toggleAns === 'block')
        {
            settoggleAns('none')
           settoggleAnsText('Answer')
        }
        else
        {
        settoggleAns('block')
        settoggleAnsText('Hide')
        }
    }
    const getallquestions= async (e)=>{
      
      try{
       const res = await fetch(`/getOnequiz/${id}`,{
        method:"GET",
        headers:{
         
          "Content-Type":"application/json" 
       
        }  
    })
    const data =await res.json()
    setallQues( data.quizdata.Quizcontent)
  }
  catch(err){
    console.log(err)
  }
    }
    useEffect(() => {
      
      getallquestions();
     
    }, [ ])
    const [choosedAndColor, setchoosedAndColor] = useState('')
   
  return (
    <div className='Quizpaper'>
         
              <h2>Questions</h2>
              <p>Attempt all question</p> 
              <div className="question-wrapper">
{

  allQues&& 
  allQues.map( (ques,index) =>{

    return (
      <div>
      <div className="question d-flex"><h5>Q.{index+1}</h5><p> {ques.Question}</p></div>
      <div className="answer-wrapper row m-0">
           <div className="card answer-option "  o > 
            <span className='answer-num'> A. </span> {ques.A}
           </div>
           <div className="card answer-option "   > 
           <span className='answer-num'> B. </span> {ques.B}
           </div>
           <div className="card answer-option "   > 
           <span className='answer-num'> C. </span> {ques.C}
           </div>
           <div className="card answer-option "   > 
           <span className='answer-num'> D. </span>  {ques.D}
           </div>
      </div>
      <button onClick={toggleAnsfun}>{toggleAnsText}</button>
       <div style={{display:toggleAns}} className="explaination">
       <span className='explaination-num'> {ques.ans}. </span>   {ques.explaination}
       </div>
       </div>
    )
  } )
              
}
              </div>
 
    </div>
  )
}

export default Quizpaper