import React from "react";
import { Employee } from "./Employee";
import axios from "axios";

export class ListOfEmployees extends React.Component {

    // Constructor for ListOfEmployees class
    constructor() {
        super(); // Call parent's constructor
        this.Reload = this.Reload.bind(this); // Creates binding for Reload
    }

    // Refreshes data
    Reload() {
        this.componentDidMount();
    }

    // Lifecycle hook for the start of a component
    // Sends a GET request to the server and gets back a list of employees
    // Updates the employees object with the resulting data
    componentDidMount() {
        axios.get('http://localhost:4000/api/employees')
            .then((result) => {
                this.setState({ employees: result.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // A state object that stores an array of employees
    state = {
        employees: []
    };

    // Displays the list of employees
    render() {
        return (
            <div>
                {/* Heading for the list of registered team members' contact details */}
                <h3>Registered team members' contact details</h3>
                {/* Render the Employee component with the employees array and Reload function as props */}
                <Employee employees={this.state.employees} Reload={this.Reload}></Employee>
            </div>
        );
    }
}
