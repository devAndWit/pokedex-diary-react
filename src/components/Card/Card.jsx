import "./card.css";
const heart = "♥";

export function Card_Title({ pokemon }) {
  console.log("Card-Title");
  // console.log(pokemon);

  return (
    <div className="Card-Title" id={pokemon.id}>
      <span id={"poke_" + pokemon.id + "_1"}>{pokemon?.id || "No ID"}</span>
      <span id={"poke_" + pokemon.id + "_2"} className="first-upper">
        {pokemon.name}
      </span>
      <span id={"poke_" + pokemon.id + "_3"} className="shine">
        {pokemon?.id || "No ID"}
      </span>
      <span
        id={"poke_" + pokemon.id + "_4"}
        className={pokemon.isFavorite ? "favorite" : ""}
      >
        {heart}
      </span>
    </div>
  );
}

export function Card_Image({ pokemon }) {
  console.log("Card_Image");
  // console.log(pokemon);

  return (
    <div className="Card-Image">
      <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  );
}

//! change "Card_Power" to "Card-Types"
export function Card_Types({ pokemon }) {
  console.log("Card_Types");
  console.log(pokemon);

  return (
    <div className="Card-Types">
      {pokemon.types.map((type, index) => {
        return (
          <div
            key={"poke_type_" + pokemon.id + index}
            className="type"
            id={"poke_" + pokemon.id + "_type_" + index}
          >
            <img className="type-img" src={type.img} alt={type.name} />
            <strong className="type-name">{type.name}</strong>
          </div>
        );
      })}
    </div>
  );
}

//! change "Card_Text" to "Card-Abilities"
export function Card_Abilities({ pokemon }) {
  console.log("Card_Abilities");
  // console.log(pokemon);

  return (
    <div className="Card-Abilities">
      {pokemon.abilities.map((ability, index) => {
        return (
          <div
            id={"poke_" + pokemon.id + "_ability_" + index}
            key={"poke_ability_" + pokemon.id + index}
          >
            <span className="ability-name">{ability.name}</span>
            <span className="ability-description">{ability.description}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function Card({ pokemon }) {
  console.log("DEFAULT:");
  // console.log(pokemon);
  return (
    <div id={"poke_" + pokemon.id} className="Card-Item">
      <Card_Title pokemon={pokemon} />
      <Card_Image pokemon={pokemon} />
      <Card_Types pokemon={pokemon} />
      <Card_Abilities pokemon={pokemon} />
    </div>
  );
}
