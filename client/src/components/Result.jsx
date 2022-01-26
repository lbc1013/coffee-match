import React, { useState, useEffect } from 'react';

const Result = ( {state, updateState} ) => {
  const userResponse = [];

  useEffect (() => {
    state.userAnswer.split('').forEach((element) => {
      userResponse.push(Number(element));
    })
    const resultForUser = userResponse.reduce((a,b) => {
      return Math.max(a,b);
    }, 0);

    updateState((preValues) => {
      return {...preValues,
        finalResult: resultForUser}
    });
  }, state.finalResult)

  const handleMainLogo = () => {
    console.log('hi')
    updateState((preValues) => {
      return {...preValues, status: undefined}
    });
  }

  return (
    <>
      <div id='resultSection'>
        <div onClick={handleMainLogo} id='title'>
          <p>COFFEE MATCH</p>
        </div>
        {state.finalResult !== null && (
          <div id='questionBox'>
            <div id='mainMessage'>We think you'll enjoy this coffee</div>
            <img id='coffeeImage' src={state.resultData[state.finalResult].imgUrl}></img>
            <div id='country'>COUNTRY : {state.resultData[state.finalResult].country}</div>
            <div id='type'>TYPE : {state.resultData[state.finalResult].type}</div>
            <div id='description'>DESCRIPTION: {state.resultData[state.finalResult].description}</div>
            <form action={state.resultData[state.finalResult].shoppingUrl} method='get' target='_blank'>
              <input type='submit' value='TRY THIS COFFEE'/>
            </form>
          </div>
        )}
      </div>
    </>
  )
}

export default Result;