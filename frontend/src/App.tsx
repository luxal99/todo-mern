import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/navbar/navbar";
import {ToDoContainer} from "./components/to-do-container/to-do-container";

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <ToDoContainer/>
            </React.Fragment>
        );
    }
}

export default App;
