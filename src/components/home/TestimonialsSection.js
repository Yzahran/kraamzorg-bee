import React from "react";
import "./TestimonialsSection.css";
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="left-column">
          <h2>Onze ervaringen</h2>
          <p>
            Elke kraamtijd is uniek, maar één ding is altijd hetzelfde: de behoefte aan zorg, rust en een vertrouwd gezicht in huis.
            Bij Kraamzorg Bee doen we er alles aan om deze bijzondere periode zo ontspannen en waardevol mogelijk te maken.
            Onze kraamverzorgenden staan met liefde, toewijding en aandacht voor je klaar.
            Dat zie je terug in de ervaringen van de gezinnen die we hebben mogen begeleiden.
            Zij vertellen hoe onze zorg hen heeft geholpen om vol vertrouwen te genieten van de eerste dagen met hun baby.
          </p>
          <Link to="/werkgebied" className="yellow-button">Ons werkgebied</Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
