import React, { useState, useEffect } from 'react';
import Main from './Main.jsx';
import Questions from './Questions.jsx';
import Result from './Result.jsx';
import axios from 'axios';

const App = () => {
  const [ state, updateState ] = useState({
    status : undefined,
    resultData : null
  });

  useEffect (() => {
    axios.get('/coffee')
      .then ((res) => {
        const resultForUser = res.data;
        if (state.resultData === null) {
          updateState((preValues) => {
            return {...preValues, resultData: resultForUser};
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