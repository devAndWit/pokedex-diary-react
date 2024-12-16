import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card";
import { useState } from "react";
import "./CardList.css";

export default function CardList({ pokemonList, changeCardData }) {
  return (
    <>
      <div className="Card-List">
        {pokemonList.map(function (pok, index) {
          return (
            <>
              <Card
                key={`card_${pok.uniqueKey}`}
                pokemon={pok}
                changeCardData={changeCardData}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
