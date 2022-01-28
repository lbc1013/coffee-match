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
        <div id='coffeeCard'>
          <div id='liberica'>
            <img id ='mainIcon' src='https://cdn-icons-png.flaticon.com/512/712/712236.png'></img>
            <div id='mainIconName'>Liberica</div>
            <div id='mainIconDescription'>Liberica is definitely one of the sweetest coffee on earth. Absolutely flavorful, thick jammy juiciness and intense sweetness!</div>
          </div>
          <div id='robusta'>
            <img id='mainIcon' src='https://cdn-icons-png.flaticon.com/512/751/751621.png'></img>
            <div id='mainIconName'>Robusta</div>
            <div id='mainIconDescription'>Robusta contains 2.5% more caffeine than other types, has a pretty strong taste.</div>
          </div>
          <div id='arabica'>
            <img id='mainIcon' src='https://cdn-icons.flaticon.com/png/512/3105/premium/3105123.png?token=exp=1643339834~hmac=136bb89a69847f50d6fce402669b331a'></img>
            <div id='mainIconName'>Arabica</div>
            <div id='mainIconDescription'>Arabica is aromatic and delicious with a smoother taste. 80% of the coffee in the world is produced from these types of beans.</div>
          </div>
        </div>
      </div>
        <div>There are <b>different types </b>of coffee beans from <b>different countries</b> and their characteristics!</div>
      <div id='startMessage'>'With a short quiz, you will find the coffees that will be beautiful to you.'</div>
      <button onClick={handleStart}>Start</button>
    </div>
  )
}

export default Main;