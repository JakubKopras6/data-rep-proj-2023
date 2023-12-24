import React from 'react';
import Button from 'react-bootstrap/Button';

export class LegalPage extends React.Component {
    render() {
        return (
            <div className='LegalPage'>
                <h1>Legal</h1>
                <br/>
                <br/>
                <h3>Legal department</h3>
                <p>Failure to complete and submit the required form may result in adverse consequences, 
                    as permitted by applicable laws and regulations. It is your responsibility to ensure the accurate and 
                    timely completion of the form, and any failure to do so may lead to legal and/or administrative actions 
                    in accordance with the relevant provisions.</p>
                    
                <Button href='/signUp' size="lg" variant="outline-primary">Sign Up</Button>
      
                <br/> 
                <br/>
            </div>

        )
    }
}