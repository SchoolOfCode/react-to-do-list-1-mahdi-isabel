import React, { useState } from 'react'

import ListItem from '../ListItem';

function List({toDoArray, deleteItem}){
  console.log(toDoArray);
    return [
        <ul>
        {toDoArray.map((toDo, index)=>
     <ListItem text={toDo} index = {index} deleteItem = {deleteItem} />
     ) }
        </ul>
    ]
}

export default List; 



/*
props

array of to dos
delete function

behaviour

render an array of ListItems in a ul

{
    const [text, setText] = useState('');

    function handleChange(event){
      setText(event.target.value)
      console.log(text);
      }
    

    return [    
        <input onChange={event => handleChange(event)} />,
        <button onClick={addToList(text)}>Set To Do</button>     
    ]}

*/