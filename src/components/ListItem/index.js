import React, { useState } from 'react'


function ListItem({text, index, deleteItem}){
    return <li>{text} <button onClick={()=>{deleteItem(index)}}>Delette Item</button>  </li>
}

export default ListItem; 