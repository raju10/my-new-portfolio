import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import amazonImg from "../../Images/9d27ca-20180103-amazon-hq.jpg";
import { FaGithub } from "react-icons/fa";
import "./PortfolioCarosel.css";
const PortfolioCarosel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="container">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img">
            <img src={amazonImg} alt="" className="w-100" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
          </ul>
          <div className="details">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img">
            <img src={amazonImg} alt="" className="w-100" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
          </ul>
          <div className="details">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img">
            <img src={amazonImg} alt="" className="w-100" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
          </ul>
          <div className="details">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-img">
            <img src={amazonImg} alt="" className="w-100" />
          </div>
          <ul className="social-icons">
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
            <li>
              <a href="#">
                {" "}
                <FaGithub style={{ color: "white", fontSize: "20px" }} />
              </a>{" "}
            </li>
          </ul>
          <div className="details">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default PortfolioCarosel;
