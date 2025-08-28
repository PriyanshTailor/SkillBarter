import React from "react";

const SkillCard = ({ image, title, user, description, category, barterType }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={image} alt={title} className="rounded-xl h-40 object-cover mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mb-1">By {user}</p>
      <p className="text-gray-700 text-sm flex-grow">{description}</p>
      
      <div className="flex justify-between mt-3">
        <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-[#190a64]">{category}</span>
        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-[#190a64]">{barterType}</span>
      </div>
      
      <button className="mt-3 bg-[#190a64] text-white py-2 px-4 rounded-xl hover:opacity-90 transition">
        Request Barter
      </button>
    </div>
  );
};

export default SkillCard;
