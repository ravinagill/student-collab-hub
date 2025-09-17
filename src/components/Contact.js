import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="h2">Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="4"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
