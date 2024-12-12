import React from "react";
//* PokemonCard kümmert sich um die Anzeige eines einzelnen Pokemons
const PokemonCard = ({ pokemon, onFavorite }) => {
    return (
        <div className="pokemon-card">

            <img src={pokemon.sprite} alt={pokemon.name} />

            <h3>{pokemon.name}</h3>

            <p>
                Types:
                {pokemon.types.map((type, index) => (
                    <span key={index} className="type-with-symbol">
                        <img
                            src={type.symbol}
                            alt={type.name}
                            className="type-symbol"
                            style={{ width: "20px" }}
                        />
                        {type.name}
                    </span>
                ))}
            </p>

            <ul>{pokemon.abilities.map((ability, index) => (
                    <li key={index}>
                        {ability.name}: {ability.description}
                    </li>
                ))}
            </ul>

            <button onClick={onFavorite}>Add to Favorites</button>
            
        </div>
    );
};

export default PokemonCard;

//! hier fehlten mir die vollständigen werte
// const PokemonCard = ({ pokemon, onFavorite }) =>
// {
//     return (
//         <div className="pokemon-card">

//             <img src={pokemon.sprite} alt={pokemon.name} />

//             <h3>{pokemon.name}</h3>

//             <p>Types: {pokemon.types.map((type) => type.name).join(", ")}</p>

//             <button onClick={onFavorite}>Add to Favorites</button>

//         </div>
        
//     );
// };

// export default PokemonCard;