import './App.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

//Imports navbar functionality into app
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';

//Import components
import { LandingPage} from './components/landingPage';
import { HumanResources } from './components/HumanResources';
import { SoftwarePage } from './components/SoftwarePage';
import { ManagmentPage } from './components/ManagmentPage';
import { LegalPage } from './components/LegalPage';
import { SignUp } from './components/signuppage';
import { ListOfEmployees } from './components/listOfEmployees';
import { EditEmployees } from './components/editEmployees';


//Imports routing into app
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function MyApp() {
  return (
    <div className="App">
      <Router>
        {/* Resource used
        https://react-bootstrap.netlify.app/docs/components/navbar/
        */}
        <Navbar collapseOnSelect bg="success" variant="dark">
          <Container>
            <Navbar.Brand href="/">Random INC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <NavDropdown title="Departments" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/HumanResources">HR</NavDropdown.Item>
                  <NavDropdown.Item href="/LegalPage">Legal</NavDropdown.Item>
                  <NavDropdown.Item href="/SoftwarePage">Software</NavDropdown.Item>
                  <NavDropdown.Item href="/ManagmentPage">Managment</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/signUp">Register</Nav.Link>
                <Nav.Link href="/listOfEmployees">Employees</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/*Used for displaying specific content depending on the path*/}
        <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage></LandingPage>}></Route>
            <Route path='/HumanResources' element={<HumanResources></HumanResources>}></Route>
            <Route path='/LegalPage' element={<LegalPage></LegalPage>}></Route>
            <Route path='/SoftwarePage' element={<SoftwarePage></SoftwarePage>}></Route>
            <Route path='/ManagmentPage' element={<ManagmentPage></ManagmentPage>}></Route>
            <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
            <Route path='/listOfEmployees' element={<ListOfEmployees></ListOfEmployees>}></Route>
            <Route path='/editEmployees/:id' element={<EditEmployees></EditEmployees>}></Route>
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default MyApp;