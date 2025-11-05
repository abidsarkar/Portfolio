import React, { useState } from "react";

const ContactFormMailto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // invisible bot trap
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email!";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";
    return newErrors;
  };

  // helpers
  const encodeForURL = (str) =>
    encodeURIComponent(str).replace(/%20/g, "+"); // optional nicer spacing in some UIs

  const nlToCRLF = (text) => text.replace(/\n/g, "%0D%0A");

  // Build a mailto: link to open user's mail client with prefilled values
  const buildMailtoLink = ({ to = "abidsarkar0@gmail.com", name, email, subject, message }) => {
    // Compose body text — include sender email so you can reply
    const bodyRaw = `From: ${name} <${email}>%0D%0A%0D%0A${message}`;
    const subjectEnc = encodeURIComponent(subject);
    // Use CRLF in body for line breaks
    const bodyEnc = nlToCRLF(encodeURIComponent(bodyRaw));
    return `mailto:${to}?subject=${subjectEnc}&body=${bodyEnc}`;
  };

  // Build Gmail compose URL to open Gmail web compose (opens new tab)
  const buildGmailLink = ({ to = "abidsarkar0@gmail.com", name, email, subject, message }) => {
    const bodyRaw = `From: ${name} <${email}>\n\n${message}`;
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to,
      su: subject,
      body: bodyRaw,
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  };

  // When user chooses to open mail client
  const handleOpenMailClient = (e) => {
    e.preventDefault();

    // honeypot check
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mailto = buildMailtoLink({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to: "abidsarkar0@gmail.com",
    });

    // Open user's mail client (this sets location — on mobile it triggers mail app)
    window.location.href = mailto;
  };

  // When user chooses to open Gmail in new tab
  const handleOpenGmail = (e) => {
    e.preventDefault();

    // honeypot check
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const gmailUrl = buildGmailLink({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to: "abidsarkar0@gmail.com",
    });

    // open in new tab
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
      {/* Honeypot - hidden from users */}
      <div style={{ display: "none" }}>
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <button
          onClick={handleOpenMailClient}
          disabled={loading}
          className={`w-full bg-orange text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition-all duration-300 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          Send in my Mail App
        </button>

        <button
          onClick={handleOpenGmail}
          disabled={loading}
          className={`w-full border border-gray-600 text-white font-semibold py-3 rounded-md hover:bg-gray-700 transition-all duration-300 ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          Send in Gmail (Web)
        </button>
      </div>

      <p className="text-sm text-lightGray">
        Note: These open your email composer prefilled — the user must hit send.
      </p>
    </form>
  );
};

export default ContactFormMailto;
