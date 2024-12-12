import React from "react";
import PokemonCard from "./PokemonCard";

//* Die Aufgabe von PokemonList die gesamte Liste aus der "pokemonList" zu rendern, in dem für jedes Pokemon eine PokemonCard Komponente erstellt
const PokemonList = ({ pokemonList, addFavorite }) =>
//? UseState hier anlegen mit searchTerm, setSearchTerm
{
    return (

        //? Suchfeld input hinzufügen

        <div className="pokemon-list">
            //* Hier Mappen wir einmal über die "PokemonList" und rendern für jedes Pokemon eine PokemonCard
            {pokemonList.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id} 
                    pokemon={pokemon} 
                    onFavorite={() => addFavorite(pokemon)} />))} //* auf das onFavorite von der PokemonCard.jsx Pokemon zu den Favoriten hinzufügen
        </div>
    );
};

export default PokemonList;