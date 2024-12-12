import Card from "../Card/Card";
import { fetchAllPokemon } from "../../services/pokemonApi";
import "./cardlist.css";

const poke = fetchAllPokemon();

export default function CardList() {
  return (
    <>
      <div className="Card-List">
        {poke.map((pok, index) => {
          console.log(index, pok);
          return (
            <>
              <Card key={"card_" + index} pokemon={pok} />
            </>
          );
        })}
      </div>
    </>
  );
}
