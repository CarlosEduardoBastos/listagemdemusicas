import React from "react";
import { HeaderContainer } from "./Header.styled";
import banner from "../../img/banner.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <section className="navigation">
          <div className="logo">
            <Link to="/">Home</Link>
          </div>
          <div className="favorite">
            <Link to="/favorite">Favorite</Link>
          </div>
        </section>
      </nav>
      <section className="content">
        <div className="text">
          <h1>Welcome to the Home Page</h1>
        </div>
        <div className="banner">
          <img src={banner} alt="" />
        </div>
      </section>
    </HeaderContainer>
  );
};

export default Header;
