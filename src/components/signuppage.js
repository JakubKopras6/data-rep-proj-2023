import React from "react";
import axios from "axios";

export class SignUp extends React.Component {

    // Class constructor binds event handlers to the component
    // and sets up the component's state
    constructor() {
        super();
        // Binding event handlers to the component
        this.dealWithSubmit = this.dealWithSubmit.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmpNumber = this.onChangeEmpNumber.bind(this);
        this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
        this.onChangeEmployeeDepartment = this.onChangeEmployeeDepartment.bind(this);
        this.onChangeEmployeeSalary = this.onChangeEmployeeSalary.bind(this);

        // Initializing the component's state
        this.state = {
            name: '',
            EmpNumber: '',
            email: '',
            Department: '',
            Salary: ''
        };
    }

    // Sends a post request to the server to create a new employee with the data entered in the form.
    // Also checks for any empty fields in the form, and if there are any, an alert is sent to the user.
    dealWithSubmit(event) {
        if (this.state.name === '' || this.state.EmpNumber === ''
            || this.state.email === '' || this.state.Department === ''
            || this.state.Salary === '') {
            alert("Failed to Sign Up. Make sure all fields are not empty");
            return;
        }

        event.preventDefault();
        console.log(`Button has been clicked
        ${this.state.name},
        ${this.state.EmpNumber},
        ${this.state.email},
        ${this.state.Department},
        ${this.state.Salary},
        `);

        const employee = {
            name: this.state.name,
            EmpNumber: this.state.EmpNumber,
            email: this.state.email,
            Department: this.state.Department,
            Salary: this.state.Salary,
        };

        // Making a POST request to create a new employee
        axios.post('http://localhost:4000/api/employees', employee)
            .then(response => {
                // Handle the response if needed
            })
            .catch(error => {
                console.error(error);
            });

        // Resetting the state after form submission
        this.setState({
            name: '',
            EmpNumber: '',
            email: '',
            Department: '',
            Salary: '',
        });
    }

    // Methods to update the state of the component with the value
    // of an input element in the component's form.

    onChangeEmployeeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onChangeEmpNumber(event) {
        this.setState({
            EmpNumber: event.target.value
        });
    }

    onChangeEmployeeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    onChangeEmployeeDepartment(event) {
        this.setState({
            Department: event.target.value
        });
    }

    onChangeEmployeeSalary(event) {
        this.setState({
            Salary: event.target.value
        });
    }

    // Displays the form
    render() {
        return (
            <div>
                {/* Heading for the form */}
                <h3>Please complete the form below</h3>
                <br/>
                {/* Form */}
                <form onSubmit={this.dealWithSubmit}>

                    {/* Name */}
                    <div className="form-group">
                        <label>Employee name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeEmployeeName}
                        />
                    </div>

                    {/* Employee number */}
                    <div className="form-group">
                        <label>Employee number: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.EmpNumber}
                            onChange={this.onChangeEmpNumber}
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label>Employee Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmployeeEmail}
                        />
                    </div>

                    {/* Department */}
                    <div className="form-group">
                        <label>Employee Department: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Department}
                            onChange={this.onChangeEmployeeDepartment}
                        />
                    </div>

                    {/* Salary */}
                    <div className="form-group">
                        <label>Employee salary: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Salary}
                            onChange={this.onChangeEmployeeSalary}
                        />
                    </div>
                    <br />
                    {/* Submit button */}
                    <input className="btn btn-outline-primary btn-lg" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
