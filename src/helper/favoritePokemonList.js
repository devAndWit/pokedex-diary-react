import { allFavorite } from "../helper/localStorage.js";

export const getFavoritePokemonList = (pokemonList) => {
  let favorites = allFavorite();
  let newList = [];

  console.log(favorites);
  console.log(newList);
  return newList;
};
