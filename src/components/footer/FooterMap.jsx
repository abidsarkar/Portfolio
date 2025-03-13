import React from "react";

const FooterMap = () => {
  return (
    <div className="flex flex-col items-center sm:items-end mb-8 md:mb-0">
      <h3 className="text-2xl font-semibold text-orange mb-4">Find Me Here</h3>
      <address></address>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.93515002690674!2d90.42804157740912!3d23.76774119695293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78b93df91a1%3A0xb6b4a8f5f2a1428b!2sWafi%20Dental!5e0!3m2!1sen!2sbd!4v1741849477560!5m2!1sen!2sbd&z=10"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default FooterMap;
