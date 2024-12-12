import Card from "../Card/Card";
import "./cardlist.css";

const poke = [
  {
    id: 1,
    name: "bulbasaur_one",
    isFavorite: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    types: [
      {
        name: "poison",
        img: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/poison.svg",
      },
      {
        name: "grass",
        img: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/poison.svg",
      },
    ],
    abilities: [
      {
        name: "overgrow",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, reprehenderit sed.",
      },
      {
        name: "grass",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloribus.",
      },
    ],
  },
  {
    id: 2,
    name: "bulbasaur_two",
    isFavorite: false,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    types: [
      {
        name: "poison",
        img: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/poison.svg",
      },
      {
        name: "grass",
        img: "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons/poison.svg",
      },
    ],
    abilities: [
      {
        name: "overgrow",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, reprehenderit sed.",
      },
      {
        name: "grass",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, doloribus.",
      },
    ],
  },
];

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
