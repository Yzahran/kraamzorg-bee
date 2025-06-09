import React from "react";
import "./WorkAreaSection.css";
import babyImage from "../../assets/images/baby.webp"; // Update path if needed
import { Link } from 'react-router-dom';

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
              <li><span className="location-dot"></span>Leidschendam</li>
              <li><span className="location-dot"></span>Voorburg</li>
              <li><span className="location-dot"></span>Den Haag</li>
              <li><span className="location-dot"></span>Rijswijk</li>
              <li><span className="location-dot"></span>Delft</li>
              <li><span className="location-dot"></span>Zoetermeer</li>
              <li><span className="location-dot"></span>Wassenaar</li>
              <li><span className="location-dot"></span>Voorschoten</li>
              <li><span className="location-dot"></span>Pijnacker</li>
            </ul>
            <ul>
              <li><span className="location-dot"></span>Nootdorp</li>
              <li><span className="location-dot"></span>Rotterdam</li>
              <li><span className="location-dot"></span>Schiedam</li>
              <li><span className="location-dot"></span>Vlaardingen</li>
              <li><span className="location-dot"></span>Maassluis</li>
              <li><span className="location-dot"></span>Westland (Naaldwijk, Monster, 's-Gravenzande, De Lier)</li>
              <li><span className="location-dot"></span>Leiden</li>
              <li><span className="location-dot"></span>Leiderdorp</li>
              <li><span className="location-dot"></span>Oegstgeest</li>
            </ul>
          </div>

          <p className="workarea-closing">
            Woon je net buiten deze regio? Neem dan gerust contact met ons op.
            We kijken graag samen naar de mogelijkheden om jou toch te ondersteunen.
            Bij Kraamzorg Bee denken we in oplossingen en doen we ons best om iedereen te helpen, waar dat kan.
          </p>

          <Link to="/contact" className="dark-button">Contact</Link>
        </div>

        <div className="workarea-image">
          <img src={babyImage} alt="Baby in blanket" />
        </div>
      </div>
    </section>
  );
};

export default WorkAreaSection;
