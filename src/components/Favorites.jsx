import React from "react";

const Favorites = ({ favorites, removeFavorite }) =>
{
    return (
        <div className="favorites">
            <h2>Favorites</h2>
            //* Prüfung ob Favoriten existieren
            {favorites.length > 0 ? (
                //* Wenn ein Favorit vorhanden ist, wird jedes Pokemon in der Liste gegendert
                favorites.map((pokemon) => (
                    <div key={pokemon.id} className="favorite-card">
                        //* Bildchen von den Pokämöns
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        //* Namen der Pökämöns hier anzeigen
                        <h3>{pokemon.name}</h3>
                        //* Um das gewünschte Pökämön aus den Favoriten zu entfernen
                        <button onClick={() => removeFavorite(pokemon.id)}>Remove</button>

                    </div>
                ))) : (<p>No favorites yet.</p>)} //! Nachricht, wenn keine Favoriten zur Verfügung stehen
        </div>
    );
};

export default Favorites;