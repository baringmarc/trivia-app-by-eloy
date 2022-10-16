import { useState } from "react";
import QuestionCard from "./QuestionCard";

const QuizContent = ({ quiz, name }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      <div className="quizContainer">
        <QuestionCard
          question={quiz[currentQuestion]}
          number={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          quizLength={quiz.length}
          name={name}
          category={quiz[0]?.category}
        />
      </div>
    </div>
  );
};

export default QuizContent;
