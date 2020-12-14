import React from "react";
import { Button } from '@material-ui/core';
import './to-do-item.css';

type ToDoItemProps = {
    toDoItem: any;
    onDelete:any;
}

export class ToDoItem extends React.Component<ToDoItemProps> {

    render() {
        return (
            <div className="row">
                <div className="col-sm-9 text-left">
                    <h3>{this.props.toDoItem.title}</h3>
                </div>
                <div className="col-sm text-right">
                    <Button variant="contained" className="m-2 delete-btn" onClick={()=>this.props.onDelete(this.props.toDoItem.id)}>Delete</Button>
                </div>
            </div>
        );
    }
}
