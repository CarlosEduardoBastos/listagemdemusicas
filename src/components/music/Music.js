import React from "react";
import { DadosContext } from "../../context/Dados";
import { MusicContainer } from "./Music.styled";

const ComponentMusic = () => {
  const { newData, setFavorit } = React.useContext(DadosContext);
  const [active, setActive] = React.useState(false);
  console.log(newData);
  return (
    <MusicContainer>
      <section className="content">
        {newData &&
          newData.map(({ id, preview, album, title, link }) => (
            <div className="itens" key={id}>
              <div className="imagem-music">
                <img src={album.cover} alt="" />
              </div>

              <h2>{title}</h2>
              <audio controls src={preview} />
              <section className="button-conteiner">
                <a href={link} target="_blank" rel="noreferrer">
                  Ver todo
                </a>
                <button
                  onClick={() => {
                    setFavorit((item) => [
                      ...item,
                      { id, preview, title, album },
                    ]);
                    setActive(!active);
                  }}
                >
                  <i className="fas fa-heart"></i>
                </button>
              </section>
            </div>
          ))}
      </section>
    </MusicContainer>
  );
};

export default ComponentMusic;
