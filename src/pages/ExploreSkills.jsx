import React from "react";
import Filters from "../components/Filters";
import SkillCard from "../components/SkillCard";

const skills = [
  {
    image: "https://via.placeholder.com/300x200",
    title: "Advanced Web Development",
    user: "Alice Johnson",
    description: "Expert in React, Node.js and modern frameworks.",
    category: "Technology",
    barterType: "Direct Barter",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Creative Graphic Design",
    user: "Bob Williams",
    description: "Proficient in Adobe Creative Suite and branding.",
    category: "Creative Arts",
    barterType: "Credit Exchange",
  },
  {
    image: "https://via.placeholder.com/300x200",
    title: "Spanish Language Tutoring",
    user: "Carla Gomez",
    description: "Native Spanish speaker for all levels.",
    category: "Language",
    barterType: "Direct Barter",
  },
];

const ExploreSkills = () => {
  return (
    <div className="p-6 flex-1">
      <h2 className="text-2xl font-bold mb-4">Explore Skills</h2>
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSkills;
