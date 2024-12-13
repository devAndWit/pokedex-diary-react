
export const favoritePokemonIdList = [
    {id: 2},
    {id: 5},
    {id: 150},
    {id: 58},
]
export function getFavoritePokemonList(pokemonList) {
    const idsToKeep = new Set(favoritePokemonIdList.map(obj => obj.id));

    return pokemonList.filter((pokemon) => idsToKeep.has(pokemon.id));
}
