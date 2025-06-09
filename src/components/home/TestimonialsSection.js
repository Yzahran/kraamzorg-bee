import React from "react";
import "./TestimonialsSection.css";

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
          <button className="yellow-button">Ons werkgebied</button>
        </div>
        <div className="right-column">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              <em>
                De kraamtijd is voor ons heel bijzonder geweest, mede dankzij Kraamzorg Bee.
                Na een pittige bevalling waren we erg kwetsbaar, maar onze kraamverzorgende gaf ons vanaf dag één zoveel rust, steun en vertrouwen.
                Ze was er niet alleen voor de baby, maar ook voor ons als ouders. Haar betrokkenheid, kennis en liefdevolle zorg maakten echt het verschil.
                We voelden ons gehoord, geholpen en veilig. Dankzij haar hebben we deze bijzondere periode kunnen afsluiten met een goed gevoel
                en kijken we vol liefde terug op deze tijd
              </em>
            </p>
            <div className="testimonial-date">12 april 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
