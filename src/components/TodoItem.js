import React from 'react'

const TodoItem=({item,deleteItem})=>{
    return(
        <li>
            {item}
            <button onClick={()=>{deleteItem(item)}}>x</button>
        </li>
    );
}

export default TodoItem;