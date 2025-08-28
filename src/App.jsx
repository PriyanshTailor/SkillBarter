import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ExploreSkills from "./pages/ExploreSkills";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <ExploreSkills />
      </div>
    </div>
  );
}

export default App;
