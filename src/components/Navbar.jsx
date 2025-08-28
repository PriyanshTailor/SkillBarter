import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#190a64]">SkillBarter</div>

      {/* Menu */}
      <nav className="space-x-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-[#190a64]">Dashboard</a>
        <a href="#" className="text-[#190a64] font-semibold">Explore Skills</a>
        <a href="#">My Skills</a>
        <a href="#">My Barters</a>
        <a href="#">Profile</a>
      </nav>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search for skills or users..."
          className="px-4 py-2 border rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-[#190a64]"
        />
      </div>
    </header>
  );
};

export default Navbar;
