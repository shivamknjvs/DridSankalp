import React, { useRef ,useState} from 'react'
import './UploadNotes.css'
const UploadNotes = () => { 
    const whatyoulearnRef = useRef()
  const [inputArr, setinputArr] = useState([]);

    const addwhatlearn =(e)=>{
        setinputArr( ...inputArr,{} )
    }
  return (
    <div className='upload-notes-form-wrapper'> 
        
        <form className="form-container">
            <div className='form-custom'>
                <input type="text" placeholder='id' />
                <input type="text" placeholder='class' />
                <input type="text" placeholder='subject' />
                <input type="text" placeholder='title' />
                <input type="text" placeholder='price' />
                <textarea name="about"   cols="30" rows="10" placeholder='about'></textarea>
                 <div className="whatyoulearn-cont">
                 <p>what you learn</p>
                <div ref={whatyoulearnRef} className="whatyoulearn">
                  {
                    inputArr.map( (index)=>{
                      return (
                      <input type="text" placeholder='Enter topic' />
                      )
                    } )
                  }
                </div>
                      <button >remove</button>
                      <button onClick={addwhatlearn}>add</button>
                </div>
                <div className="coursecontent-cont">
                 <p>what you learn</p>
                <div className="coursecontent">
                     <input type="text" placeholder='Enter topic' />
                     <button>X</button>
                </div> 
                      <button>add</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default UploadNotes