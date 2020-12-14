import React from "react";
import "./to-do-container.css"
import axios from "axios";
import {ToDoItem} from "../to-do-item/to-do-item";

export class ToDoContainer extends React.Component {
    state = {
        listOfToDos: [{id: '', title: ''}],
        toDoInputValue: ''
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        axios.get("http://localhost:8080/todo").then(response => {
            this.setState({listOfToDos: response.data})
        })
    }

    handleChange = (event: any) => {
        this.setState({toDoInputValue: event.target.value});
    }


    handleSubmit = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:8080/todo', {
            title: this.state.toDoInputValue,
            category: {id: '5fd69fc3e394b31aec5ec9c5'}
        }).then(() => {
           this.getTodos();
        }).catch(()=>{
            return <div>Error</div>
        })
    }

    handleDelete = (toDoItemId: string) => {
        this.setState({listOfTodos: this.state.listOfToDos.filter(item => item.id !== toDoItemId)})
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm"><h1>Create ToDo</h1></div>
                    <div className="col-sm text-right">
                        <div className="input-group mb-3">
                            <input type="text" onChange={this.handleChange} className="form-control"/>
                        </div>
                        <button onClick={this.handleSubmit} className="btn btn-success m-2">
                            Add
                        </button>
                    </div>

                    <div>

                    </div>
                </div>
                <div className="container text-center">
                    {this.state.listOfToDos.map(todo => <ToDoItem key={todo.id} toDoItem={todo}/>)}
                </div>
            </div>);
    }
}
