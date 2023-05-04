import React from "react"
import { BsSearch } from "react-icons/bs"
import { BiMap } from "react-icons/bi"
import { FaChevronDown } from "react-icons/fa"

const SearchWindow = () => {
  return (
    <div>
      <div className="search-background">
        <div className="form-container">
          <h1>Välkommen till Blocket</h1>

          <div>
            <div className="input-container">
              <div className="input-lable">
                <p>Sök</p>
              </div>
              <div className="input-window">
                <BsSearch className="icon" />
                <p>Vad vill du söka efter?</p>
              </div>
            </div>

            <div className="dropdown-container">
              <div className="dropdown-lable">
                <p>Välj plats</p>
              </div>
              <div className="dropdown-window">
                <BiMap className="icon" />
                <p>Hela Sverige</p>
                <FaChevronDown className="arrow-icon" />
              </div>
            </div>
          </div>

          <button>Hitta annonser</button>
        </div>
      </div>

      <div className="mobile-background">
        <div className="mobile-form-container">
          <div>
            <p className="form-welcome">Välkommen till Blocket</p>
            <p className="form-bold-text">Början på något stort</p>
          </div>

          <div className="input-window">
            <BsSearch className="icon" />
            <p>Vad vill du söka efter?</p>
          </div>

          <div className="dropdown-mobile-container">
            <div className="dropdown-mobile-window">
              <div className="dropdown-text">
                <BiMap className="icon" />
                <p>Hela Sverige</p>
              </div>
              <div>
                <FaChevronDown className="mobile-arrow-icon" />
              </div>
            </div>
            <button>Sök</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchWindow
