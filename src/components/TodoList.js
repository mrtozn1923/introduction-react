import React from 'react'
import TodoItem from './TodoItem';

const TodoList=({items,clearItems,deleteItem})=>{
    return(
        <div>
            <ul>
                {
                    items.map((item,index)=>
                        <TodoItem deleteItem={deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            <p>
                {
                    items.length>0?<button onClick={clearItems}>Clear Items</button>:""
                }                                
            </p>
        </div>
    )
}

export default TodoList;