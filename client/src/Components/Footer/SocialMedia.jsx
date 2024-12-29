import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="bg-[#E7F0F5] pt-10 pb-4">
      <div className="flex justify-center items-center gap-x-4">
        <p className="font-extrabold text-[16px] text-[#293036]">Let's get social</p>
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
        <FaYoutube />
        <FaLinkedinIn />
      </div>
      <div className="text-center mt-16 space-y-6">
      <p className="text-xs">Privacy Policy . Terms & Conditions</p>
      <p className="text-xs text-[#A7AFB7]">© 2024 Imagine Marketing Limited. All Rights Reserved.</p>
      <p className="text-xs text-[#A7AFB7]">For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, <br /> Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</p>
      </div>
    </div>
  );
};

export default SocialMedia;
