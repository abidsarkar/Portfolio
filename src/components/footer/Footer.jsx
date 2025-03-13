import React from "react";

import QuickLinks from "./QuickLinks";
import FooterFollowME from "./FooterFollowME";
import FooterMap from "./FooterMap";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section - Navigation Links */}
          <QuickLinks />
          {/* Center Section - Social Media Links */}
          <FooterFollowME />
          {/* Right Section - Google Map */}
          <FooterMap />
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MD ABID SARKAR. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
