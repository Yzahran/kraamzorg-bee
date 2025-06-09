import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Juliette",
    text: "Mijn passie voor kraamzorg is ontstaan vanuit mijn eigen ervaringen als moeder én kraamverzorgende. Ik weet hoe intens, bijzonder en soms overweldigend de eerste dagen kunnen zijn. Daarom is het mijn missie om ouders in deze periode te ondersteunen, te ontzorgen en vooral te laten genieten. Met een luisterend oor, praktische hulp en een vleugje humor maak ik elke kraamtijd persoonlijk en warm.",
  },
  {
    name: "Rosalie",
    text: "Voor mij draait kraamzorg om veel meer dan alleen praktische zorg. Het gaat om verbinding, vertrouwen en het creëren van een veilige omgeving waarin ouders zich gezien en gesteund voelen. Met mijn jarenlange ervaring in de kraamzorg begeleid ik gezinnen op een manier die past bij hun wensen. Elke dag opnieuw ben ik dankbaar dat ik deel mag uitmaken van zo'n bijzondere fase.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Ontmoet onze ervaren kraamverzorgenden
          </h2>
          <p className="testimonials-subtitle">
            Persoonlijke verhalen van onze toegewijde professionals
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.subtitle}</p>
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              
              <div className="testimonial-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
