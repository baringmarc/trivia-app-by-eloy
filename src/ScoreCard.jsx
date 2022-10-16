import { Link } from "react-router-dom";

const ScoreCard = ({ score, total, name }) => {
  const perfect = score === total;
  const passed = !perfect && score / total > 0.5;
  const failed = !perfect && !passed;

  return (
    <>
      <div className="scoreCard">
        <h1>Hey {name}!</h1>
        <h2>You scored </h2>
        <h1>
          {score}/{total}
        </h1>
        {perfect && <h3>Congrats you answered all correctly!</h3>}
        {passed && <h3>Congrats you did a great job!</h3>}
        {failed && <h3>Try again next time :(</h3>}

        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="back-button">Back to home</button>
        </Link>
      </div>
    </>
  );
};

export default ScoreCard;
