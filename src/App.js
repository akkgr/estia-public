import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav , NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router , NavLink, Link } from "react-router-dom";
import Routes from './Routes';
import { HeaderSite } from './layout/common/HeaderSite';
import './scss/styles.scss'

function App() {
  return (
    <div className="App">
      {/* <HeaderSite /> */}
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top " id="mainNav" style={{color:"#ff4d4f" , backgroundColor:'aliceblue'}}>
            <div className="container">
                <a className="navbar-brand " href="#page-top" style={{color:'#f4623a'}}>ΕΣΤΙΑ City Services</a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><p class="nav-link " ><Link to={"/"}>Αρχική</Link></p></li>
                        <li className="nav-item"><p class="nav-link " ><Link to={"/aboutus"}>Εταιρεία</Link></p></li>
                        <li className="nav-item dropdown"><p class="nav-link " ><Link to={"/services"}>Υπηρεσίες</Link></p></li>
                       
                        <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" style={{color:'#f4623a'}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        
                        </p>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <p class="dropdown-item"><Link to={"/services/koinoxrista"} >Έκδοση κοινοχρήστων</Link></p>
                          <p class="dropdown-item"><Link to={"/services/buildingadmin"}>Διαχειρίσεις κτιρίων</Link></p>
                          <p class="dropdown-item"><Link to={"/services/cleaning"}>Καθαρισμοί</Link></p>
                          <p class="dropdown-item"><Link to={"/services/disinfection"}>Απολύμανση - Απεντόμωση - Μυοκτονία</Link></p>
                          <p class="dropdown-item"><Link to={"/services/extinguisher"}>Πυροσβεστήρες</Link></p>
                          <p class="dropdown-item"><Link to={"/services/heatingoil"}>Πετρέλαιο Θέρμανσης – Καθαρισμοί Δεξαμενών</Link></p>
                          <p class="dropdown-item"><Link to={"/services/network"}>Δίκτυο Συνεργατών</Link></p>
                          <p class="dropdown-item"><Link to={"/services/payment"}>Πληρωμή Λογαριασμών</Link></p>
                        </div>
                      </li>
                        <li class="nav-item"><p class="nav-link " ><Link to={"/contact"}>Έκδοση</Link></p></li>
                        <li class="nav-item"><p class="nav-link " ><Link to={"/contact"}> Pay Now</Link></p></li>
                        <li class="nav-item"><p class="nav-link " ><Link to={"/contact"}> MyEstia</Link></p></li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <div styles={{paddingTop: '5%'}}>
           <Routes />
        </div>
        {/* <div style={{ marginLeft: '10%' , marginRight: '10%'}}> */}

          
        {/* </div> */}
        
         
      
      <footer class="bg-light py-5">
            <div class="container"><div class="small text-center text-muted">Copyright © 2020 - GG noob<br/><Link to={"/tos"}> Όροι χρήσης</Link></div></div>
        </footer>
     </Router>
    </div>
  );
}

export default App;
