import React from "react";
import { DadosContext } from "../../context/Dados";
import { FavoriteContainer } from "./Favorite.styled";

const Favorite = () => {
  const { favorit } = React.useContext(DadosContext);
  console.log(favorit);
  return (
    <FavoriteContainer>
      <section className="favorite-itens">
        {favorit &&
          favorit.map(({ id, title, album }) => (
            <div key={id} className="itens">
              <div className="imagem-music">
                <img src={album.cover_medium} alt="" />
              </div>
              {title}
            </div>
          ))}
      </section>
    </FavoriteContainer>
  );
};

export default Favorite;
