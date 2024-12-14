export function searchPokemonById(id, pokemonList) {
  return pokemonList.find((elem) => elem.id === +id);
}

export function searchPokemonByName(name, pokemonList) {
  return pokemonList.find(
    (elem) => elem.name.toLowerCase() === name.toLowerCase()
  );
}

export function search(query, pokemonList) {
  //trim query
  query = query.trim();
  if (!isNaN(query) && query !== "") {
    return searchPokemonById(query, pokemonList);
  } else if (/[a-zA-Z]+/.test(query)) {
    return searchPokemonByName(query, pokemonList);
  }
  return false;
}
