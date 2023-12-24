import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function EditEmployees(props) {

    // Hook that allows access to parameters in a URL, in this case, the employee id
    let { id } = useParams();

    // Set of hooks that store values for each form field
    const [name, setName] = useState('');
    const [EmpNumber, setEmpNumber] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');

    // Hook used to redirect the user to a different page
    const navigate = useNavigate();

    // Hook that makes an API call to retrieve employee data when the component is rendered
    useEffect(() => {
        axios.get(`http://localhost:4000/api/employees/${id}`)
            .then((response) => {
                // Set form fields with data from the API response
                setName(response.data.name);
                setEmpNumber(response.data.EmpNumber);
                setEmail(response.data.email);
                setDepartment(response.data.department);
                setSalary(response.data.salary);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, [id]); // Dependency array to ensure the effect runs only when 'id' changes

    // Handles form submission, validates input, and updates employee info
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (name === '' || EmpNumber === '' || email === '' || department === '' || salary === '') {
            alert("Error. Make sure all fields are filled in");
            return;
        }

        const updatedEmployee = {
            id: id,
            name: name,
            EmpNumber: EmpNumber,
            email: email,
            department: department, 
            salary: salary, 
        };

        axios.put(`http://localhost:4000/api/employees/${id}`, updatedEmployee)
            .then((res) => {
                console.log(res.data);
                navigate('/listOfEmployees');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // Renders the edit employee form to the user
    return (
        <div>
            <h2>Please edit employee details</h2>
            <br />
            <form onSubmit={handleFormSubmit}>

                {/* Name */}
                <div className="form-group">
                    <label>Employee Name: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Employee number */}
                <div className="form-group">
                    <label>Employee number: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={EmpNumber}
                        onChange={(e) => setEmpNumber(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label>Employee Email: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Department */}
                <div className="form-group">
                    <label>Employee department: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>

                {/* Salary */}
                <div className="form-group">
                    <label>Employee salary: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="Edit Employees" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
