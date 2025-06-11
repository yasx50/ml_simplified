import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";


const feedbacks = [
  {
    name: "Aman",
    message: "This platform helped me learn ML from scratch!",
  },
  {
    name: "Sneha",
    message: "Loved the simplicity and quality of tutorials!",
  },
  {
    name: "Ravi",
    message: "I landed an internship after completing the course!",
  },
];

const FeedbackSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % feedbacks.length);
  const prev = () => setIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <div className="py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">What Learners Say</h2>
      <div className="bg-rose-400 text-black rounded-xl p-6 w-full max-w-md mx-auto">
        <FaQuoteLeft className="text-3xl mb-2" />
        <p className="text-lg font-medium">"{feedbacks[index].message}"</p>
        <p className="text-sm mt-2 italic">- {feedbacks[index].name}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={prev} className="text-white bg-black px-2 py-1 rounded">Prev</button>
          <button onClick={next} className="text-white bg-black px-2 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
