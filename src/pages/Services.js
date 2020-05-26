import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineClear , AiOutlineBug  } from "react-icons/ai";
import {FaGasPump , FaFireExtinguisher , FaRegBuilding} from 'react-icons/fa'
import {GiTakeMyMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {BsTools} from 'react-icons/bs'

function Services() {
    return (
        <div>
             <hr style={{border: '0' ,borderTop: '1px solid #ff4d4f'}}/> 
                <br />
                <br />
               
                    <h4>Υπηρεσίες</h4>
                    <hr className="divider my-4" />
                    <p>Οι διαθέσιμες υπηρεσίες μας, θα ικανοποιήσουν κάθε σας ανάγκη</p>
                    <br />
                <div className="row text-center "  style={{ marginLeft: '10%' , marginRight: '10%'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <GoChecklist style={{color:"#faad14"}} size="75"/>
                        <p><strong>Έκδοση Κοινοχρήστων</strong></p>
                        <p>Το τμήμα μηχανογράφησης δημιούργησε ένα αξιόπιστο, πλήρες και αναλυτικό πρόγραμμα έκδοσης κοινοχρήστων. Δώστε μας τηλεφωνικά τα έξοδα σας, και θα σας τα παραδώσουμε  σε 24 ώρες.</p>
                        <Link to={"/services/koinoxrista"}> <p style={{color:"#faad14"}}>Περισσότερα...</p></Link>

                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <AiOutlineBug  style={{color:"#a0d911"}} size="75"/>
                        <p><strong>Απολυμάνσεις</strong></p>
                        <p>H ΕΣΤΙΑ City Services,  με επαγγελματίες εφαρμοστές απολυμάνσεων και την επίβλεψη εξειδικευμένου επιστήμονα, αναλαμβάνει την απολύμανση οποιουδήποτε χώρου, με...</p>
                        <Link to={"/services/disinfection"}> <p style={{color:"#a0d911"}}>Περισσότερα...</p></Link>

                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <FaRegBuilding  style={{color:"#13c2c2"}} size="75"/>
                        <p><strong>Διαχειρίσεις Κτιρίων</strong></p>
                        <p>Η ΕΣΤΙΑ City services , αναλαμβάνει με υπευθυνότητα και επαγγελματική συνέπεια την διαχείριση της πολυκατοικίας σας και σας απαλλάσσει από οποιαδήποτε ταλαιπωρία που...</p>
                        <Link to={"/services/managebuilding"}> <p style={{color:"#13c2c2"}}>Περισσότερα...</p></Link>

                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <AiOutlineClear style={{color:"#eb2f96"}} size="75"/>
                        <p><strong>Καθαρισμοί</strong></p>
                        <p>Οι έμπειροι συνεργάτες της ΕΣΤΙΑ City Services, αναλαμβάνουν με υπευθυνότητα την καθαριότητα των κοινόχρηστων χώρων της πολυκατοικίας ή των επαγγελματικών χώρων σας.</p>
                        <Link to={"/services/cleaning"}> <p style={{color:"#eb2f96"}}>Περισσότερα...</p></Link>
                    </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row text-center " style={{ marginLeft: '10%' , marginRight: '10%'}}>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <FaFireExtinguisher style={{color:"#fa541c"}} size="75"/>
                        <p><strong>Πυροσβεστήρες</strong></p>
                        <p>Η εταιρεία μας ανέκαθεν ευαισθητοποιημένη στον παράγοντα "ασφάλεια" παρέχει στους πελάτες της, πυροσβεστήρες με τα υψηλότερα standards ποιότητας τόσο υλικών όσο και ασφάλειας.</p>
                        <Link to={"/services/extinguisher"}> <p style={{color:"#fa541c"}}>Περισσότερα...</p></Link>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <FaGasPump style={{color:"#52c41a"}} size="75"/>
                        <p><strong>Πετρέλαιο θέρμανσης</strong></p>
                        <p>Οι συνεργάτες της ΕΣΤΙΑ City Services, είναι δίπλας σας και συνεχίζουν να σας προσφέρουν υπηρεσίες ευρωπαϊκών προδιαγραφών. Προτεραιότητα μας είναι η σωστή παράδοση του πετρελαίου στις  πιο  ανταγωνιστικές οι τιμές της αγοράς.</p>
                        <Link to={"/services/heatingoil"}> <p style={{color:"#52c41a"}}>Περισσότερα...</p></Link>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <BsTools style={{color:"#40a9ff"}} size="75"/>
                        <p><strong>Δίκτυα συνεργατών</strong></p>
                        <p> H ΕΣΤΙΑ City Services  διαθέτει εξειδικευμένους συνεργάτες όλων των ειδικοτήτων, με σκοπό την άμεση και άριστη αντιμετώπιση κάθε σας ανάγκης.<br />
                                Σύμβουλοι κτιρίων /
                                Τεχνική Εξυπηρέτηση /
                                Νομική Υποστήριξη</p>
                                <Link to={"/services/network"}><p style={{color:"#40a9ff"}}>Περισσότερα...</p></Link>
                    </div>
                    </div>
                    <div className="col-sm-3">
                    <div className="thumbnail">
                    <GiTakeMyMoney style={{color:"#722ed1"}} size="75"/>
                    <div className="servicesOverlay">
                        <p className="servicesText"><strong>Πληρωμή λογαριασμών</strong></p>
                        <p className="servicesText">Με τη νέα υπηρεσία i-bank Simple Pay Spot της Εθνικής Τράπεζας, μπορείτε να πληρώνετε στα γραφεία μας, εύκολα και γρήγορα, τους λογαριασμούς σας σε ΔΕΚΟ, τηλεπικοινωνίες, ασφαλιστικές εταιρείες και άλλους οργανισμούς.</p>
                        <Link to={"/services/heatingoil"}> <p className="servicesText" style={{color:"#722ed1"}}>Περισσότερα...</p></Link>
                    </div>
                        
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default Services