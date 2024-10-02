import React,{useContext} from 'react'
import { QuizContext } from '../Helpers/Contex'

function EndScreen() {
    const {score} = useContext(QuizContext);
  return (
    <div className='endscreen'>
      <h3>Total Score:{score}</h3>
    </div>
  )
}

export default EndScreen
