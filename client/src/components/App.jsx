import React, { useState, useEffect } from 'react';
import Main from './Main.jsx';
import Questions from './Questions.jsx';
import Result from './Result.jsx';

const App = () => {
  const [ state, updateState ] = useState({
    status : undefined
  });

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