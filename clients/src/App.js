 import './App.css';
import Navbar from './components/Home/Navbar';
import Landing from './components/Home/LandingSection';
import Footer from './components/Home/footer';
import Courses from './components/Home/CoursesSection';
import { BrowserRouter as Router,Routes  ,Switch,Route  } from 'react-router-dom';
import Home from './components/Home/HomeSection';
import QuizPage from './components/Quiz/QuizPage';
import Loginform from './Loginform';
import Signupform from './Signupform';
import UploadNotes from './UploadNotes';
import Coursesoverview from './Courseoverview.jsx'
import CoursePage from './components/Courses/CoursePage.jsx';
 function App() {
  return ( 
    <>  
       <Router> 
         <Navbar/>
         <Routes>
           <Route exact path='/' element={<Home/>}/> 
           <Route path='/quiz' element={<QuizPage/>}/> 
           <Route path='login' element={ <Loginform/> }/> 
           <Route path='signup' element={<Signupform/>}/>  
           <Route path='/notes' element={<CoursePage/>}/>
              
           <Route path='/notes/notesId' element={<Coursesoverview/> }/>
           <Route path='uploadNotes' element={<UploadNotes/>}/> 
         </Routes> 
       </Router> 
    </>
  );
}

export default App;
