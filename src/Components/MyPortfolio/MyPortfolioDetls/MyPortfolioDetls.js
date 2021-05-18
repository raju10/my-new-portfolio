import React from "react";
import { Carousel } from "react-bootstrap";

const MyPortfolioDetls = ({ portfilio }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-flex w-100" src={portfilio.img} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyPortfolioDetls;
