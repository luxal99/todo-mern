import React from "react";
import "./to-do-container.css"
import axios from "axios";
import {ToDoItem} from "../to-do-item/to-do-item";

export class ToDoContainer extends React.Component {
    state = {
        listOfToDos: [{id: '', title: ''}]
    }

    componentDidMount() {
        axios.get("http://localhost:8080/todo").then(response => {
            this.setState({listOfToDos: response.data})
        })

    }

    render() {

        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm"><h1>Create ToDo</h1></div>
                    <div className="col-sm text-right">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control"/>
                        </div>
                        <button className="btn btn-success m-2">
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
