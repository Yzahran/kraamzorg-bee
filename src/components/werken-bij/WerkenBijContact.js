import React, { useState } from "react";
import "./WerkenBijContact.css";

const WerkenBijContact = () => {
  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    bericht: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <section className="werken-bij-contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Interesse?</h2>
          
          <div className="contact-description">
            <p>
              Stuur jouw motivatie en CV naar info@kraamzorgbee.nl of vul het onderstaande 
              formulier in en wie weet verwelkomen wij jou binnenkort in ons team.
            </p>
            <p>
              Samen maken we van elke kraamtijd een warme, ontspannen en onvergetelijke periode.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="voornaam">Voornaam</label>
                <input
                  type="text"
                  id="voornaam"
                  name="voornaam"
                  value={formData.voornaam}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="achternaam">Achternaam</label>
                <input
                  type="text"
                  id="achternaam"
                  name="achternaam"
                  value={formData.achternaam}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefoon">Telefoon</label>
                <input
                  type="tel"
                  id="telefoon"
                  name="telefoon"
                  value={formData.telefoon}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="bericht">Bericht</label>
              <textarea
                id="bericht"
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Verzenden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WerkenBijContact; 