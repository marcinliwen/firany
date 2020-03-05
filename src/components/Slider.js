import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const prev ="<";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "#2f1b0f" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "#2f1b0f" }}
        onClick={onClick}>{prev}</div>
    
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
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={require("../../public/img/f1.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../public/img/f2.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../public/img/f3.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../public/img/f4.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../public/img/f5.jpg")} alt="f1"/>
          </div>
          <div>
          <img src={require("../../public/img/f6.jpg")} alt="f1"/>
          </div>
        </Slider>
      </div>
    );
  }
}