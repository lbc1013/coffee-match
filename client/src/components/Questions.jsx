import React, { useState, useEffect } from 'react';

const Questions = ( {state, updateState} ) => {

  const handleNext = () => {
    const currentQuestion = state.status;
    for (let i = 0; i < 5; i++) {
      let eachAnswer = document.getElementById(i).checked;
      if (eachAnswer) {
        updateState((preValues) => {
          return {...preValues,
            status: currentQuestion + 1,
            userAnswer: state.userAnswer + i};
        });
        document.getElementById(i).checked = false;
      }
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    const clickedId = event.target.id;
    if (!document.getElementById(clickedId[0]).checked) {
      document.getElementById(clickedId[0]).checked = true;
    } else {
      document.getElementById(clickedId[0]).checked = false;
    }
  }

  const handlePrevious = (event) => {
    event.preventDefault();
    const currentQuestion = state.status;

    if (state.status !== 0) {
      updateState((preValues) => {
        return {...preValues,
          status: currentQuestion - 1};
      });
    }
  }

  return (
        <div id='questionSection'>
          <div id='title'>
            <p>COFFEE MATCH</p>
          </div>
          <div id='questionBox'>
            <div id='question'>{state.questionData[state.status].question}</div>
            <div id='answerSection'>
            {state.questionData[state.status].answer.map((element, index) => {
              return <div onClick={handleClick} id={index + 'answer'} key={index}> <input type='checkbox' className='answer' id={index}/>{element}</div>
            })}
            </div>
            {state.status > 0 && (
              <div onClick={handlePrevious} id='previous'>PREVIOUS</div>
            )}
            {state.status < 4 && (
              <div onClick={handleNext} id='arrow'>NEXT</div>
            )}
            {state.status === 4 && (
              <div onClick={handleNext} id='arrow'>MATCH MY COFFEE</div>
            )}
          </div>
        </div>
      )
}

export default Questions;