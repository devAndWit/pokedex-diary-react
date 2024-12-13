import {Header} from "./components/Header/Header.jsx";
import {useEffect, useState} from "react";
import {fetchAllPokemon} from "./services/pokemonApi.js";

import CardList from "./components/CardList/CardList";
import {Spinner} from "./utils/Spinner/Spinner.jsx";
import {search} from "./helper/search.js";
import {getFavoritePokemonList} from "./helper/createFavoriteList.js";

function App() {
    const [pokemonList, setPokemonList] = useState('')
    const [filteredPokemonList, setFilteredPokemonList] = useState('')

    const handleDataFromSearch = (data) => {
        const searchedPokemon = search(data, pokemonList)
        setFilteredPokemonList([searchedPokemon]);
    };

    const handleNavButtonClick = (data) => {
        if (data.toLowerCase() === 'home'){
            setFilteredPokemonList('')
        } else if (data.toLowerCase() === 'favorite') {
            const favoritePokemonList = getFavoritePokemonList(pokemonList)
            console.log(favoritePokemonList)
            // setFilteredPokemonList(favoritePokemonList)
        } else {
            console.log("Invalid value!")
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllPokemon();
            setPokemonList(data)
        };
        fetchData();
    }, []);

    console.log(pokemonList)

    return (
        <>
            <div className="w-full">
                <Header onSearch={handleDataFromSearch} onClick={handleNavButtonClick}/>
                {pokemonList ? <CardList key={"cardList"} pokemonList={filteredPokemonList ? filteredPokemonList : pokemonList}/> : <Spinner/>}
            </div>
        </>
    );
}

export default App;
