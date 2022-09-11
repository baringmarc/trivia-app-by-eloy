import {useParams} from 'react-router-dom'
import {useState} from 'react'
import SettingsCard from './SettingsCard';
import QuizContent from './QuizContent';

const QuizPage = () => {
  const {category} = useParams()
  const [quiz, setQuiz] = useState([])
  const [name, setName] = useState('')

    return (
        <div className = "quiz-page">
            <div className= "headContainer">
              <div className="headContent">
                  <h1>{category}</h1>
                  <SettingsCard category = {category} setQuiz = {setQuiz} setName = {setName}/>
              </div>
            </div>

            <QuizContent quiz = {quiz} name = {name}/>
        </div>
      );
}
 
export default QuizPage;