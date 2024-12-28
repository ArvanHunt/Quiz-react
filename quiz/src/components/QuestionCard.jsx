import React from "react";

const QuestionCard = ({ question, options, handleAnswerClick }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">{question}</h2>
      <div className="grid gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
