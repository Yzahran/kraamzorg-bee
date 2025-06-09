import React, { useState } from "react";
import "./WerkenBijContact.css";
import { sendInterestEmail } from "../../services/emailService";

const WerkenBijContact = () => {
  const [formData, setFormData] = useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    bericht: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      const result = await sendInterestEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        // Reset form na succesvol verzenden
        setFormData({
          voornaam: '',
          achternaam: '',
          email: '',
          telefoon: '',
          bericht: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Er is een onverwachte fout opgetreden. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
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
            {submitMessage && (
              <div className={`submit-message ${submitStatus}`}>
                {submitMessage}
              </div>
            )}
            
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="bericht">Motivatie</label>
              <textarea
                id="bericht"
                name="bericht"
                value={formData.bericht}
                onChange={handleChange}
                rows="5"
                disabled={isSubmitting}
                placeholder="Vertel ons waarom je bij Kraamzorg Bee wilt werken..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Verzenden...' : 'Interesse Versturen'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WerkenBijContact; 