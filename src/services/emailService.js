import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

// Initialiseer EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

// Helper functie om bestand naar base64 te converteren
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.naam || `${formData.voornaam} ${formData.achternaam}`,
      from_email: formData.email,
      phone: formData.telefoon || 'Niet opgegeven',
      message: formData.bericht,
      to_email: EMAIL_CONFIG.TO_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Email verzonden succesvol:', response);
    return { success: true, message: 'Email succesvol verzonden!' };
  } catch (error) {
    console.error('Fout bij verzenden email:', error);
    return { success: false, message: 'Er is een fout opgetreden bij het verzenden van de email.' };
  }
};

export const sendInterestEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: `${formData.voornaam} ${formData.achternaam}`,
      from_email: formData.email,
      phone: formData.telefoon,
      message: formData.bericht,
      to_email: EMAIL_CONFIG.TO_EMAIL,
      reply_to: formData.email,
      subject: 'Nieuwe interesse voor Kraamzorg Bee',
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID_INTEREST,
      templateParams
    );

    console.log('Interesse email verzonden succesvol:', response);
    
    return { 
      success: true, 
      message: 'Je interesse is succesvol verzonden! Vergeet niet je CV apart te mailen naar info@kraamzorgbee.nl.' 
    };
  } catch (error) {
    console.error('Fout bij verzenden interesse email:', error);
    return { success: false, message: 'Er is een fout opgetreden bij het verzenden van je interesse.' };
  }
}; 