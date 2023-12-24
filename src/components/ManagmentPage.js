import React from 'react';
import Button from 'react-bootstrap/Button';

export class ManagmentPage extends React.Component {
    render() {
        return (
            <div className='ManagmentPage'>
                <h1>Managment</h1>
                <br/>
                <br/>
                <h3>Welcome to managment</h3>
                <p>If you have been offered a position as a Random INC manager please fill in the form below and confirm a few
                    details.
                </p>
                <Button href='/signUp' size="lg" variant="outline-primary">Sign Up</Button>
                <br/> 
                <br/>
            </div>

        )
    }
}