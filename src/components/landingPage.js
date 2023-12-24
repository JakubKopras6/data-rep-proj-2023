import React from 'react';
import Nav from 'react-bootstrap/Nav';

//display content on the homepage
export class LandingPage extends React.Component {
    render() {
        return (
            <div className='landingPage'>
                <h1>Registration Portal</h1>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/random-logo-png-transparent.png"
                    alt="Homepage image" width="800" height="500"></img>
                <br/>
                <br/>
                <p>Select department</p>
                
              
                <Nav className="justify-content-center" style={{backgroundColor: 'green', border: '1px solid #ccc', margin: '13px'}}>
                    <Nav.Link style={{ color: 'black' }} href="/HumanResources">HR</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/film">Legal</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/SoftwarePage">Software</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} href="/ManagmentPage">Managment</Nav.Link>
                </Nav>
            </div>

        )
    }
}