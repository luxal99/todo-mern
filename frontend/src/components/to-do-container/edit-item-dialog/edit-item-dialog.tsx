import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {ToDo} from "../../../models/ToDo";

type EditItemDialogProps = {
    getTodos?: any;
    toDoForUpdate?: ToDo
}

export class EditItemDialog extends React.Component<EditItemDialogProps> {

    state = {
        open: false,
        listOfToDos: [{id: '', title: ''}],
        toDoInputValue: '',
        listOfCategories: [{id: '', title: ''}],
        selectedValue: ''
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
        this.props.getTodos();
    };

    componentDidMount() {
        axios.get('http://localhost:8080/category').then(response => {
            this.setState({listOfCategories: response.data})
        })
    }

    handleChange = (event: any) => {
        this.setState({toDoInputValue: event.target.value});
    }

    handleSelectChange = (event: any) => {
        this.setState({selectedValue: event.target.value})
    }


    handleSubmit = async (event: any) => {
        event.preventDefault();
        await axios.post('http://localhost:8080/todo', {
            title: this.state.toDoInputValue,
            category: {title: this.state.selectedValue}
        }).then(() => {
            this.handleClose()
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" className="default-btn" onClick={this.handleClickOpen}>
                    Edit
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add ToDo</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Input some text to add new ToDo item
                        </DialogContentText>

                        <FormControl>
                            <TextField onChange={this.handleChange}
                                       autoFocus
                                       id="name"
                                       type="text"
                                       label="To Do title"
                                       fullWidth
                                       value={this.props.toDoForUpdate?.title}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.selectedValue}
                                onChange={this.handleSelectChange}

                            >

                                {this.state.listOfCategories.map(category =>
                                    <MenuItem key={category.id} value={category.title}>{category.title}</MenuItem>)}
                            </Select>
                        </FormControl>
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
