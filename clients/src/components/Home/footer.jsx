import React, { Component } from 'react'
import './footer.css' 
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <>
       <div className="footer-wrapper">
        
          {/* <h1> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ea? </h1>
           */}
           <div className="column-wrapper row">
          
           <div className='column col-lg-4  col-sm-4'>
               <a  href=""><h1  >Dridsankalp</h1></a>
               <Link to="/quiz">Article</Link>
               <Link to="/notes">Notes</Link>
               <Link to="/quiz">Quiz</Link>
           </div>
           
           <div className='  col-lg-8 col-sm-8  Links' > 
            
           <a className='link '  href=""><i class="fab fa-instagram fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-facebook fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-twitter fa-4x" ></i></a>
           <a className='link ' href=""> <i class="fab fa-linkedin fa-4x" ></i></a>
          
           </div>
             <h6>copyright @2022 Dridsankalp</h6> 
           </div>
      
      
       </div>
      </>
    )
  }
}
