import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Spinner } from "./utils/Spinner/Spinner.jsx";
import CardList from "./components/CardList/CardList";

import { fetchAllPokemon } from "./services/pokemonApi.js";
import { search } from "./helper/search.js";
import { getFavoritePokemonList } from "./helper/favoritePokemonList.js";
import { getFilteredPokemonList } from "./helper/filteredPokemonList.js";

function App() {
  const [dataPokeApiList, setDataPokeApiList] = useState([]);
  const [pokemonList, setPokemonList] = useState("");
  // const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [currentSite, setCurrentSite] = useState("home");

  const changeCurrentSite = (site) => {
    switch (site) {
      case "favorite":
        console.log("FAVORITE IS CLICKED:");
        setCurrentSite("favorite");
        setPokemonList(getFavoritePokemonList(dataPokeApiList));
        return;
      case "search":
        console.log("SEARCH IS CLICKED:");
        setCurrentSite("search");
        setPokemonList(getFilteredPokemonList(dataPokeApiList));
        return;
    }

    console.log("HOME IS CLICKED:");
    setCurrentSite("home");
    setPokemonList(setDataPokeApiList);
    return;
  };

  const searchFromInput = (test) => {
    console.log(test);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPokemon();
      // setPokemonList(data);
      setDataPokeApiList(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full">
        <Header
          changeCurrentSite={changeCurrentSite}
          searchFromInput={searchFromInput}
        />

        {pokemonList ? <CardList key={"cardList"} /> : <Spinner />}
        <Footer />
      </div>
    </>
  );
}

export default App;
