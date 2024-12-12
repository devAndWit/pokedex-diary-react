import React, { useEffect, useState } from "react";
import { fetchAllPokemon } from "./services/pokemonApi";
import PokemonList from "./components/PokemonList";
import Favorites from "./components/Favorites";

// Todo: Search Input Feld hinzufügen und implementieren
// Todo: LocalStorage wieder hinzufügen
// Todo: FavoritenAnzeige muss erweitert werden, aktuell Fehler in der Anzeige

const App = () =>
{
  const [pokemonList, setPokemonList] = useState([]); //? Liste aller 151 Pokemon
  const [favorites, setFavorites] = useState([]);     //? FavoritenListe

  //* Hier die API-Daten abrufen
  useEffect(() =>
  {
    const fetchData = async () =>
    {
      try
      {
        const data = await fetchAllPokemon();
        setPokemonList(data); //* Liste in den Zustand speichern
      } catch (error)
      {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchData();
  }, []);

  //* Hier den Favorit hinzufügen
  const addFavorite = (pokemon) =>
  {
    if (!favorites.some((fav) => fav.id === pokemon.id))
    {
      setFavorites([...favorites, pokemon]);
    }
  };

  //* Hier den Favorit entfernen
  const removeFavorite = (id) =>
  {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="app">
      <h1>Pokemon-Diary-React</h1>
      <PokemonList pokemonList={pokemonList} addFavorite={addFavorite} />
      <Favorites favorites={favorites} removeFavorite={removeFavorite} />
    </div>
  );
};

export default App;