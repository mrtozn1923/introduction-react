import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

function TodoApp(){
    const [items,setItems]=useState([]);
    
    useEffect(() => {
      //componentDidMount()
      const json=localStorage.getItem('items');
      const items=JSON.parse(json);

      if(items){          
          setItems([...items])
      }
    }, [])

    useEffect(() => {
        //componentDidUpdate()      
        const json=JSON.stringify(items);
        localStorage.setItem('items',json);
    }, [items])
    
    const clearItems=()=>{
        setItems([]);
    }
    const addItem=(item)=>{
        if(!item){
            return "eklemek istediğiniz elemanı girin";
        }else if(items.indexOf(item)>-1){
            return "aynı elemanı ekleyemezsiniz."
        }
        setItems([...items,item]);       
    }
    const deleteItem=(item)=>{
        const arr=items.filter((i)=>{
            return item!=i
        })
        setItems([...arr])
    }
    const app={
        title:"Todo Application",
        description:"Lorem, ipsum dolor."
    }
    return(
        <div>
            <Header title={app.title} description={app.description}/>
            <AddTodo addItem={addItem}/>
            <TodoList items={items} deleteItem={deleteItem} clearItems={clearItems}/>
        </div>
    );
}

ReactDOM.render(<TodoApp />,document.getElementById('root'));