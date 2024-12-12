import {Header} from "./component/Header/Header.jsx";
import {useEffect, useState} from "react";
import {fetchAllPokemon} from "./services/pokemonApi.js";

function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [searchInputData, setSearchInputData] = useState('');

    const handleDataFromSearch = (data) => {
        setSearchInputData(data);
        console.log('Данные от дочернего компонента:', data);
    };


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAllPokemon();
        setPokemonList(data)
        };
        fetchData();
    }, []);


  return (
    <>
      <div><Header onSearch={handleDataFromSearch}/></div>
    </>
  );
}

export default App;
