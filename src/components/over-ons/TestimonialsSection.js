import React from "react";

import "./TestimonialsSection.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    name: "Juliette",
    subtitle: "Vanuit eigen ervaring, met hart voor gezinnen",
    text: "Mijn passie voor kraamzorg is ontstaan vanuit mijn eigen ervaringen als moeder én kraamverzorgende. Ik weet hoe intens, bijzonder en soms overweldigend de eerste dagen kunnen zijn. Daarom is het mijn missie om ouders in deze periode te ondersteunen, te ontzorgen en vooral te laten genieten. Met een luisterend oor, praktische hulp en een vleugje humor maak ik elke kraamtijd persoonlijk en warm.",
  },
  {
    name: "Rosalie",
    subtitle: "Oprechte aandacht voor jou en je baby",
    text: "Voor mij draait kraamzorg om veel meer dan alleen praktische zorg. Het gaat om verbinding, vertrouwen en het creëren van een veilige omgeving waarin ouders zich gezien en gesteund voelen. Met mijn jarenlange ervaring in de kraamzorg begeleid ik gezinnen op een manier die past bij hun wensen. Elke dag opnieuw ben ik dankbaar dat ik deel mag uitmaken van zo’n bijzondere fase.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial">
            <div className="name-block">
              <h3>{t.name}</h3>
              <p className="subtitle">{t.subtitle}</p>
            </div>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
