import React from "react"
import { AiOutlineRight } from "react-icons/ai"

const Content = () => {
  return (
    <div>
      <div className="header-container">
        <h2>Upptäck våra kategorier</h2>
        <div className="category-container">
          <p>Alla kategorier</p>
          <AiOutlineRight className="icon" />
        </div>
      </div>

      <div className="img-container">
        <div>
          <img src={require("../imgs/suitcase.png")} alt="suitcase" />
        </div>
        <div>
          <img src={require("../imgs/car.png")} alt="car" />
        </div>
        <div>
          <img src={require("../imgs/sofa.png")} alt="sofa" />
        </div>
        <div>
          <img src={require("../imgs/home.png")} alt="house" />
        </div>
        <div>
          <img src={require("../imgs/tshirt.png")} alt="shirt" />
        </div>
        <div>
          <img src={require("../imgs/smartphone.png")} alt="phone" />
        </div>
        <div>
          <img src={require("../imgs/basketball.png")} alt="sport" />
        </div>
        <div>
          <img src={require("../imgs/store.png")} alt="store" />
        </div>
        <div>
          <img src={require("../imgs/cardboard-box.png")} alt="box" />
        </div>
      </div>
    </div>
  )
}

export default Content
