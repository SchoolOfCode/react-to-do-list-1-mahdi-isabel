import React, { useState } from 'react'
import "./App.css";

import Input from '../Input'

function App() {
  const [toDo, settoDo] = useState('');

  return <div className="App">
    <Input text={toDo}/>



    
  </div>;
}

export default App;

//state list of to dos 
// behaviour:

      // add item to list
      // remove item from list
      // render an Input and List

