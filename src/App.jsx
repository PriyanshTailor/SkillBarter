import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ExploreSkills from "./pages/ExploreSkills";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 bg-gray-50 p-6">
          <ExploreSkills />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
