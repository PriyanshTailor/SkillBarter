import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ExploreSkills from "./pages/ExploreSkills";
import MatchSuggestions from "./pages/MatchSuggestions";
import BarterChat from "./pages/BarterChat";
import Review from "./pages/Review";
import Leaderboard from "./pages/Leaderboard";
import GroupBarters from "./pages/GroupBarters";
import Settings from "./pages/Settings";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-gray-50 p-6">
            <Routes>
              <Route path="/exploreskills" element={<ExploreSkills />} />
              <Route path="/mybarters" element={<MatchSuggestions />} />
              <Route path="/barterchat" element={<BarterChat />} />
              <Route path="/review" element={<Review />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/groupbarters" element={<GroupBarters />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;