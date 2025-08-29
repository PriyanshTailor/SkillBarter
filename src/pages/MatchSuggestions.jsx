import React from "react";


const recommendations = [
  {
    name: "Aisha Rahman",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    skills: ["Web Development (React)", "Graphic Design"],
    description: "Aisha is looking to exchange her React development expertise for modern graphic design for her personal portfolio website. Ideal for a designer seeking web dev help.",
    tags: ["Web Development (React)", "Graphic Design"],
  },
  {
    name: "Carlos Sanchez",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    skills: ["Marketing Strategy"],
    description: "Carlos offers 1-1 sessions on crafting effective digital marketing strategies for startups. Available for Skill Wallet exchange.",
    tags: ["Marketing Strategy"],
  },
  {
    name: "Dr. Lena Petrova",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    skills: ["Academic Writing"],
    description: "Dr. Petrova is offering mentorship in academic writing and research methodology for aspiring scholars. Open to guiding thesis projects.",
    tags: ["Academic Writing"],
  },
  {
    name: "Jasmine Chen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    skills: ["Video Editing", "Music Composition"],
    description: "Jasmine creates engaging video content and needs original music scores for her YouTube channel. Offering professional video editing services.",
    tags: ["Video Editing", "Music Composition"],
  },
  {
    name: "Marcus Thorne",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    skills: ["Photography (Portraits)"],
    description: "Marcus offers stunning portrait photography sessions for professionals and individuals. Services available for Skill Wallet credits.",
    tags: ["Photography (Portraits)"],
  },
  {
    name: "Sophia Rossi",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    skills: ["Spanish Tutoring"],
    description: "Sophia is an experienced Spanish tutor, offering conversational practice and grammar lessons for all levels. Perfect for language learners.",
    tags: ["Spanish Tutoring"],
  },
];


const RecommendationCard = ({ rec }) => (
  <div className="bg-white border rounded-lg p-5 flex flex-col gap-2 shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <img src={rec.avatar} alt={rec.name} className="w-10 h-10 rounded-full" />
      <span className="font-semibold text-gray-900">{rec.name}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-2">
      {rec.tags.map((tag, i) => (
        <span key={i} className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">{tag}</span>
      ))}
    </div>
    <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
    <div className="flex gap-2 mt-auto">
      <button className="bg-[#190a64] text-white px-4 py-2 rounded font-medium">Connect</button>
      <button className="bg-[#190a64] text-white border px-4 py-2 rounded font-medium">Request Barter</button>
    </div>
  </div>
);

const MatchSuggestions = () => {
  return (
    <div className="px-10 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Match Suggestions</h1>
      <p className="text-gray-600 mb-6">Discover personalized skill exchange opportunities and connect with users who match your expertise and needs.</p>
      <h2 className="text-xl font-semibold mb-4">Top Recommendations for You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {recommendations.map((rec, idx) => (
          <RecommendationCard rec={rec} key={idx} />
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <h3 className="text-lg font-semibold">Explore More Opportunities</h3>
        <button className="border px-4 py-2 rounded font-medium">Browse All Skills</button>
      </div>
    </div>
  );
};

export default MatchSuggestions;
