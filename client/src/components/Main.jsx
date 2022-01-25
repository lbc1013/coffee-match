import React, { useState, useEffect } from 'react';

const Main = ( {state, updateState} ) => {

  const handleStart = () => {
    updateState((preValues) => {
      return {...preValues, status: 1}
    });

  }

  return (
    <div id='mainPage'>
      <div id='title'>Coffee-Amazon</div>
      <img src='../asset/mainImage1.jpeg'></img>
      <div id='subTitle'>'Know thyself and you shall know the coffee taste.' - Socrates</div>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Main;