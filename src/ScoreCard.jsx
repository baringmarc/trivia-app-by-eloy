import {Link} from 'react-router-dom'

const ScoreCard = ({score, total, name}) => {


    return (
        <>
        <div className = "scoreCard">
            <h1>Hey {name}!</h1>
            <h2>You scored </h2>
            <h1>{score}/{total}</h1>
            {score === total ? <h3>Congrats you answered all correctly!</h3> :  score/total > 0.5 ? <h3>Congrats you did a great job!</h3> : <h3>Try again next time :(</h3>}
            
            <Link to = '/' style={{ textDecoration: 'none' }}>
            <button
            className = "back-button"
            >Back to home</button>
            </Link>

        </div>
        </>
      );
}
 
export default ScoreCard;