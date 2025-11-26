import ContactForm from "./contactForm";
import ContactInfo from "./contactInfo";
function Contact() {
  return (
    <>
    <section className="contact" id="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
            <ContactInfo />
            <ContactForm />
        </div>
    </section>
    </>

);
}
export default Contact;