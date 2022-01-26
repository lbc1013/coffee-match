import React, { useState, useEffect } from 'react';

const Main = ( {state, updateState} ) => {

  const handleStart = () => {
    updateState((preValues) => {
      return {...preValues, status: 0}
    });
  }

  return (
    <div id='mainPage'>
      <div id='title'>
        <p>COFFEE MATCH</p>
      </div>
      <div id='mainCoffeeBean'>
        <div id='subTitle'>WELCOME TO COFFEE MATCH</div>
        <div id='mainType'>There are 3 main types of coffee beans.</div>
        <b>Liberica</b>: Liberica is a low yield type of coffee compared to Arabica and Robusta.<br></br>
        <b>Robusta</b>: This type of coffee, which contains 2.5% more caffeine than other types, has a pretty strong taste.<br></br>
        <b>Arabica</b>: This coffee bean with low caffeine and a smoother taste is aromatic and delicious. 80% of the coffee in the world is produced from these types of beans.<br></br>
        <br></br>
        There are different types of coffee beans from different countries and their characteristics!
      </div>
      <div id='startMessage'>'With a short quiz, you will find the coffees that will be beautiful to you.'</div>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Main;