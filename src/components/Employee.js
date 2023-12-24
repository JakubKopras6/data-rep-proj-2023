import React from "react";
import { SingleEmployee } from "./singleEmployee";

export class Employee extends React.Component {
  render() {
    // Destructuring the 'employee' prop from props
    const { employee } = this.props;

    // Check if employee is an array before mapping
    if (!Array.isArray(employee)) {
      // Handle the case where employee is not an array
      // For example, you could return a loading message or an empty div
      return <div>No employee data available</div>;
    }

    // Map through each employee in the array and render SingleEmployee component
    return employee.map((employee) => (
      <SingleEmployee
        employee={employee} // Pass individual employee data as a prop
        key={employee._id} // Use a unique key for each employee
        Reload={this.props.Reload} // Pass the Reload function as a prop
      ></SingleEmployee>
    ));
  }
}
