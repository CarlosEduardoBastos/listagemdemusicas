import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 448px;
  background: #efb400;
  font-family: Arial, Helvetica, sans-serif;
  .navigation {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    a {
      text-decoration: none;
      font-size: 1.2rem;
      color: #3b3a3a;
    }
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .text {
      font-size: 1.7rem;
      color: #3b3a3a;
      padding: 10px;
    }
    .banner {
      height: 500px;
    }
  }
`;
