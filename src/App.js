import React, { useEffect, useState } from  'react';
import {data} from './Data/data';
import QuizScore from './QuizScore';
import './App.css';
const App=()=>{
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [userAnswer,setUserAnswer]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [counter,setCounter]=useState(0);
    const [solved,setSolved]=useState(0);
   
    const changeQuestion=()=>{
        setCounter(30);
        updateScore();
        if(currentQuestion<data.length-1){
            setCurrentQuestion(currentQuestion+1);
            setUserAnswer(0);
        }
        else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(userAnswer===data[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setSolved(0);
        setShowResult(false);
        setCurrentQuestion(0);
        setUserAnswer(0);
        setScore(0);
    } 
    const updateSolved =()=>{
        setSolved(solved+1);
    }
    function todo(){
        changeQuestion();
        updateSolved();
    }
    useEffect(()=>{
        if(counter>0){
            setTimeout(()=>setCounter(counter-1),1000);
        }
        else{
            changeQuestion();
        }
    })
    return(
        <>
        <div>
            <h1 className='heading-txt'>Quiz</h1>
        <div className='container'>
        {showResult ? (
                <QuizScore score={score} totalScore={data.length} tryAgain={resetAll}/>
            ):(
            <>
           <div className='question'>
            <span id='question-number'>{currentQuestion+1}.</span>
           <span id='question-txt'>{data[currentQuestion].question}</span>
           </div>
           <div className='options-container'>
            {data[currentQuestion].options.map((option,i)=>{
                return(
                    <button  className={`option-btn ${
                        userAnswer == i+1?"checked":null
                    }`} key={i} onClick={()=>{setUserAnswer(i+1)}}>
                        {option}
                    </button>
                )
            })}
            </div>
            <div>
                <input type='button' value='Next' id='next-button' onClick={todo}/> 
                <div className='timer'>Time Left : {counter}</div>
            </div>
            
            </>)}
            
        </div>
      
        </div> 
         
         <h1 className='solved'>Solved Questions :{solved}</h1>
         </>
    );
}
export default App;