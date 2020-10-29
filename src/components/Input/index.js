import React, { useState } from 'react'


function Input(){
    const [text, setText] = useState('');

    function handleChange(event){
      setText(event.target.value)
      console.log(text);
      }

    return [    
        <input input={state.input} onChange={handleChange}/>,
        <button >Set To Do</button>     //onClick = {} add function
    ]}

export default Input; 



// state
    // text
// props
    // add function
// behaviour

// render an input field and a button - done
// change of input text will update state of this component
// button click will call the add function from props with value of input