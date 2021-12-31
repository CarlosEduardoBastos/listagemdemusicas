import React from "react";
import { DadosContext } from "../../context/Dados";
import { MusicContainer } from "./Music.styled";

const ComponentMusic = () => {
  const { newData, setFavorit } = React.useContext(DadosContext);
  const [active, setActive] = React.useState(false);
  const [contar, setContar] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const timeoutRef = React.useRef();
  console.log(newData);

  return (
    <MusicContainer>
      {notification && <h2>{notification}</h2>}
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
                    setNotification("Adicionado aos favoritos");
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => {
                      setNotification(null);
                    }, 1000);
                    setContar(contar + 1);
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
