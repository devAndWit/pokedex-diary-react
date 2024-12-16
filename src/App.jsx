import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Spinner } from "./utils/Spinner/Spinner.jsx";
import CardList from "./components/CardList/CardList";

import { fetchAllPokemon } from "./services/pokemonApi.js";
import { getFavoritePokemonList } from "./helper/favoritePokemonList.js";
import { getFilteredPokemonList } from "./helper/filteredPokemonList.js";
import "./App.css";
import { allFavorite } from "./helper/localStorage.js";

function App() {
  const [dataPokeApiList, setDataPokeApiList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [currentSite, setCurrentSite] = useState("home");
  const [loading, setLoading] = useState(true); // Zustand für das Laden der Daten
  const [isCardDataChange, setIsCardDataChange] = useState(false);

  useEffect(() => {}, [pokemonList]);

  const changeCardData = () => {
    if (currentSite === "favorite") {
      setPokemonList(getFavoritePokemonList(dataPokeApiList));
    } else if (currentSite === "home") {
      setPokemonList(dataPokeApiList); // Für "home" und "search" gleiches Verhalten
    } else {
      setPokemonList(dataPokeApiList); // Für "home" und "search" gleiches Verhalten
    }
    setIsCardDataChange((prev) => !prev); // Zustand umschalten
  };

  const changeCurrentSite = (site) => {
    setLoading(true);
    setCurrentSite(site);

    let newList = [];
    switch (site) {
      case "favorite":
        newList = getFavoritePokemonList(dataPokeApiList);
        break;
      case "search":
        newList = getFilteredPokemonList(dataPokeApiList);
        break;
      default: // Für "home" und andere Fälle
        newList = dataPokeApiList;
    }

    setPokemonList(newList);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAllPokemon().then((data) => {
          setDataPokeApiList(data);
          setPokemonList(data);
          setLoading(false);
        });
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const searchFromInput = (test) => {
    console.log(test);
  };

  return (
    <div className="w-full">
      <Header
        changeCurrentSite={changeCurrentSite}
        searchFromInput={searchFromInput}
      />

      {loading ? ( // Zeige den Spinner während des Ladens an
        <Spinner />
      ) : // Nur rendern, wenn pokemonList nicht leer ist
      pokemonList.length > 0 ? (
        <CardList
          pokemonList={pokemonList}
          changeCardData={changeCardData}
        />
      ) : (
        <div className="no-data">No Pokémon available!</div> // Fehlermeldung anzeigen, falls keine Pokémon-Daten vorhanden sind
      )}

      <Footer />
    </div>
  );
}

export default App;
