import styled from "styled-components";

export const MusicContainer = styled.section`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  h2 {
    margin: 10px;
  }
  .content {
    max-width: 1200px;
    margin: 60px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .itens {
      width: 300px;
      height: 260px;
      padding: 10px;
      margin: 10px 5px;
      border: 1px solid #3b3a3a;
      .imagem-music {
        width: 100px;
        margin: 0 auto;
      }

      h2 {
        text-align: center;
        display: block;
        color: #3b3a3a;
        font-size: 1.1rem;
        width: 1rem 0;
      }

      audio {
        width: 100%;
      }

      .button-conteiner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        a {
          text-decoration: none;
          font-size: 1rem;
          background: black;
          padding: 5px 0.8rem;
          border-radius: 5px;
          color: #fff;
          margin: 0.8rem;
          transition: 0.5s;

          &:hover {
            background: #fff;
            color: #000;
            border: 1px solid #000;
          }
        }
        button {
          background: none;
          border: none;
          transition: 0.5s;
          margin-right: 10px;
          &:hover {
            color: #e02e2e;
          }
        }
      }
    }
  }
`;
