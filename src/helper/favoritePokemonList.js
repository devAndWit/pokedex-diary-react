import { allFavorite } from "../helper/localStorage.js";

export const getFavoritePokemonList = (pokemonList) => {
  const favorites = allFavorite();
  const favoritesPokemonList = pokemonList.filter((pokemon) => {
    return favorites.includes(pokemon.id);
  });
  return favoritesPokemonList;
};
