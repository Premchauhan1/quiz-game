import React from "react";
function QuizScore(props){
    return(
        <>
        <div className="show-score">
            Total Score:{props.totalScore}<br/>
            Your Score is:{props.score}
        </div>
        <button id="next-button" onClick={props.tryAgain}>Try Again</button>
        </>
        
    )

}
export default QuizScore