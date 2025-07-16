import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser, FaRegHeart, FaCommentDots } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contactez-nous</h2>
      <p className="contact-subtitle">
        Nous sommes à votre écoute pour toute information ou partenariat.<br/>
        Remplissez le formulaire et nous vous répondrons rapidement.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p><strong>Téléphone :</strong> +229 90 00 00 00</p>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <p><strong>Email :</strong> contact@fl-agroleader.com</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p><strong>Adresse :</strong> Cotonou, Bénin</p>
          </div>

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.209283202774!2d2.4264124741316525!3d6.367005525920103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b4dd2cf50df69%3A0x74a68f5d878baf4d!2sCotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte de Cotonou"
          ></iframe>
        </div>

        <form className="contact-form">
          <div className="input-icon">
            <FaUser className="input-symbol" />
            <input type="text" placeholder="Votre nom" required />
          </div>

          <div className="input-icon">
            <FaEnvelope className="input-symbol" />
            <input type="email" placeholder="Votre email" required />
          </div>

          <div className="input-icon">
            <FaRegHeart className="input-symbol" />
            <input type="text" placeholder="Ce que vous aimez le plus..." required />
          </div>

          <div className="input-icon">
            <FaCommentDots className="input-symbol" />
            <textarea placeholder="Votre message..." required></textarea>
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
