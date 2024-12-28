import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "What is the largest planet in the solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-lg text-center">
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">Your Score: {score}/{questions.length}</h2>
          <button
            onClick={restartQuiz}
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
