import React, { useState } from 'react'


function Input(){
    const [text, setText] = useState('');

    function handleChange(input){
      setText(input.Value)
      console.log(text);
      }

    return [    
        <input />,
        <button onClick={handleChange}>Set To Do</button>
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