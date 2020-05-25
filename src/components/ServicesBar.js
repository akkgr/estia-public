import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClear , AiOutlineBug } from "react-icons/ai";
import {FaGasPump , FaFireExtinguisher , FaRegBuilding} from 'react-icons/fa'
import {GiTakeMyMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {BsTools} from 'react-icons/bs'


export const ServicesBar = () => {
    return (
        <>
            <br/>
            <div className="container-fluid text-center">
                <h2 style={{color:"#ff4d4f"}}>Υπηρεσίες</h2>
                <h4 style={{color:"#ff4d4f"}}>Δείτε τι προσφέρουμε</h4>
                <br />
                <div className="row">
                    <div className="col-sm-3">
                    <GoChecklist style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/koinoxrista"}> <p style={{color:"#ff4d4f"}}>Έκδοση Κοινοχρήστων</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <AiOutlineBug  style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/disinfection"}> <p style={{color:"#ff4d4f"}}>Απολυμάνσεις</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <FaRegBuilding  style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/managebuilding"}> <p style={{color:"#ff4d4f"}}>Διαχειρίσεις Κτιρίων</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <AiOutlineClear style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/cleaning"}> <p style={{color:"#ff4d4f"}}>Καθαρισμοί</p></Link>
                    </div>
                    </div>
                    <br /><br />
                <div className="row">
                    <div className="col-sm-3">
                    <FaFireExtinguisher style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/extinguisher"}> <p style={{color:"#ff4d4f"}}>Πυροσβεστήρες</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <FaGasPump style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/heatingoil"}> <p style={{color:"#ff4d4f"}}>Πετρέλαιο θέρμανσης</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <BsTools style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/network"}><p style={{color:"#ff4d4f"}}>Συνεργάτες</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <GiTakeMyMoney style={{color:"#ff4d4f"}} size="75"/>
                    <Link to={"/services/heatingoil"}> <p style={{color:"#ff4d4f"}}>Πληρωμή λογαριασμών</p></Link>
                    </div>
                    </div>
             
             </div>
        </>
    )
}
