import React from "react";
import Header from "./components/Header/Header";
import { DadosProvider } from "./context/Dados";
import RoutesComponent from "./Routes";

const App = () => {
  return (
    <DadosProvider>
      <Header />
      <RoutesComponent />
    </DadosProvider>
  );
};

export default App;
