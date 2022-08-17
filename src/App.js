import React from 'react';
import './App.css';
import Activity from './components/Activity'

function App() {
  return (
    <div className="App">
      <div className='intro'>  
        <h1>Hey Kids! Bored?</h1>
        <h3>Here's a fun thing to do:</h3>
      </div>
      <Activity/>
    </div>
  );
}

export default App;
