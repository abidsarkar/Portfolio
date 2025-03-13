import React from "react";
import ContactForm from "./ContactForm";

const ContactMe_left = () => {
  return (
    <div>
      <div>
        <h2 className="text-start text-orange font-semibold text-3xl mb-4">
          Get In Touch
        </h2>
        <p className="text-white">
          {" "}
          Feel free to reach out if you'd like to collaborate <br />
          you are just few clicks away!
        </p>
      </div>
      <ContactForm/>
    </div>
  );
};

export default ContactMe_left;
