import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contex'
import "../App.css";
export default function MainMenu() {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <div className='Menu'>
            {/* Main Menu */}
            <button onClick={() => { setGameState('quiz') }}>Start Quiz</button>
        </div>
    )
}

