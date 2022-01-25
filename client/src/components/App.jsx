import React, { useState, useEffect } from 'react';
import Main from './Main.jsx';
import Questions from './Questions.jsx';
import Result from './Result.jsx';

const App = () => {
  const [ state, updateState ] = useState({
    status : 0
  });

  return (
    <>
      {state.status === 0 && (
        <Main state={state} updateState={updateState}/>
      )}

      {(1 <= state.status && state.status < 6) && (
        <Questions state={state} updateState={updateState}/>
      )}

      {(6 <= state.status) && (
        <Result state={state} updateState={updateState}/>
      )}
    </>
  )
}

export default App;