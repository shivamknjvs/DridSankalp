import React from 'react'
import './landing.css'
import Slider from 'react-slick';
const Landing = () => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (
    <>
       
       <div id="carouselExampleDark" class="carousel   carousel-wrapper carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item carousel-body active first-cont" data-bs-interval="2000">
       <div class="carousel-caption  ">
        <h1>First slide label</h1>
        <p>Some representative placeholder content for the first slide.</p>
         <button className='btn btn-lg btn-light'>Explore More</button>
      </div>
    </div>
    <div class="carousel-item carousel-body second-cont" data-bs-interval="2000">
        <div class="carousel-caption ">
        <h1>Second slide label</h1>
        <p>Some representative placeholder content for the second slide.</p>
        <button className='btn btn-lg btn-light'>Explore More</button>

      </div>
    </div>
    <div class="carousel-item carousel-body third-cont">
       <div class="carousel-caption">
        <h1>Third slide label</h1>
        <p>Some representative placeholder content for the third slide.
          
        </p>
        <button className='btn btn-lg btn-light'>Explore More</button>

      </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Landing