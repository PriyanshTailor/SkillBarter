import React from "react";

const contributors = [
  { rank: 1, name: "Alice Smith", skill: "Web Development", avatar: "https://randomuser.me/api/portraits/women/44.jpg", completed: 25, credits: 1500, rating: 4.9 },
  { rank: 2, name: "Bob Johnson", skill: "Graphic Design", avatar: "https://randomuser.me/api/portraits/men/32.jpg", completed: 22, credits: 1300, rating: 4.8 },
  { rank: 3, name: "Charlie Brown", skill: "Content Writing", avatar: "https://randomuser.me/api/portraits/men/41.jpg", completed: 18, credits: 1100, rating: 4.7 },
  { rank: 4, name: "Diana Prince", skill: "Digital Marketing", avatar: "https://randomuser.me/api/portraits/women/65.jpg", completed: 15, credits: 950, rating: 4.6 },
  { rank: 5, name: "Ethan Hunt", skill: "Video Editing", avatar: "https://randomuser.me/api/portraits/men/12.jpg", completed: 12, credits: 800, rating: 4.5 },
];

const badges = [
  { title: "First Barter", desc: "Completed your first skill exchange!" },
  { title: "Community Star", desc: "Top contributor in forum discussions." },
  { title: "Quick Learner", desc: "Completed a skill challenge in record time." },
  { title: "Innovator", desc: "Shared a highly rated skill tutorial." },
  { title: "Growth Master", desc: "Consistently improved skills over time." },
  { title: "Master Networker", desc: "Completed 10+ barters with unique users." },
];

const challenges = [
  { title: "Mastering React Hooks", desc: "Develop a small application using advanced React Hooks.", reward: 200, status: "Active" },
  { title: "Introduction to Figma", desc: "Design a simple mobile app screen using Figma.", reward: 150, status: "Upcoming" },
  { title: "SEO for Beginners", desc: "Optimize a blog post for search engines.", reward: 100, status: "Active" },
];

const Leaderboard = () => (
  <div className="p-10">
    <h1 className="text-2xl font-bold mb-8">Leaderboard & Gamification</h1>
    {/* Top Contributors Table */}
    <div className="bg-white rounded-xl shadow p-6 mb-10">
      <h2 className="text-lg font-semibold mb-4">Top Contributors</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Rank</th>
            <th>User</th>
            <th>Skill</th>
            <th>Barters Completed</th>
            <th>Credits Earned</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map(c => (
            <tr key={c.rank} className="border-b hover:bg-gray-50">
              <td className="py-2 font-bold">{c.rank}</td>
              <td className="flex items-center gap-2 py-2">
                <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full" />
                {c.name}
              </td>
              <td>{c.skill}</td>
              <td>{c.completed}</td>
              <td>{c.credits}</td>
              <td className="flex items-center gap-1 text-[#190a64] font-semibold">
                <span role="img" aria-label="star">⭐</span> {c.rating}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* Badges & Challenges */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Badges */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Badges & Achievements</h2>
          <button className="text-[#190a64] text-sm font-medium">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {badges.map((b, i) => (
            <div key={i} className="bg-white rounded-lg border p-4 flex flex-col items-center text-center">
              <span className="text-2xl mb-2">🏅</span>
              <div className="font-semibold mb-1">{b.title}</div>
              <div className="text-xs text-gray-500">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Challenges */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Weekly Skill Challenges</h2>
        <div className="space-y-4">
          {challenges.map((ch, i) => (
            <div key={i} className="bg-white rounded-lg border p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="font-semibold">{ch.title}</div>
                <span className={`px-2 py-1 rounded text-xs font-bold ${ch.status === "Active" ? "bg-[#190a64] text-white" : "bg-gray-200 text-gray-600"}`}>{ch.status}</span>
              </div>
              <div className="text-sm text-gray-600">{ch.desc}</div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <span role="img" aria-label="reward">🏆</span> Reward: +{ch.reward} Credits
              </div>
              <div className="flex gap-2 mt-2">
                {ch.status === "Active" ? (
                  <button className="bg-[#190a64] text-white px-3 py-1 rounded text-xs">Join Challenge</button>
                ) : (
                  <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs">View Details</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Leaderboard;
