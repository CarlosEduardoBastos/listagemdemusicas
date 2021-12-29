import React from "react";
import { HomeContainer } from "./Home.styled";
import banner from "../../img/banner.jpg";

const Home = () => {
  return (
    <HomeContainer>
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
      </div>
    </HomeContainer>
  );
};

export default Home;
