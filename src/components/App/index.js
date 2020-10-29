import React, { useState } from 'react'
import "./App.css";

import Input from '../Input'
import List from '../List'


function App() {
  const [toDo, settoDo] = useState([]);

  function addToList(todo){
    settoDo([...toDo, todo]); 
  }

  return <div className="App">
    <Input addToList={addToList}/>   
    <List toDoArray={toDo}/>
  </div>;
}

export default App;

//state list of to dos 
// behaviour:

      // add item to list- done
      // remove item from list
      // render an Input and List

          //<List toDo= Array.from{toDo}/>
      //    <List toDo= {toDo}/>
