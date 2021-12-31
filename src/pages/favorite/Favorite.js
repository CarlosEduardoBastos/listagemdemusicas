import React from "react";
import { DadosContext } from "../../context/Dados";

const Favorite = () => {
  const { favorit } = React.useContext(DadosContext);
  console.log(favorit);
  return (
    <div>
      {favorit &&
        favorit.map(({ id, title, album }) => (
          <div key={id}>
            <div className="imagem-music">
              <img src={album.cover} alt="" />
            </div>
            {title}
          </div>
        ))}
    </div>
  );
};

export default Favorite;
