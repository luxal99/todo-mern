import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './add-item-dialog.css'
import axios from "axios";

type AddItemDialogProps = {
    getTodos: any;
}

export class AddItemDialog extends React.Component<AddItemDialogProps> {

    state = {
        open: false,
        listOfToDos: [{id: '', title: ''}],
        toDoInputValue: ''
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.getTodos();
    };


    handleChange = (event: any) => {
        this.setState({toDoInputValue: event.target.value});
    }


    handleSubmit = async (event: any) => {
        event.preventDefault();
        await axios.post('http://localhost:8080/todo', {
            title: this.state.toDoInputValue,
            category: {id: '5fd69fc3e394b31aec5ec9c5'}
        }).then(() => {
            this.handleClose()
        })
    }

    render() {
        return (
            <div >
                <Button variant="contained" className="default-btn" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send updates
                            occasionally.
                        </DialogContentText>
                        <TextField onChange={this.handleChange}
                                   autoFocus
                                   margin="dense"
                                   id="name"
                                   label="Email Address"
                                   type="email"
                                   fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
