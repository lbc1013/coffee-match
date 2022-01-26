import React, { useState, useEffect } from 'react';

const Questions = ( {state, updateState} ) => {

  const handleNext = () => {
    const currentQuestion = state.status;
    for (let i = 0; i < 5; i++) {
      let eachAnswer = document.getElementById(i).checked;
      if (eachAnswer) {
        updateState((preValues) => {
          return {...preValues,
            status: currentQuestion + 1
          };
        });
        document.getElementById(i).checked = false;
      }
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    const clickedId = event.target.id[0];
    if (!document.getElementById(clickedId).checked) {
      document.getElementById(clickedId).checked = true;
      updateState((preValues) => {
        return {...preValues,
          userAnswer: state.userAnswer + clickedId};
      });
    } else {
      document.getElementById(clickedId).checked = false;
      updateState((preValues) => {
        return {...preValues,
          userAnswer: state.userAnswer.substring(0, state.userAnswer.length - 1)};
      });
    }
  }

  const handlePrevious = (event) => {
    event.preventDefault();
    const currentQuestion = state.status;
    const userLastSelection = state.userAnswer[state.userAnswer.length - 1];

    if (state.status !== 0) {
      document.getElementById(userLastSelection).checked = true;
      updateState((preValues) => {
        return {...preValues,
          status: currentQuestion - 1};
      });
    }
  }

  const handleMainLogo = () => {
    console.log('hi')
    updateState((preValues) => {
      return {...preValues, status: undefined}
    });
  }

  return (
        <div id='questionSection'>
          <div id='title'>
            <p onClick={handleMainLogo}>COFFEE MATCH</p>
          </div>
          <div id='questionBox'>
            <div id='questionNumber'>QUESTION {state.status + 1} OUT OF 5</div>
            <div id='question'>{state.questionData[state.status].question}</div>
            <div id='answerSection'>
            {state.questionData[state.status].answer.map((element, index) => {
              return <div onClick={handleClick} className = 'userAnswer' id={index + 'answer'} key={index}> <input type='checkbox' className='answer' id={index}/>{element}</div>
            })}
            </div>
            <div id='arrowButton'>
            {state.status > 0 && (
              <div onClick={handlePrevious} id='previous'>PREVIOUS</div>
            )}
            {state.status < 4 && (
              <div onClick={handleNext} id='next'>NEXT</div>
            )}
            {state.status === 4 && (
              <div onClick={handleNext} id='lastButton'>MATCH MY COFFEE</div>
            )}
            </div>
          </div>
        </div>
      )
}

export default Questions;