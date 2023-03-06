import React, { useState } from 'react';
import "style.css";

function App() {
  const [joke, setJoke] = useState('');

  async function fetchJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setJoke(`${data.setup} ${data.punchline}`);
  }

  return (
    <div className="container">
      <h1>Joke App</h1>
      <p className="joke">{joke || 'Click the button to get a new joke!'}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
}

export default App;
