import React from "react";
import "./WorkAreaSection.css";
import babyImage from "../../assets/images/baby.webp"; // Update path if needed

const WorkAreaSection = () => {
  return (
    <section className="workarea-section">
      <div className="workarea-container">
        <div className="workarea-text">
          <h2>Ons werkgebied</h2>
          <p>
            Kraamzorg Bee is actief in regio zuid Holland. Mocht u net buiten dit gebied wonen
            kunt u contact met ons opnemen en bespreken wij of dit mogelijk is bij u zorg te leveren.
          </p>

          <div className="workarea-columns">
            <ul>
              <li>♥ Leidschendam</li>
              <li>♥ Voorburg</li>
              <li>♥ Den Haag</li>
              <li>♥ Rijswijk</li>
              <li>♥ Delft</li>
              <li>♥ Zoetermeer</li>
              <li>♥ Wassenaar</li>
              <li>♥ Voorschoten</li>
              <li>♥ Pijnacker</li>
            </ul>
            <ul>
              <li>♥ Nootdorp</li>
              <li>♥ Rotterdam</li>
              <li>♥ Schiedam</li>
              <li>♥ Vlaardingen</li>
              <li>♥ Maassluis</li>
              <li>♥ Westland (Naaldwijk, Monster, 's-Gravenzande, De Lier)</li>
              <li>♥ Leiden</li>
              <li>♥ Leiderdorp</li>
              <li>♥ Oegstgeest</li>
            </ul>
          </div>

          <p className="workarea-closing">
            Woon je net buiten deze regio? Neem dan gerust contact met ons op.
            We kijken graag samen naar de mogelijkheden om jou toch te ondersteunen.
            Bij Kraamzorg Bee denken we in oplossingen en doen we ons best om iedereen te helpen, waar dat kan.
          </p>

          <button className="dark-button">Contact</button>
        </div>

        <div className="workarea-image">
          <img src={babyImage} alt="Baby in blanket" />
        </div>
      </div>
    </section>
  );
};

export default WorkAreaSection;
