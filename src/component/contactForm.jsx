function ContactForm() {
    return(
        <div className="contact-form">
                <form action="mailto:rebira8814@gmail.com" method="post">
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <input type="text" name="subject" placeholder="Subject"/>
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message <i class="fas fa-paper-plane"></i></button>
                </form>
            </div>
    );
}
export default ContactForm;