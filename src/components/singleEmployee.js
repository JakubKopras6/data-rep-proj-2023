import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export class SingleEmployee extends React.Component {

    // Constructor for the SingleEmployee class
    constructor() {
        super(); // Calls parent's constructor
        // Creates a binding for the event method deleteEmployee
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    // An event method that is used for deleting Employees
    deleteEmployee(e) {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/employees/' + this.props.employee._id)
            .then((response) => {
                // If successful, call Reload which refreshes data on the page
                this.props.Reload();
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Displays a single employee details
    render() {
        return (
            <div>
                {/* Creates a new Card that contains details about a particular employee */}
                <Card>
                    <Card.Header>Name: {this.props.employee.name}</Card.Header>
                    <Card.Body>EmpNumber: {this.props.employee.EmpNumber}</Card.Body>
                    <Card.Body>Email: {this.props.employee.email}</Card.Body>
                    <Card.Body>Department: {this.props.employee.department}</Card.Body>
                    <Card.Body>Salary: {this.props.employee.salary}</Card.Body>
                    {/* Sends the user to the editEmployee page upon clicking the edit employee button */}
                    <Link to={'/editEmployee/' + this.props.employee._id} className="btn btn-primary">Edit Employee</Link>
                    {/* When the delete employee button is clicked, the selected employee will get deleted */}
                    <Button variant="danger" onClick={this.deleteEmployee}>Delete Employee</Button>
                </Card>
                {/* Line breaks to space out the content */}
                <br />
                <br />
            </div>
        );
    }
}
