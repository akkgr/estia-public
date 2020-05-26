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
                <h2 style={{color:"#f4623a"}}>Υπηρεσίες</h2>
                <h4 style={{color:"#f4623a"}}>Δείτε τι προσφέρουμε</h4>
                <br />
                <div className="row">
                    <div className="col-sm-3">
                    <GoChecklist style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/koinoxrista"}> <p style={{color:"#f4623a"}}>Έκδοση Κοινοχρήστων</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <AiOutlineBug  style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/disinfection"}> <p style={{color:"#f4623a"}}>Απολυμάνσεις</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <FaRegBuilding  style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/managebuilding"}> <p style={{color:"#f4623a"}}>Διαχειρίσεις Κτιρίων</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <AiOutlineClear style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/cleaning"}> <p style={{color:"#f4623a"}}>Καθαρισμοί</p></Link>
                    </div>
                    </div>
                    <br /><br />
                <div className="row">
                    <div className="col-sm-3">
                    <FaFireExtinguisher style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/extinguisher"}> <p style={{color:"#f4623a"}}>Πυροσβεστήρες</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <FaGasPump style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/heatingoil"}> <p style={{color:"#f4623a"}}>Πετρέλαιο θέρμανσης</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <BsTools style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/network"}><p style={{color:"#f4623a"}}>Συνεργάτες</p></Link>
                    </div>
                    <div className="col-sm-3">
                    <GiTakeMyMoney style={{color:"#f4623a"}} size="75"/>
                    <Link to={"/services/heatingoil"}> <p style={{color:"#f4623a"}}>Πληρωμή λογαριασμών</p></Link>
                    </div>
                    </div>
             
             </div>
        </>
    )
}
