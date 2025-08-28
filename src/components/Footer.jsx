import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-6">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center text-2xl font-bold text-[#190a64] mb-3">
            <img src={Logo} alt="SkillBarter Logo" className="h-8 mr-2" />
            SkillBarter
          </div>
          <p className="text-sm mb-4">
            Exchange Skills, Not Money. Build Credibility. Foster Community.
          </p>
          <div className="flex space-x-4 text-gray-500">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#190a64]">Skill Wallet</a></li>
            <li><a href="#" className="hover:text-[#190a64]">AI Matching</a></li>
            <li><a href="#" className="hover:text-[#190a64]">Reviews</a></li>
            <li><a href="#" className="hover:text-[#190a64]">Gamification</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#190a64]">Community Guidelines</a></li>
            <li><a href="#" className="hover:text-[#190a64]">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#190a64]">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#190a64]">Support</a></li>
            <li><a href="#" className="hover:text-[#190a64]">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SkillBarter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
