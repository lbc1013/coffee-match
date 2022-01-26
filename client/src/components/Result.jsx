import React, { useState, useEffect } from 'react';

const Result = ( {state, updateState} ) => {
  const userResponseObj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  };
  let mostFrequent = 0;
  let userSelectTheMost = '';

  useEffect (() => {
    state.userAnswer.split('').forEach((element) => {
      userResponseObj[element] = userResponseObj[element] + 1;
    })

    for (let key in userResponseObj) {
      if (mostFrequent < userResponseObj[key]) {
        mostFrequent = userResponseObj[key];
        userSelectTheMost = userSelectTheMost+key;
      }
    }
    if (state.status === 5) {
      const finalUserResult = userSelectTheMost[userSelectTheMost.length - 1]
      updateState((preValues) => {
        return {...preValues,
          finalResult: userSelectTheMost[userSelectTheMost.length - 1]}
      });
    }
  }, [state.finalResult])

  const handleMainLogo = () => {
    updateState((preValues) => {
      return {...preValues, status: undefined}
    });
  }

  return (
    <>
      <div id='resultSection'>
        <div id='title'>
          <p onClick={handleMainLogo}>COFFEE MATCH</p>
        </div>
        <div id='mainMessage'>Your best match is.....</div>
        {state.finalResult !== null && (
          <>
            <div id='coffeeName'>{state.resultData[state.finalResult].type} / {state.resultData[state.finalResult].country}</div>
            <div id='resultBox'>
              <img id='coffeeImage' src={state.resultData[state.finalResult].imgUrl}></img>
              <div id='country'>COUNTRY : {state.resultData[state.finalResult].country}</div>
              <div id='type'>TYPE : {state.resultData[state.finalResult].type}</div>
              <div id='description'>{state.resultData[state.finalResult].description}</div>
              <form action={state.resultData[state.finalResult].shoppingUrl} method='get' target='_blank'>
                <input id='tryButton' type='submit' value='TRY THIS COFFEE'/>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Result;