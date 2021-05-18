import React from "react";
import AboutMe from "../../AboutMe/AboutMe";
import Blog from "../../Blog/Blog/Blog";
import ContactMe from "../../ContactMe/ContactMe";
import MyPortfolio from "../../MyPortfolio/MyPortfolio";
import Portfolio from "../../Portfolio/Portfolio";
import PortfolioCarosel from "../../PortfolioCarosel/PortfolioCarosel";
import HomeMain from "../HomeMain/HomeMain";
import SideNavBar from "../SideNavBar/SideNavBar";

const Home = () => {
  return (
    <div>
      <SideNavBar></SideNavBar>
      <HomeMain></HomeMain>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <ContactMe></ContactMe>
      {/* <PortfolioCarosel></PortfolioCarosel>
      <MyPortfolio></MyPortfolio> */}
    </div>
  );
};

export default Home;
