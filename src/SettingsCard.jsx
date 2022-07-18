import { useState, useEffect } from 'react'
import axios from 'axios'

const SettingsCard = ({category, setQuiz}) => {
    const [categoryText, setCategoryText] = useState(category)
    const [difficulty, setDifficulty] = useState('easy')
    const [questions, setQuestions] = useState('5')
    const [isLoading, setIsLoading] = useState(false)

    const startQuiz = async (questions, difficulty) => {

        await axios.get(`https://the-trivia-api.com/api/questions?categories=${categoryText}&limit=${questions}&region=PH&difficulty=${difficulty}`)
            .then(response => {
                setQuiz(response.data)
                setIsLoading(true)
                console.log(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const changeCategoryText = () => {
        if(category === 'Film & TV')
            setCategoryText('film_and_tv')
        else if(category === 'Arts & Literature')
            setCategoryText('arts_and_literature')
        else if(category === 'Food & Drink')
            setCategoryText('food_and_drink')
        else if(category === 'Society & Culture')
            setCategoryText('society_and_culture')
        else if(category === 'Sport & Leisure')
            setCategoryText('sport_and_leisure')
    }

    useEffect(() => {
        changeCategoryText()
    }, )

    return (
        <div>
            <div className="settingsCard">
                <div className="settings-title">
                    <h4>Please set difficulty and no. of questions</h4>
                </div>
        
                    <div className="settings">
                        <div className="difficulty">
                            <label className="input">
                                <span>Difficulty</span>
                            </label>
                                <select
                                name = "difficulty"  
                                type="text"
                                placeholder=" " 
                                value= {difficulty}
                                onChange = {(e) => setDifficulty(e.target.value)}>
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
                                name = "questions" 
                                type="text"
                                placeholder=" " 
                                value= {questions}
                                onChange = {(e) => setQuestions(e.target.value)}>
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

                    {isLoading === false ? <div className="button">
                        <button 
                        className = "start-button"
                        onClick = {() => {
                            startQuiz(questions, difficulty)
                        }}>Start Quiz!</button>
                    </div> :

                    <div className="button">
                        <button
                        disabled
                        onClick = {() => {
                            startQuiz(questions, difficulty)
                        }}>Start Quiz!</button>
                    </div>}  
                    
            </div>
        </div>
      );
}
 
export default SettingsCard;