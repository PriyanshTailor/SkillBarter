
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {  
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#190a64]">
        <img src={Logo} alt="SkillBarter Logo" className="h-8 inline mr-2" />
        SkillBarter
      </div>

      {/* Menu */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-[#190a64]">Dashboard</Link>
        <Link to="/exploreskills" className="hover:text-[#190a64]">Explore Skills</Link>
        <Link to="/myskills" className="hover:text-[#190a64]">My Skills</Link>
        <Link to="/mybarters" className="hover:text-[#190a64]">My Barters</Link>
        <Link to="/profile" className="hover:text-[#190a64]">Profile</Link>
      </nav>

      {/* Search + Avatar */}
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for skills or users..."
          className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#190a64]"
        />
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
};

export default Navbar;
