import { Header } from "./components/Header/Header.jsx";
import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./services/pokemonApi.js";

import CardList from "./components/CardList/CardList";
import { Spinner } from "./utils/Spinner/Spinner.jsx";
import { search } from "./helper/search.js";
import { Footer } from "./components/Footer/Footer.jsx";
import { getFavoritePokemonList } from "./helper/createFavoriteList.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  const handleDataFromSearch = (data) => {
    const searchedPokemon = search(data, pokemonList);
    if (searchedPokemon) {
      setFilteredPokemonList([searchedPokemon]);
    } else {
      alert("Couldn't find a Pokemon with that name or index!");
    }
  };

  const handleNavButtonClick = (data) => {
    if (data.toLowerCase() === "home") {
      setFilteredPokemonList("");
    } else if (data.toLowerCase() === "favorite") {
      const favoritePokemonList = getFavoritePokemonList(pokemonList);
      setFilteredPokemonList(favoritePokemonList);
    } else {
      console.log("Invalid value!");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPokemon();
      setPokemonList(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full">
        <Header
          onSearch={handleDataFromSearch}
          onClick={handleNavButtonClick}
        />
        {pokemonList ? (
          <CardList
            key={"cardList"}
            pokemonList={
              filteredPokemonList ? filteredPokemonList : pokemonList
            }
          />
        ) : (
          <Spinner />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
