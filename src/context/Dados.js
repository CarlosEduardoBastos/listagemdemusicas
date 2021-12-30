import React from "react";

export const DadosContext = React.createContext();

export const DadosProvider = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(async () => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/album/302127",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "ed8b87175fmsh5ed26983374ee98p1ce082jsn646d0e785a87",
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
  }, []);

  return (
    <DadosContext.Provider value={{ data, loading, error }}>
      {children}
    </DadosContext.Provider>
  );
};
