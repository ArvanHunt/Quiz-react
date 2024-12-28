const QuestionCard = ({ question, options, handleAnswerClick }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        <div className="grid gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionCard;
  