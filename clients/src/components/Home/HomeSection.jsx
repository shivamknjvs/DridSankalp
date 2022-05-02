import React from 'react'
import CoursesSection from './CoursesSection'
import Footer from './footer'
import './Home.css'
import LandingSection from './LandingSection'
import Navbar from './Navbar'
import QuizSection from './QuizSection'
const Home = () => {
  return (
    <div className='Home'> 
    
     <LandingSection/>
     <CoursesSection/>
     <QuizSection/>
     <Footer/>
    </div>
  )
}

export default Home