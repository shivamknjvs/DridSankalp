import React,{useState} from 'react'
import "./Quizpaper.css"
import { useParams } from 'react-router-dom'
const Quizpaper = () => {
    const params = useParams();
    const id = params.quizid;
    console.log(id)
    
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
  return (
    <div className='Quizpaper'>
         
              <h2>Questions</h2>
              <p>Attempt all question</p> 
              <div className="question-wrapper">
                  <div className="question d-flex"><h5>Q.1</h5><p> विज्ञान गोपनीयता पुष्टिकर्ता चुनने वर्ष वेबजाल भेदनक्षमता खरिदे एकएस विनिमय कार्यलय व्याख्या ढांचा दिये लेकिन यायेका बिन्दुओमे ऎसाजीस भोगोलिक विश्लेषण बाटते भारत संसाध उशकी दस्तावेज अमितकुमार </p></div>
                  <div className="answer-wrapper row m-0">
                       <div className="card answer-option"> 
                        <span className='answer-num'> A. </span> बनाना उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध जिसकी देने जानते उनके दिशामे विकेन्द्रियकरण जिसकी अनुकूल क्षमता। उन
                       </div>
                       <div className="card answer-option"> 
                       <span className='answer-num'> B. </span>  बनाना उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध जिसकी देने जानते उनके दिशामे विकेन्द्रियकरण जिसकी अनुकूल क्षमता। उन
                       </div>
                       <div className="card answer-option"> 
                       <span className='answer-num'> C. </span>  बनाना उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध जिसकी देने जानते उनके दिशामे विकेन्द्रियकरण जिसकी अनुकूल क्षमता। उन
                       </div>
                       <div className="card answer-option"> 
                       <span className='answer-num'> D. </span>   बनाना उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध जिसकी देने जानते उनके दिशामे विकेन्द्रियकरण जिसकी अनुकूल क्षमता। उन
                       </div>
                  </div>
                  <button onClick={toggleAnsfun}>{toggleAnsText}</button>
                   <div style={{display:toggleAns}} className="explaination">
                   <span className='explaination-num'> D. </span>   बनाना उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध  उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध   उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध   उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध   उनके पासपाई सुस्पश्ट जागरुक शारिरिक बीसबतेबोध जिसकी देने जानते उनके दिशामे विकेन्द्रियकरण जिसकी अनुकूल क्षमता। उन
                   </div>
              </div>
        
    </div>
  )
}

export default Quizpaper