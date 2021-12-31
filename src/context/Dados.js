import React from "react";

export const DadosContext = React.createContext();

export const DadosProvider = ({ children }) => {
  const [favorit, setFavorit] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchDados() {
      let response;
      let json;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(
          "https://deezerdevs-deezer.p.rapidapi.com/search?q=Daft Punk&limit=12",
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "c6f007336bmsh95cb737e837da3bp177ce0jsnd57c74bdb433",
            },
          }
        );
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (erro) {
        json = null;
        setError(erro.message);
      } finally {
        setData(json);
        setLoading(false);
      }
    }
    fetchDados();
  }, []);

  let searchLowe = search.toLocaleLowerCase();
  let searchStr = searchLowe;
  let newData =
    data &&
    data.data.filter(({ title }) =>
      title.includes(searchStr.charAt(0).toUpperCase() + searchStr.substr(1))
    );
  return (
    <DadosContext.Provider
      value={{
        newData,
        loading,
        error,
        favorit,
        setFavorit,
        search,
        setSearch,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};
