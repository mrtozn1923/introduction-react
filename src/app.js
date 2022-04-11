import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';

class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.clearItems=this.clearItems.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.state={            
            items:[]
        }
    }
    componentDidMount(){
        const json=localStorage.getItem('items');
        const items=JSON.parse(json);

        if(items){
            this.setState({
                items:items
            })
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.items.length !== this.state.items.length){
            
            const json=JSON.stringify(this.state.items);
            localStorage.setItem('items',json);
        }
    }
    clearItems(){
        this.setState({
            items:[]
        });
    }
    addItem(item){

        if(!item){
            return "eklemek istediğiniz elemanı girin";
        }else if(this.state.items.indexOf(item)>-1){
            return "aynı elemanı ekleyemezsiniz."
        }

        this.setState((prevState)=>{
            return {items:prevState.items.concat(item)}
        })
    }
    deleteItem(item){
        this.setState((prevState)=>{
            const arr=prevState.items.filter((i)=>{
                return item!=i
            })
            return{items:arr}
        })
    }
    render(){
        const app={
            title:"Todo Application",
            description:"Lorem, ipsum dolor."
        }
        return(
            <div>
                <Header title={app.title} description={app.description}/>
                <AddTodo addItem={this.addItem}/>
                <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
            </div>
        );
    }
}

ReactDOM.render(<TodoApp />,document.getElementById('root'));