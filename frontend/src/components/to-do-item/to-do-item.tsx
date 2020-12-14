import React from "react";
import {Button} from '@material-ui/core';
import './to-do-item.css';
import {ToDo} from "../../models/ToDo";
import {EditItemDialog} from "../to-do-container/edit-item-dialog/edit-item-dialog";

type ToDoItemProps = {
    toDoItem: ToDo;
    onDelete: any;
    getTodos:any;
}

export class ToDoItem extends React.Component<ToDoItemProps> {
    render() {
        return (
            <div className="row">
                <div className="col-sm-5 text-left">
                    <span>Title</span>
                    <h3>{this.props.toDoItem.title}</h3>
                </div>
                <div className="col-sm-5 text-left">
                    <span className="small-text">Category</span>
                    <h3>{this.props.toDoItem.idCategory?.title}</h3>
                </div>
                <div className="col-sm-2 text-right">
                    <EditItemDialog toDoForUpdate={this.props.toDoItem} getTodos={this.props.getTodos}>Edit</EditItemDialog>
                    <Button variant="contained" className="m-2 delete-btn"
                            onClick={() => this.props.onDelete(this.props.toDoItem.id)}>Delete</Button>
                </div>
            </div>
        );
    }
}
