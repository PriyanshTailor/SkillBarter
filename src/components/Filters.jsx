import React from "react";

const Filters = () => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <select className="px-3 py-2 border rounded-lg">
        <option>All Skill Types</option>
      </select>
      <select className="px-3 py-2 border rounded-lg">
        <option>Any Location</option>
      </select>
      <select className="px-3 py-2 border rounded-lg">
        <option>Any Rating</option>
      </select>
      <select className="px-3 py-2 border rounded-lg">
        <option>All Barter Types</option>
      </select>
      <button className="px-4 py-2 rounded-lg border text-[#190a64] border-[#190a64] hover:bg-[#190a64] hover:text-white">
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
