import React from "react" 


function Input({handleChange}){
    return [    
        <input />,
        <button onClick={handleChange}>Set To Do</button>
    ]}

export default Input; 