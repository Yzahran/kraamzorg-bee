// EmailJS Configuratie
// Je moet deze waarden vervangen met je eigen EmailJS gegevens

export const EMAIL_CONFIG = {
  // Je kunt deze waarden krijgen van je EmailJS dashboard
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_kraamzorg',
  TEMPLATE_ID_CONTACT: process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT || 'template_contact',
  TEMPLATE_ID_INTEREST: process.env.REACT_APP_EMAILJS_TEMPLATE_INTEREST || 'template_interest',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
  
  // Email instellingen
  TO_EMAIL: 'info@kraamzorgbee.nl',
}; 