import React from "react";
import { DadosContext } from "../../context/Dados";

const ComponentMusic = () => {
  const { data } = React.useContext(DadosContext);
  console.log(data && data.tracks);
  return (
    <div>
      {data &&
        data.tracks.data.map(({ id, title }) => <li key={id}>{title}</li>)}
    </div>
  );
};

export default ComponentMusic;
