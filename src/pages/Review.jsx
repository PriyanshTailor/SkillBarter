import React, { useState } from "react";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (API call)
    alert("Review submitted!");
  };

  return (
    <div className="p-10 flex flex-col items-start">
      <h1 className="text-2xl font-bold mb-8">Review & Feedback</h1>
      <div className="mx-auto w-full max-w-xl bg-white rounded-xl shadow p-8">
        <h2 className="text-lg font-semibold mb-2">Share Your Experience</h2>
        <p className="text-gray-600 mb-4">
          Help us build a trusted community by rating your partner and providing feedback for your recent barter.
        </p>
        <div className="mb-4 font-medium">
          Reviewing: <span className="font-bold">Alex Johnson</span> (Graphic Design Barter)
        </div>
        {/* Star Rating */}
        <div className="flex items-center mb-4">
          {[1,2,3,4,5].map(star => (
            <button
              key={star}
              type="button"
              className={`text-3xl mx-1 focus:outline-none ${star <= (hover || rating) ? "text-[#190a64]" : "text-gray-300"}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-24 p-3 rounded bg-gray-100 mb-4 resize-none"
            placeholder="What was your experience like? Be specific and constructive..."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-[#7fd3db] text-white font-semibold hover:bg-[#190a64] transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;