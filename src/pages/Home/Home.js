import React from "react";
import { HomeContainer } from "./Home.styled";

import { DadosContext } from "../../context/Dados";
import ComponentMusic from "../../components/music/Music";
import Search from "../../components/search/Search";

const Home = () => {
  const { newData, error, loading } = React.useContext(DadosContext);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (newData) {
    return (
      <HomeContainer>
        <Search />
        <ComponentMusic />
      </HomeContainer>
    );
  }

  return null;
};

export default Home;
