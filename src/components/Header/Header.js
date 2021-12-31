import React from "react";
import { HeaderContainer } from "./Header.styled";
import banner from "../../img/banner.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <section className="navigation">
          <div className="logo">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              Home
            </NavLink>
          </div>
          <div className="favorite">
            <NavLink
              to="/favorite"
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                };
              }}
            >
              Favorite
            </NavLink>
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
