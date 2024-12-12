import './Header.css'
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function Header({onSearch}) {
    const [searchInputData, setSearchInputData] = useState('');


    const handleTyping = (event) => {
        setSearchInputData(event.target.value)
    }
    const handleOnKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            onSearch(event.target.value);
            event.target.value.clear;
            setSearchInputData('')
        }
    }
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
                        onKeyDown={handleOnKeyDown}
                        onChange={handleTyping}
                    />
                </form>
                <span className="">
             <a
                 className=""
                 href=""
             >Home</a>
          <a
              className=""
              href=""
          >Favorite</a>
        </span>
            </nav>
        </header>
    )
}
