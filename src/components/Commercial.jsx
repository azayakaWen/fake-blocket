import React from "react"
import { AiOutlineRight } from "react-icons/ai"

const Commercial = () => {
  return (
    <div>
      <div className="commercial-text">
        <p>Annonser på Blocket</p>
        <AiOutlineRight className="icon" />
      </div>

      <div className="commercial-images-container">
        <div>
          <img src={require("../imgs/Frakt_paket_blocket.jpg")} alt="Box" />
          <p className="bold">
            Nu kan du köpa och sälja på Blocket utan att ses!
          </p>
          <p>
            Testa frakt istället för att mötas upp nästa gång. Läs mer om frakt
            med köpskydd.
          </p>
        </div>

        <div>
          <img
            src={require("../imgs/Ko__p_direkt_feature.jpeg")}
            alt="Köpa direkt"
          />
          <p className="bold">Gör en snabb affär med Köp direkt</p>
          <p>
            Nu kan du köpa och sälja grejer direkt här på Blocket. Snabbt,
            smidigt och dessutom säkert - för både säljare och köpare.
          </p>
        </div>

        <div>
          <img src={require("../imgs/Exempel_grafik.jpg")} alt="Zero" />
          <p className="bold">Japp, du läste rätt</p>
          <p>
            Det är alltid gratis att lägga upp en massa grejer på Blocket. Dags
            att skilja dig från sakerna du aldrig fastnade för?
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="commercial-mobile-text">
        <p>Annonser på Blocket</p>
        <AiOutlineRight className="icon" />
      </div>

      <div className="commercial-mobile-images-container">
        <div>
          <img src={require("../imgs/Frakt_paket_blocket.jpg")} alt="Box" />
          <div className="img-text">
            <p className="bold">
              Nu kan du köpa och sälja på Blocket utan att ses!
            </p>
            <p>
              Testa frakt istället för att mötas upp nästa gång. Läs mer om
              frakt med köpskydd.
            </p>
          </div>
        </div>

        <div>
          <img
            src={require("../imgs/Ko__p_direkt_feature.jpeg")}
            alt="Köpa direkt"
          />
          <div className="img-text">
            <p className="bold">Gör en snabb affär med Köp direkt</p>
            <p>
              Nu kan du köpa och sälja grejer direkt här på Blocket. Snabbt,
              smidigt och dessutom säkert - för både säljare och köpare.
            </p>
          </div>
        </div>

        <div>
          <img src={require("../imgs/Exempel_grafik.jpg")} alt="Zero" />
          <div className="img-text">
            <p className="bold">Japp, du läste rätt</p>
            <p>
              Det är alltid gratis att lägga upp en massa grejer på Blocket.
              Dags att skilja dig från sakerna du aldrig fastnade för?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commercial
