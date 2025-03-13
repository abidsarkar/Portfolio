import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="text-center text-white space-y-4">
      <h2 className="text-2xl font-semibold">Contact Information</h2>

      <p className="flex items-center justify-center gap-2">
        <FaEnvelope className="text-orange" />
        <span>abidsarkar0@gmail.com</span>
      </p>

      <p className="flex items-center justify-center gap-2">
        <FaPhone className="text-orange" />
        <span>+8801798706939</span>
      </p>

      <p className="flex items-center justify-center gap-2">
        <FaMapMarkerAlt className="text-orange" />
        <span>Aftabnagar ,Badda, Dhaka, Bangladesh</span>
      </p>
    </div>
  );
};

export default ContactInfo;
