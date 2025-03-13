import React, { useState } from "react";
import { useFormState } from "react-dom";

const ContactForm = () => {
    useFormState
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email!";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";
    return newErrors;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      {/* Name Field */}
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

      {/* Email Field */}
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

      {/* Subject Field */}
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-orange text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
