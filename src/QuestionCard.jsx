import {useEffect, useState} from 'react'
import ScoreCard from './ScoreCard'

const QuestionCard = ({question, number, setCurrentQuestion, quizLength, name}) => {
    const [choices, setChoices] = useState([])
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswer = (value) => {
        if(value === question.correctAnswer)
            setScore(score => score + 1)

        if(number < (quizLength-1)) {
            setCurrentQuestion((current) => current + 1)
        }
        else {
            setShowScore(true)
            setCurrentQuestion((current) => 0)
        }
        
    }


    useEffect(() => {
        
        if(question) {
            
            setChoices([...question.incorrectAnswers, question.correctAnswer])
            choices.sort(() => Math.random() - .5)
            console.log(score)
        }

    }, [question])
    
    return (

        <div>
            {question && !showScore ? <div>
                <div className="questionContainer">
                <div className="questionNo">
                        <h4>Question {number+1}</h4>
                    </div>
                    <div className="questionContent">
                    <h3>{question.question}</h3>
                    </div>

                    {choices && <div className="choices">                                         
                        { choices.map((choice, i) => (
                        <button 
                        className="question-button" 
                        key = {i}
                        value = {choice}
                        onClick = {(e) => {
                            handleAnswer(e.target.value)
                        }}
                        >
                        {choice}
                        </button>))}
                    </div>}
                </div>
            </div> : showScore === true ? <ScoreCard score = {score} total = {quizLength} name = {name}/> : <div></div>}
        </div>
        
      );
}
 
export default QuestionCard;