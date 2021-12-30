import React from "react";
import { HomeContainer } from "./Home.styled";

import { DadosContext } from "../../context/Dados";
import ComponentMusic from "../../components/music/Music";

const Home = () => {
  //const { data, error, loading } = React.useContext(DadosContext);
  // if(error) return <p>{error}</p>
  // if (loading) return <p>Carregando...</p>;
  // if(data){
  // return (

  // );}
  //console.log(data);

  return (
    <HomeContainer>
      <ComponentMusic />
    </HomeContainer>
  );
};

export default Home;
