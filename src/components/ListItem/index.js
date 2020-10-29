
function ListItem(props){
    console.log(props);
    const {text, id, index, deleteItem} = props
    return <li key={id}>{text} <button onClick={()=>{deleteItem(index)}}>Delete Item</button>  </li>
}

export default ListItem; 