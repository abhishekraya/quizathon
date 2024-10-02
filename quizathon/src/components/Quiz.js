import React, { useState, useContext } from 'react'
import { Question } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contex'
import EndScreen from './EndScreen';


function Quiz() {
    const { score, setScore, setGameState} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChoosen, setOptionChoosen] = useState("");
    


    const nextQuestion = () => {
        if (Question[currQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const submitQuiz=()=>{
        if (Question[currQuestion].answer === optionChoosen) {
            setScore(score + 1);
        }
        setGameState("endScreen")
    }
    return (
        <div className='quiz'>
            <h1>{Question[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChoosen("A")}>{Question[currQuestion].A}</button>
                <button onClick={() => setOptionChoosen("B")}>{Question[currQuestion].B}</button>
                <button onClick={() => setOptionChoosen("C")}>{Question[currQuestion].C}</button>
                <button onClick={() => setOptionChoosen("D")}>{Question[currQuestion].D}</button>
            </div>
            {currQuestion==Question.length-1?(
                <button onClick={submitQuiz} className='submit'> Submit</button>
            ):(
            <button onClick={nextQuestion} className='submit'>Next</button>
            )}
        </div>
    )
}

export default Quiz
