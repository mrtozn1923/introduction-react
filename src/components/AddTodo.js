import React from 'react'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.state={
            error:''
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const item=e.target.elements.todoText.value.trim();
        const error=this.props.addItem(item);
        this.setState({
            error:error
        })
        e.target.elements.todoText.value='';
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="todoText" />
                    <button type="submit">Add Item</button>
                </form>                
            </div>
        );
    }
}

export default AddTodo;