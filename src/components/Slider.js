import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.sass";

const prev ="<";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        role="button"
        tabIndex={0}
        className={className}
        style={{ ...style, display: "block", color: "#2f1b0f" }}
        onClick={onClick}
        onKeyDown={onClick}
      >
        <svg viewBox="0 0 512 512">
          <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284
            l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284
            c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701
            C391.333,275.032,391.333,236.967,367.954,213.588z"/>
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        role="button"
        tabIndex={0}
        className={className}
        style={{ ...style, display: "block", color: "#2f1b0f" }}
        onClick={onClick}
        onKeyDown={onClick}
        >{prev}
        <svg viewBox="0 0 512 512">
          <path d="M367.954,213.588L160.67,5.872c-7.804-7.819-20.467-7.831-28.284-0.029c-7.819,7.802-7.832,20.465-0.03,28.284
            l207.299,207.731c7.798,7.798,7.798,20.486-0.015,28.299L132.356,477.873c-7.802,7.819-7.789,20.482,0.03,28.284
            c3.903,3.896,9.016,5.843,14.127,5.843c5.125,0,10.25-1.958,14.157-5.873l207.269-207.701
            C391.333,275.032,391.333,236.967,367.954,213.588z"/>
        </svg>
        </div>
    
    );
  }
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
    return (
      <div className="prod-container">
       <h3 className="has-text-weight-semibold is-size-3" >Przykładowe produkty</h3>
        <Slider {...settings}>
          <div>
            <img src={require("../../src/img/f1.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../src/img/f2.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../src/img/f3.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../src/img/f4.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../src/img/f5.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../src/img/f6.jpg")} alt="f1"/>
          </div>
        </Slider>
      
      </div>
    );
  }
}