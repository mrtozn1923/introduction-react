import React,{ useState } from 'react';

function AddTodo({addItem}){
    const [error,setError]=useState('');

    const onFormSubmit=(e)=>{
        e.preventDefault();
        const item=e.target.elements.todoText.value.trim();
        const error=addItem(item);
        setError(error);
        e.target.elements.todoText.value='';
    }
    return(
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="todoText" />
                <button type="submit">Add Item</button>
            </form>                
        </div>
    );
}

export default AddTodo;