import React, { useState, useEffect } from 'react';

const Questions = ( {state, updateState} ) => {

  return (
    <div id='questionSection'>
      <div id='title'>Coffee-Amazon</div>
      <div id='questionBox'>
        <div id='question'></div>
        <div id='answer'></div>
      </div>
    </div>
  )
}

export default Questions;