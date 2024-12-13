import { addFavorite, allFavorite, findFavorite } from "./localStorage.js";

export const favoritePokemonIdList = allFavorite();

export function getFavoritePokemonList(pokemonList) {
  const idsToKeep = new Set(favoritePokemonIdList.map((obj) => obj.id));

  return pokemonList.filter((pokemon) => idsToKeep.has(pokemon.id));
}
