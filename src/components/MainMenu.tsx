import React from 'react'
import { Link } from "react-router-dom";

export const MainMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top " id="mainNav" style={{color:"#ff4d4f" , backgroundColor:'aliceblue'}}>
            <div className="container">
                <a className="navbar-brand " href="#page-top" style={{color:'#f4623a'}}>ΕΣΤΙΑ City Services</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item"><p className="nav-link " ><Link to={"/"}>Αρχική</Link></p></li>
                        <li className="nav-item"><p className="nav-link " ><Link to={"/aboutus"}>Εταιρεία</Link></p></li>
                        <li className="nav-item dropdown"><p className="nav-link " ><Link to={"/services"}>Υπηρεσίες</Link></p></li>
                        <li className="nav-item dropdown">
                        <p className="nav-link dropdown-toggle" style={{color:'#f4623a'}}  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <p className="dropdown-item"><Link to={"/services/koinoxrista"} >Έκδοση κοινοχρήστων</Link></p>
                          <p className="dropdown-item"><Link to={"/services/buildingadmin"}>Διαχειρίσεις κτιρίων</Link></p>
                          <p className="dropdown-item"><Link to={"/services/cleaning"}>Καθαρισμοί</Link></p>
                          <p className="dropdown-item"><Link to={"/services/disinfection"}>Απολύμανση - Απεντόμωση - Μυοκτονία</Link></p>
                          <p className="dropdown-item"><Link to={"/services/extinguisher"}>Πυροσβεστήρες</Link></p>
                          <p className="dropdown-item"><Link to={"/services/heatingoil"}>Πετρέλαιο Θέρμανσης – Καθαρισμοί Δεξαμενών</Link></p>
                          <p className="dropdown-item"><Link to={"/services/network"}>Δίκτυο Συνεργατών</Link></p>
                          <p className="dropdown-item"><Link to={"/services/payment"}>Πληρωμή Λογαριασμών</Link></p>
                        </div>
                      </li>
                        <li className="nav-item"><p className="nav-link " ><Link to={"/contact"}>Έκδοση</Link></p></li>
                        <li className="nav-item"><p className="nav-link " ><Link to={"/contact"}> Pay Now</Link></p></li>
                        <li className="nav-item"><p className="nav-link " ><Link to={"/contact"}> MyEstia</Link></p></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
