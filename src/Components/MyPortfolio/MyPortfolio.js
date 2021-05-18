import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faPortrait } from "@fortawesome/free-solid-svg-icons";

import amazonImg from "../../Images/9d27ca-20180103-amazon-hq.jpg";
import rotorsCar from "../../Images/Screenshot (91).png";
import doctorsPortar from "../../Images/0 home page2.png";
import footballClub from "../../Images/project-3.jpg";
import { Carousel } from "react-bootstrap";
import MyPortfolioDetls from "./MyPortfolioDetls/MyPortfolioDetls";

////////

////
const protfilioDetails = [
  {
    id: 1,
    img: amazonImg,
    title: "Simple amazon shop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb", "expressJS", "java script"],
    links: (
      <a href="https://github.com/raju10/Ema-Jhon-Simple-Project">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "20px" }} />
      </a>
    ),
    links2: (
      <a href="https://atomic-vault-308206.web.app/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  {
    id: 2,
    img: rotorsCar,
    title: "Rotors Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb", <br />, "expressJS", "java script"],
    links: (
      <a href="https://github.com/raju10/car-rotors-client-side">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "20px" }} />
      </a>
    ),
    links2: (
      <a href="https://rotors-car.web.app/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  {
    id: 3,
    img: doctorsPortar,
    title: "Doctors Portar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["HTML", "css", "Bootstrap"],
    links: (
      <a href="https://github.com/raju10/web-portfolio-1">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "20px" }} />
      </a>
    ),
    links2: (
      <a href="https://raju10.github.io/web-portfolio-1/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  {
    id: 4,
    img: footballClub,
    title: "Football club wibeside",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
    links: (
      <a href="https://github.com/raju10/car-rotors-client-side">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "20px" }} />
      </a>
    ),
    links2: (
      <a href="https://raju10.github.io/web-portfolio-1/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
  {
    id: 5,
    img: footballClub,
    title: "Pin Matched",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, delectus.",
    fitures: ["react", "nodejs", "mongodb"],
    links: (
      <a href="https://github.com/raju10/car-rotors-client-side">
        {" "}
        <FaGithub style={{ color: "white", fontSize: "20px" }} />
      </a>
    ),
    links2: (
      <a href="https://raju10.github.io/web-portfolio-1/">
        {" "}
        <FontAwesomeIcon
          icon={faChartLine}
          style={{ color: "white", fontSize: "20px" }}
        />
      </a>
    ),
  },
];

const MyPortfolio = () => {
  return (
    <div>
      {protfilioDetails.map((portfilio) => (
        <MyPortfolioDetls portfilio={portfilio}></MyPortfolioDetls>
      ))}
    </div>
  );
};

export default MyPortfolio;
