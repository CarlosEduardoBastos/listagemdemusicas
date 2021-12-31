import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  .content {
    max-width: 1200px;
    margin: 60px auto;

    .input {
      max-width: 500px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      input {
        width: 500px;
        margin-right: 5px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #3b3a3a;
      }
      i {
        color: #3b3a3a;
      }
    }
  }
`;
