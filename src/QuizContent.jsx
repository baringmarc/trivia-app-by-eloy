import {useEffect, useState} from 'react'
import QuestionCard from "./QuestionCard";

const QuizContent = ({quiz}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
        

    return (
        <div>
            
            
            <div className="quizContainer">
                <QuestionCard question = {quiz[currentQuestion]} number = {currentQuestion} setCurrentQuestion = {setCurrentQuestion} quizLength = {quiz.length}/>
            </div>
            
            
        </div>
            );
        
}
 
export default QuizContent;