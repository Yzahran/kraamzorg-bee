import React from "react";
import "./WerkgebiedLocations.css";

const WerkgebiedLocations = () => {
  return (
    <section className="locations-section">
      <div className="locations-container">
        <h2 className="locations-title">
          Bij Kraamzorg Bee vinden we het belangrijk dat je kunt rekenen<br />
          op vertrouwde gezichten uit jouw regio.
        </h2>
        <p className="locations-subtitle">
          Daarom werken wij met kraamverzorgenden die de omgeving goed kennen en snel ter plaatse zijn wanneer dat nodig is. 
          Zo kunnen wij jou en je gezin de beste zorg bieden, dichtbij huis.
        </p>

        <div className="location-columns">
          <ul>
            <li><span className="heart">♥</span> Leidschendam</li>
            <li><span className="heart">♥</span> Voorburg</li>
            <li><span className="heart">♥</span> Den Haag</li>
            <li><span className="heart">♥</span> Rijswijk</li>
            <li><span className="heart">♥</span> Delft</li>
            <li><span className="heart">♥</span> Zoetermeer</li>
          </ul>
          <ul>
            <li><span className="heart">♥</span> Wassenaar</li>
            <li><span className="heart">♥</span> Voorschoten</li>
            <li><span className="heart">♥</span> Pijnacker</li>
            <li><span className="heart">♥</span> Nootdorp</li>
            <li><span className="heart">♥</span> Rotterdam</li>
            <li><span className="heart">♥</span> Schiedam</li>
          </ul>
          <ul>
            <li><span className="heart">♥</span> Vlaardingen</li>
            <li><span className="heart">♥</span> Maassluis</li>
            <li><span className="heart">♥</span> Westland (Naaldwijk, Monster, 's-Gravenzande, De Lier)</li>
            <li><span className="heart">♥</span> Leiden</li>
            <li><span className="heart">♥</span> Leiderdorp</li>
            <li><span className="heart">♥</span> Oegstgeest</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WerkgebiedLocations;
