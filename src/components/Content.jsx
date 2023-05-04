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
          <div className="img-div">
            <img src={require("../imgs/suitcase.png")} alt="suitcase" />
          </div>
          <p>Jobb</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/car.png")} alt="car" />
          </div>
          <p>Fordon</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/sofa.png")} alt="sofa" />
          </div>
          <p>För hemmet</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/home.png")} alt="house" />
          </div>
          <p>Bostad</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/tshirt.png")} alt="shirt" />
          </div>
          <p>Personligt</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/smartphone.png")} alt="phone" />
          </div>
          <p>Elektronik</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/basketball.png")} alt="sport" />
          </div>
          <p>Fritid & hobby</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/store.png")} alt="store" />
          </div>
          <p>Affärsverksamhet</p>
        </div>
        <div>
          <div className="img-div">
            <img src={require("../imgs/cardboard-box.png")} alt="box" />
          </div>
          <p>Övrigt</p>
        </div>
      </div>

      <div className="img-mobile-container">
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
