import React from "react";

type ToDoItemProps = {
    toDoItem: any
}

export class ToDoItem extends React.Component<ToDoItemProps> {

    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <h3>{this.props.toDoItem.title}</h3>
                </div>
                <div className="col-sm">
                    <button className="btn btn-danger m-2">Delete</button>
                </div>
            </div>
        );
    }
}
