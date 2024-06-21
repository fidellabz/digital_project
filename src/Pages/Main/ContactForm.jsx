import React from 'react';
import '../Main/C';

const ContactForm = () => (
  <section className="contact-form">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Phone Number" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Interested In" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send Email</button>
    </form>
  </section>
);

export default ContactForm;
