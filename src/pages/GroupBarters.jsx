import React from "react";

const myCircles = [
  {
    title: "React UI Development",
    desc: "Collaborative project to build a responsive UI component library using React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "UI/UX Design"],
    members: 5,
    progress: 75,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Mobile App Wireframing",
    desc: "Designing user flows and wireframes for a new productivity mobile application.",
    tags: ["Figma", "Prototyping", "User Research"],
    members: 3,
    progress: 40,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Content Marketing Strategy",
    desc: "Developing a comprehensive content strategy for a startup, including blog posts and social media.",
    tags: ["Content Writing", "SEO", "Social Media"],
    members: 4,
    progress: 90,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  },
];

const discoverCircles = [
  {
    title: "Python Data Analysis",
    desc: "Learn and apply Python for data analysis, focusing on Pandas and Matplotlib.",
    tags: ["Python", "Pandas", "Data Visualization"],
    members: 7,
    progress: 20,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Beginner Photography Course",
    desc: "Master the basics of digital photography, from composition to editing.",
    tags: ["Photography", "Lightroom", "Composition"],
    members: 12,
    progress: 10,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Public Speaking Practice",
    desc: "Improve public speaking skills through regular practice sessions and feedback.",
    tags: ["Communication", "Presentation", "Coaching"],
    members: 8,
    progress: 60,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Creative Writing Workshop",
    desc: "Develop storytelling abilities and explore different writing genres.",
    tags: ["Creative Writing", "Storytelling", "Editing"],
    members: 6,
    progress: 35,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
];

const groupChat = [
  { sender: "Alice", text: "Hey everyone, what's the status on the UI design for the landing page?", time: "11:00 AM", mine: false },
  { sender: "me", text: "I'm almost done with the wireframes. Should be ready for review by end of day!", time: "10:35 AM", mine: true },
  { sender: "Bob", text: "Great! I'll start gathering content for the hero section then.", time: "10:10 AM", mine: false },
  { sender: "me", text: "Sounds good! Make sure to include placeholder images.", time: "10:27 AM", mine: true },
];

const CircleCard = ({ circle }) => (
  <div className="bg-white rounded-xl shadow p-5 flex flex-col mb-6 w-full max-w-xs">
    <img src={circle.image} alt={circle.title} className="rounded-lg h-32 object-cover mb-3" />
    <h3 className="font-bold text-lg mb-1">{circle.title}</h3>
    <p className="text-sm text-gray-600 mb-2">{circle.desc}</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {circle.tags.map((tag, i) => (
        <span key={i} className="bg-gray-100 text-[#190a64] px-2 py-1 rounded text-xs">{tag}</span>
      ))}
    </div>
    <div className="text-xs text-gray-500 mb-2">👥 {circle.members} Members</div>
    <div className="w-full h-2 bg-gray-200 rounded mb-2">
      <div className="h-2 rounded bg-[#7fd3db]" style={{ width: `${circle.progress}%` }}></div>
    </div>
    <button className="w-full py-2 rounded bg-gray-100 text-[#190a64] font-semibold mt-2">View Details</button>
  </div>
);

const GroupBarters = () => (
  <div className="p-10">
    <h1 className="text-2xl font-bold mb-6">Group Barters / Skill Circles</h1>
    {/* My Skill Circles */}
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-lg font-semibold">My Skill Circles</h2>
      <button className="bg-[#190a64] text-white px-4 py-2 rounded">+ Create New Circle</button>
    </div>
    <p className="text-gray-600 mb-6">Projects and communities you are currently a part of.</p>
    <div className="flex flex-wrap gap-6 mb-10">
      {myCircles.map((circle, i) => (
        <CircleCard circle={circle} key={i} />
      ))}
    </div>
    {/* Discover & Create */}
    <h2 className="text-lg font-semibold mb-2">Discover & Create</h2>
    <p className="text-gray-600 mb-6">Explore public skill circles or start your own collaborative project.</p>
    <div className="flex flex-wrap gap-6 mb-10">
      {discoverCircles.map((circle, i) => (
        <CircleCard circle={circle} key={i} />
      ))}
    </div>
    {/* Recent Group Activity */}
    <h2 className="text-lg font-semibold mb-2">Recent Group Activity</h2>
    <p className="text-gray-600 mb-4">Keep up with the latest discussions in your active circles.</p>
    <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
      <h3 className="font-semibold mb-4">Group Chat: Landing Page UI Project</h3>
      <div className="space-y-4">
        {groupChat.map((msg, i) => (
          <div key={i} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-lg ${msg.mine ? "bg-[#7fd3db] text-white" : "bg-gray-100 text-gray-900"} rounded-lg p-3 shadow`}>
              <div>{msg.text}</div>
              <div className="text-xs text-right mt-1 opacity-70">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GroupBarters;
