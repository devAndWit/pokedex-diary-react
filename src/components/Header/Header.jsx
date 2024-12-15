import "./Header.css";
import { useState } from "react";

export function Header({ changeCurrentSite, searchFromInput }) {
  const [searchInputData, setSearchInputData] = useState("");

  //   const handleTyping = (event) => {
  //     setSearchInputData(event.target.value);
  //   };
  //   const handleOnKeyDown = (event) => {
  //     if (event.keyCode === 13) {
  //       event.preventDefault();
  //       onSearch(event.target.value);
  //       event.target.value.clear;
  //       setSearchInputData("");
  //     }
  //   };

  return (
    <header className="header">
      <nav className="">
        <h1 className="">PokeDex-Diary</h1>
        <form className="" action="">
          <input
            value={searchInputData}
            type="text"
            className=""
            id="search"
            placeholder="Search"
            // onKeyDown={handleOnKeyDown}
            onChange={(e) => {
              searchFromInput(e);
            }}
          />
        </form>
        <span className="">
          <button
            className=""
            onClick={(e) => {
              changeCurrentSite("home");
            }}
          >
            Home
          </button>
          <button
            className=""
            onClick={(e) => {
              changeCurrentSite("favorite");
            }}
          >
            Favorite
          </button>
        </span>
      </nav>
    </header>
  );
}
