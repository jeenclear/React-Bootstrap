import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider() {
  return (
    <>
    <div className="hero_area css-grap20 container-fluid">
      <section className="slider_section position-relative">
        <Carousel 
          id="customCarousel1" 
          controls={false} 
          indicators={false}
        >
          <Carousel.Item>
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text"><h2>baby <br />Care center</h2></div>
                <a href="">Read More</a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text"><h2>baby <br />Care center</h2></div>
                <a href="">Read More</a>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="box">
              <div className="baby_detail">
                <div className="baby_text"><h2>baby <br />Care center</h2>
              </div>
                <a href="">Read More</a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  </>
  );
}

export default CarouselSlider;