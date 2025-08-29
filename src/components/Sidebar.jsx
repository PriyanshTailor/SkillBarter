import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow p-6 min-h-screen">
      <ul className="space-y-4 text-gray-700 font-medium">
        <li>
          <a href="#" className="hover:text-[#190a64]">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#190a64]">
            Profile
          </a>
        </li>
        <li>
          <Link to="/exploreskills" className="hover:text-[#190a64]">
            Explore Skills
          </Link>
        </li>
        <li>
          <a href="#" className="hover:text-[#190a64]">
            Skill Management
          </a>
        </li>
        <li>
          <Link to="/mybarters" className="hover:text-[#190a64]">
            My Barters
          </Link>
        </li>
        <li>
          <Link to="/barterchat" className="hover:text-[#190a64]">
            My Barters
          </Link>
        </li>
        <li>
          <Link to="/review" className="hover:text-[#190a64]">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className="hover:text-[#190a64]">
            Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/groupbarters" className="hover:text-[#190a64]">
            Group Barters
          </Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-[#190a64]">
            Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
