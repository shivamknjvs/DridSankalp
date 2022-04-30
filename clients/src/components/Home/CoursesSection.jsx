import React from "react";
import Slider from "react-slick/lib/slider";
import NotesCard from "../NotesCard";
import "./course.css";
const Courses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
      <div className="course-wrapper">
        <div className="course-title">
       <h1> Notes Section </h1>
       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequuntur tempora amet illum, pariatur voluptas! </p>
       </div>
       <div className="notes-card-cont row m-0">
       <NotesCard/>
       <NotesCard/>
       <NotesCard/>
       <NotesCard/>
       <NotesCard/>
       <NotesCard/>
       </div>
         
      </div>
    </>
  );
};

export default Courses;
