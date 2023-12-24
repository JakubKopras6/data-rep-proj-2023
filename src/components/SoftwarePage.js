import React from 'react';
import Button from 'react-bootstrap/Button';

export class   SoftwarePage extends React.Component {
    render() {
        return (
            <div className='SoftwarePage'>
                <h1>Software engineering</h1>
                
                   
                <br/>
                <br/>
                <h3>Software department</h3>
                <p>Department of software engineering please sign up with your employee details</p>
                
                <Button href='/signUp' size="lg" variant="outline-primary">Sign Up</Button>
                <br/> 
                <br/>
            </div>

        )
    }
}