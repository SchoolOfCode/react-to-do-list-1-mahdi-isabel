import React, { useState } from 'react'
import "./App.css";

import Input from '../Input'

function App() {
  const [text, setText] = useState('');

  function handleChange(event){
    setText(event.target.Value)
    }

  return <div className="App">
    <Input text={text} setText={handleChange}/>
    
  </div>;
}

export default App;


// have our input component with properties text input and add to list button

// have our list component with properties array of todos and delete function
      //within our list component we'll have our list item component 