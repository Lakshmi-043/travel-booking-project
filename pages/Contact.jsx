import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="section">

      <h1 className="title text-center">
        Contact Us
      </h1>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We'd love to hear from you. Feel free to contact us
            regarding bookings, packages or any travel queries.
          </p>

          <div className="contact-item">
            📍 Hyderabad, Telangana, India
          </div>

          <div className="contact-item">
            📞 +91 9876543210
          </div>

          <div className="contact-item">
            ✉️ support@travelgo.com
          </div>

          <div className="contact-item">
            🕒 Mon - Sun : 24 × 7 Support
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">
            Send Message
          </button>

          {submitted && (
            <p className="success-message">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}

        </form>

      </div>

    </div>
  );
}

export default Contact;