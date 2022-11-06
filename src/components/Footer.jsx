import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex space-x-4 min-h-max mx-10 mb-10">
      <div className="p-3 border-2 rounded-full border-red-400">
        <FaInstagram className="text-red-400" />
      </div>
      <div className="p-3 border-2 rounded-full border-twitter-blue">
        <FaTwitter className="text-twitter-blue" />
      </div>
      <div className="p-3 border-2 rounded-full border-green-600">
        <FaFacebookF className="text-green-600" />
      </div>
    </div>
  );
};

export default Footer;
