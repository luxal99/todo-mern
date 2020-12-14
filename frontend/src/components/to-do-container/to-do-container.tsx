import React from "react";
import "./to-do-container.css"
import axios from "axios";
import {ToDoItem} from "../to-do-item/to-do-item";
import {AddItemDialog} from "./add-item-dialog/add-item-dialog";

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

    handleDelete = (toDoItemId: string) => {
        axios.delete(`http://localhost:8080/todo?id=${toDoItemId}`).then(() => {
            this.getTodos();
        })
    }

    render() {
        return (
            <div className="container to-do-container text-right">
                <div className="row">
                    <div className="col-sm-9 text-left"><h1>Create ToDo</h1></div>
                    <div className="col-sm text-right">
                        <AddItemDialog getTodos={this.getTodos.bind(this)}/>
                    </div>
                </div>
                <div className="container text-center">
                    {this.state.listOfToDos.map(todo =>
                        <ToDoItem key={todo.id} getTodos={this.getTodos.bind(this)} onDelete={this.handleDelete} toDoItem={todo}/>)}
                </div>
            </div>);
    }
}
