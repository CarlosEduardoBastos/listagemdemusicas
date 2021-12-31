import React from "react";
import { DadosContext } from "../../context/Dados";
import { SearchContainer } from "./Search.styled";

const Search = () => {
  const { search, setSearch } = React.useContext(DadosContext);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
  return (
    <SearchContainer>
      <section className="content">
        <div className="input">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Procurar  músicas"
          />
          <i className="fas fa-search"></i>
        </div>
      </section>
    </SearchContainer>
  );
};

export default Search;
