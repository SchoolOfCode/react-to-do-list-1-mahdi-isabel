import React, { useState } from 'react'
import "./App.css";

import Input from '../Input'
import List from '../List'
import ListItem from '../ListItem';

function App() {
  const [toDo, settoDo] = useState('');

  function addToList(todo){
    settoDo(toDo + ' ' + todo ); 
    console.log(toDo);
  }

  return <div className="App">
    <Input addToList={addToList}/>   
    
  </div>;
}

export default App;

//state list of to dos 
// behaviour:

      // add item to list- use .map 
      // remove item from list
      // render an Input and List

