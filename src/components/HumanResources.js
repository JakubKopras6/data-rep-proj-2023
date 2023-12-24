import React from 'react';
import Button from 'react-bootstrap/Button';

// Component for displaying content on the Human Resources page
export class HumanResources extends React.Component {
    render() {
        return (
            <div className='HumanResources'>
                {/* Main heading */}
                <h1>Human Resources</h1>
                <br/>
                <br/>
                {/* Subheading */}
                <h3>Welcome to the HR department</h3>
                {/* Introduction text */}
                <p>Hello new employee, welcome to HR. Please take the time to fill out the form below (:</p>
                
                {/* Button for sign up */}
            
                <Button href='/signUp' size="lg" variant="outline-primary">Sign Up</Button>

                {/* Line breaks to space out the content on the page */}
                <br/> 
                <br/>
            </div>
        );
    }
}
