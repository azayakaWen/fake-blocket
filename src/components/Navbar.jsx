import React from "react"
import { BsChevronDown, BsSearch } from "react-icons/bs"
import { AiOutlinePlusCircle, AiOutlineBell } from "react-icons/ai"
import { BiMessageRoundedDetail } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-btn-container">
        <img
          src={require("../imgs/Blocket_logotyp_RGB_Large.jpg")}
          alt="Blocket logga"
        />
        <ul>
          <li>
            <div>Kategorier</div>
            <div>
              <BsChevronDown />
            </div>
          </li>
        </ul>
      </div>

      <div className="nav-list-container">
        <ul>
          <button>
            <div className="btn">
              <AiOutlinePlusCircle className="icon" />{" "}
              <div>Lägg till annons</div>
            </div>
          </button>

          <li className="nav-item">
            <div>
              <BsSearch className="icon" />
            </div>
            <div>Annonser</div>
          </li>
          <li className="nav-item">
            <div>
              <BiMessageRoundedDetail className="icon" />
            </div>
            <div>Meddelanden</div>
          </li>
          <li className="nav-item">
            <div>
              <AiOutlineBell className="icon" />
            </div>
            <div>Bevakningar</div>
          </li>
          <li className="nav-item">
            <div>
              <CgProfile className="icon" />
            </div>
            <div>Logga in</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
