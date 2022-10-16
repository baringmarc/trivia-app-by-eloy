import { useState, useEffect } from "react";
import { getQuestions } from "./proxies/getQuestions";

const useQuestions = ({ categoryText, difficulty, numberOfQuestions }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    setIsLoading(true);
    await getQuestions({ numberOfQuestions, difficulty, categoryText })
      .then((returnedQuestions) => {
        setQuestions(returnedQuestions);
        setIsLoading(false);
        console.log(returnedQuestions);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  return { questions, isLoading, fetchQuestions };
};

const SettingsCard = ({ category, setQuiz, setName }) => {
  const [categoryText, setCategoryText] = useState(category);
  const [difficulty, setDifficulty] = useState("easy");
  const [numberOfQuestions, setnumberOfQuestions] = useState("5");
  const [nameP, setNameP] = useState("");

  const { questions, isLoading, fetchQuestions } = useQuestions({
    categoryText,
    difficulty,
    numberOfQuestions,
  });

  useEffect(() => {
    if (questions) {
      setQuiz(questions);
      setName(nameP);
    }
  }, [questions, setQuiz]);

  useEffect(() => {
    setCategoryText(category.replace(" & ", "_and_").toLowerCase());
  }, [category]);

  return (
    <>
      <div className="settingsCard">
        <div className="settings-title">
          <h4>Set difficulty and no. of questions</h4>
        </div>

        <div className="name-title">
          <h4>Please enter your name!</h4>

          <input
            type="text"
            className="name-input"
            value={nameP}
            onChange={(e) => setNameP(e.target.value)}
          />
        </div>

        <div className="settings">
          <div className="difficulty">
            <label className="input">
              <span>Difficulty</span>
            </label>
            <select
              name="difficulty"
              type="text"
              placeholder=" "
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          <div className="questions">
            <label className="input">
              <span>Questions</span>
            </label>
            <select
              name="questions"
              type="text"
              placeholder=" "
              value={numberOfQuestions}
              onChange={(e) => setnumberOfQuestions(e.target.value)}
            >
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>

        <div className="button">
          <button
            className="start-button"
            disabled={isLoading}
            onClick={() => {
              fetchQuestions();
            }}
          >
            Start Quiz!
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsCard;
