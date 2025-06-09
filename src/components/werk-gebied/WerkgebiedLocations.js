import React from "react";
import "./WerkgebiedLocations.css";

const WerkgebiedLocations = () => {
  const locationGroups = [
    {
      title: "Den Haag & Omgeving",
      locations: ["Den Haag", "Leidschendam", "Voorburg", "Rijswijk", "Wassenaar", "Voorschoten"],
    },
    {
      title: "Delft & Westland",
      locations: ["Delft", "Pijnacker", "Nootdorp", "Westland", "Naaldwijk", "Monster"],
    },
    {
      title: "Rotterdam & Omgeving",
      locations: ["Rotterdam", "Schiedam", "Vlaardingen", "Maassluis"],
    },
    {
      title: "Leiden & Omgeving",
      locations: ["Leiden", "Leiderdorp", "Oegstgeest", "Zoetermeer"],
    }
  ];

  return (
    <section className="locations-section">
      <div className="locations-container">
        {/* Header Section */}
        <div className="locations-header">
          <div className="locations-badge">
            <span>📍 Ons Werkgebied</span>
          </div>
          <h2 className="locations-title">
            Bij Kraamzorg Bee vinden we het belangrijk dat je kunt rekenen
            op vertrouwde gezichten uit jouw regio.
          </h2>
          <p className="locations-subtitle">
            Daarom werken wij met kraamverzorgenden die de omgeving goed kennen en snel ter plaatse zijn wanneer dat nodig is. 
            Zo kunnen wij jou en je gezin de beste zorg bieden, dichtbij huis.
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="location-cards-grid">
          {locationGroups.map((group, index) => (
            <div key={index} className={`location-card location-card-${index + 1}`}>
              <div className="location-card-header">
                <h3 className="location-group-title">{group.title}</h3>
                <p className="location-group-description">{group.description}</p>
              </div>
              <div className="location-list">
                {group.locations.map((location, locationIndex) => (
                  <div key={locationIndex} className="location-item">
                    <div className="location-dot"></div>
                    <span className="location-name">{location}</span>
                  </div>
                ))}
              </div>
              <div className="location-card-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WerkgebiedLocations;
