 import './App.css';
import Navbar from './components/Home/Navbar';
import Landing from './components/Home/LandingSection';
import Footer from './components/Home/footer';
import Courses from './components/Home/CoursesSection';
import { BrowserRouter as Router,Routes  ,Switch,Route  } from 'react-router-dom';
import Home from './components/Home/HomeSection';
import QuizPage from './components/Quiz/QuizPage';
import Login from './Login';
import Signup from './Signup';
import UploadNotes from './UploadNotes';
 function App() {
  return ( 
    <>  
       <Router> 
         <Navbar/>
         <Routes>
           <Route exact path='/' element={<Home/>}/> 
           <Route path='/quiz' element={<QuizPage/>}/> 
           <Route path='/login' element={<Login/>}/> 
           <Route path='/signup' element={<Signup/>}/> 
           <Route path='/uploadNotes' element={<UploadNotes/>}/> 
         </Routes>
       </Router> 
    </>
  );
}

export default App;
