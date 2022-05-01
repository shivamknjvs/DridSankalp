import React, { useState, useEffect } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import "./Coursesoverview.css";
 
const Coursestruct = () => {
   
 

  return (
    <>
      {
        <div className="coursestruct-wrapper">
          <div className="coursestruct-first-row row">
            <div className="coursestruct-first-row-wrapper">
              <h1 className="course-sub">Chapter:-History of Adolf Hilter</h1>
              <h4 className="course-class">Subject:-History</h4>
              <h4 className="course-chapno">Chapter-1</h4>
            </div>
          </div>
          <div className="coursestruct-second-row row">
            <h3>What you'll learn</h3>
            <div className="coursestruct-second-row-col-first col col-lg-6 col-md-12 col-sm-12">
              <div className="coursestruct-col-wrapper">
                <BsCaretRightFill className="icon-tick" />
                <p>Create their own Python Programs1</p>
              </div>

              <div className="coursestruct-col-wrapper">
                <BsCaretRightFill className="icon-tick" />
                <p>Create their own Python Programs2</p>
              </div>
            </div>
            <div className="coursestruct-second-row-col-second col col-lg-6 col-md-12 col-sm-12">
              <div className="coursestruct-col-wrapper">
                <BsCaretRightFill className="icon-tick" />
                <p>Create their own Python Programs3</p>
              </div>
            </div>
          </div>

          <div className="coursestruct-third-row row">
            <h3>Course content</h3>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              quis!
            </li>
          </div>

          <div className="last-row-button">
            <div className="last-row-button-wrapper">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt cupiditate modi illo debitis nemo repudiandae
                provident, sapiente dolorem corrupti eius!
              </p>
              <div className="pay-now">
              <button type="button" class="btn btn-danger ">
                PAY NOW
              </button>
              </div>
            </div>
          </div>

          <div className="final-message">
            <h1>Final Message</h1>
            <div className="final-para">
              <p>
                If you don't build your dreams,Someone will hire to 
                build their dreams.
              </p>
            </div>
          </div>
        </div>
      }
      ) )
    </>
  );
};

export default Coursestruct;
