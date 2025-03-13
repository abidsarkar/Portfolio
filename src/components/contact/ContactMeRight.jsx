import React, { useMemo } from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import concatAnimation from "../../lotties/emailSection.json";
import Lottie from "lottie-react";
const ContactMeRight = () => {
  const animationData = useMemo(() => concatAnimation, []);
  return (
    <div className="flex flex-col items-center gap-10">
        <div className="w-50">
        <Lottie animationData={animationData} loop={true} />

        </div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
