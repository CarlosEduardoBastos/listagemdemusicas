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
        console.log(process.env);
        response = await fetch(
          `${process.env.REACT_APP_UNSPLASH_URL} ${process.env.REACT_APP_UNSPLASH_LIMIT_PER_PAGES}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": `${process.env.REACT_APP_UNSPLASH_HOST}`,
              "x-rapidapi-key": `${process.env.REACT_APP_UNSPLASH_KEY}`,
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
