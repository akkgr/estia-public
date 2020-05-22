import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav , NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router , NavLink } from "react-router-dom";
import Routes from './Routes';
import { HeaderSite } from './layout/common/HeaderSite';

function App() {
  return (
    <div className="App">
      <HeaderSite />
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={NavLink} to="/">Αρχική</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" as={NavLink} to="/aboutus">Εταιρεία</Nav.Link>
              <NavDropdown title="Υπηρεσίες" id="collasible-nav-dropdown" as={NavLink} to="/services">
                <NavDropdown.Item  >Έκδοση κοινοχρήστων</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/buildingadmin">Διαχειρίσεις κτιρίων</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/cleaning">Καθαρισμοί</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/disinfection">Απολύμανση - Απεντόμωση - Μυοκτονία</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/extinguisher">Πυροσβεστήρες</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/heatingoil">Πετρέλαιο Θέρμανσης – Καθαρισμοί Δεξαμενών</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/network">Δίκτυο Συνεργατών</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/payment">Πληρωμή Λογαριασμών</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link  href="#action/3.1">Έκδοση</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Επικοινωνία</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Pay Now</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                MyEstia
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{ marginLeft: '10%' , marginRight: '10%'}}>
           <Routes />
        </div>
      </Router>
         
     
    </div>
  );
}

export default App;
