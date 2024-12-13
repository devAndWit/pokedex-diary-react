import Card from "../Card/Card";
import "./CardList.css";

export default function CardList({ pokemonList }) {
  // console.log(pokemonList)
  return (
    <>
      <div className="Card-List">
        {pokemonList.map((pok, index) => {
          // console.log(index, pok);
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
