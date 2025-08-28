import React from "react";
import Filters from "../components/Filters";
import SkillCard from "../components/SkillCard";

const skills = [
  {
    image: "https://incapp.in/assets/course-img/python.webp",
    title: "Advanced Python development",
    user: "Alice Johnson",
    description: "Expert in React, Node.js and modern frameworks.",
    category: "Technology",
    barterType: "Direct Barter",
  },
  {
    image: "https://images.yourstory.com/cs/1/175078f09bd211ec9bed114c16bb4a2d/socialmediamarketingstrategy-1650293336008.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
    title: "Social Media Marketing",
    user: "Bob Williams",
    description: "Proficient in Adobe Creative Suite and branding.",
    category: "Creative Arts",
    barterType: "Credit Exchange",
  },
  {
    image: "https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews.jpg",
    title: "Graphics designing",
    user: "Carla Gomez",
    description: "Native English speaker for all levels.",
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
