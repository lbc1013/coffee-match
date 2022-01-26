import React, { useState, useEffect } from 'react';
import Main from './Main.jsx';
import Questions from './Questions.jsx';
import Result from './Result.jsx';
import axios from 'axios';
import questiondb from '/database/questionData';

const App = () => {
  const [ state, updateState ] = useState({
    status : undefined,
    questionData: {},
    resultData: null,
    userAnswer: '',
    finalResult: null
  });

  useEffect (() => {
    axios.get('/coffee')
      .then ((res) => {
        if (state.resultData === null) {
          updateState((preValues) => {
            return {...preValues,
              resultData: res.data,
              questionData: questiondb.questionData};
          });
        }
      })
  })

  return (
    <>
      {state.status === undefined && (
        <Main state={state} updateState={updateState}/>
      )}

      {(0 <= state.status && state.status < 5) && (
        <Questions state={state} updateState={updateState}/>
      )}

      {(5 <= state.status) && (
        <Result state={state} updateState={updateState}/>
      )}
    </>
  )
}

export default App;