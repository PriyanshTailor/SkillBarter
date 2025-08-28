import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow p-6 min-h-screen">
      <ul className="space-y-4 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-[#190a64]">Dashboard</a></li>
        <li><a href="#" className="hover:text-[#190a64]">Profile</a></li>
        <li><a href="#" className="text-[#190a64] font-semibold">Explore Skills</a></li>
        <li><a href="#" className="hover:text-[#190a64]">Skill Management</a></li>
        <li><a href="#" className="hover:text-[#190a64]">My Barters</a></li>
        <li><a href="#" className="hover:text-[#190a64]">Reviews</a></li>
        <li><a href="#" className="hover:text-[#190a64]">Leaderboard</a></li>
        <li><a href="#" className="hover:text-[#190a64]">Group Barters</a></li>
        <li><a href="#" className="hover:text-[#190a64]">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
