import React, { useState } from "react";
import QuestionCard from "./QuestionCard"; // Renders the question and options

// Define questions for each difficulty level
const allQuestions = {
  easy: [
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
      question: "What is the capital of Spain?",
      options: ["Lisbon", "Madrid", "Barcelona", "Seville"],
      correct: 1,
    },
  ],
  medium: [
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
      correct: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1,
    },
  ],
  hard: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correct: 0,
    },
    {
      question: "Which planet has the most moons?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 3,
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo"],
      correct: 1,
    },
  ],
};

const Quiz = () => {
  const [difficulty, setDifficulty] = useState("easy");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  // Function to start/restart the quiz
  const restartQuiz = () => {
    const selectedQuestions = allQuestions[difficulty].slice(0, 2); // Select 2 questions
    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  // Handle difficulty change and restart quiz
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    restartQuiz();
  };

  // Handle answer click
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

  // Initialize the quiz on first load or when difficulty changes
  React.useEffect(() => {
    restartQuiz();
  }, [difficulty]);

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-lg text-center">
      <div className="mb-5">
        <label className="mr-3 font-bold">Select Difficulty:</label>
        <select
          value={difficulty}
          onChange={handleDifficultyChange}
          className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">
            Your Score: {score}/{questions.length}
          </h2>
          <button
            onClick={restartQuiz}
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <QuestionCard
          question={questions[currentQuestion]?.question}
          options={questions[currentQuestion]?.options}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
