import React from "react"
import { ServicesBar } from "../../components/ServicesBar"
import {AiOutlineTeam} from 'react-icons/ai' 
import {BsTools} from 'react-icons/bs'

function AssociatesNetwork() {
    return (
        <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
            <div className="container-fluid">
            <br/>
            <br />
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#f4623a"}}>Δίκτυο Συνεργατών</h2>
                    <p>H ΕΣΤΙΑ City Services διαθέτει εξειδικευμένους συνεργάτες όλων των ειδικοτήτων, με σκοπό την άμεση και άριστη αντιμετώπιση κάθε σας ανάγκης. 
                        Με τη σύγχρονη οργάνωση της, με εξειδικευμένο και επιστημονικά καταρτισμένο προσωπικό, εξυπηρετεί με αμεσότητα και επαγγελματισμό, δίνοντας υπεύθυνες λύσεις σε όλα σας τα προβλήματα.
                     </p> 
                    <p style={{color:"#f4623a"}}><strong>Σύμβουλοι κτιρίων:</strong></p> 
                    <p>Η ομάδα των συμβούλων μας είναι έτοιμη να σας εξηγήσει όλες τις υπηρεσίες που προσφέρει η ΕΣΤΙΑ City Services , 
                        αλλά και τρόπους για την καλύτερη διαχείριση. Κάθε περίπτωση μελετάται ξεχωριστά και προτείνονται λύσεις που θα καλύψουν κάθε ανάγκη του κτηρίου σας.</p>
                    </div>
                    <div className="col-sm-4">
                        <br/>
                    <AiOutlineTeam size="150" style={{color:"#f4623a"}}/>
                    </div>
                </div>
                </div>
                <br /><br />
                <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <BsTools size="150" style={{color:"#f4623a"}}/>
                    </div>
                    <div className="col-sm-8">
                    <h2 style={{color:"#f4623a"}}>Τεχνική εξυπηρέτηση</h2>
                    <p>Η ομάδα των εξειδικευμένων τεχνιτών - συνεργατών, βρίσκεται δίπλα σας να σας εξυπηρετήσει σε κάθε τεχνικό πρόβλημα που αφορά την πολυκατοικία σας ή τον επαγγελματικό σας χώρο. Κύριο μέλημα μας είναι η καθημερινή σας εξυπηρέτηση σε κάθε βλάβη, επισκευή ή εγκατάσταση.</p>
                    <p><i>Υδραυλικά, Ηλεκτρολογικά, Αποφράξεις, Κλειδαράς, 
                    Συντήρηση Κήπων, Τζάμια – Κρύσταλλα, Πόρτες Ασφαλείας, 
                    Θυροτηλεοράσεις – θυροτηλέφωνα, Αλουμινοκατασκευές – Σιδηροκατασκευές, 
                    Ελαιοχρωματισμοί, Μονώσεις, Οικοδομικές Εργασίες </i></p>
                <br /><br />
                    </div>
                    </div>
                </div>  
                <hr style={{border: '0' ,borderTop: '1px solid #f4623a'}}/> 
            <div className="slideanim">
            <ServicesBar />
                </div>     
            
       </div>   
    )
}

export default AssociatesNetwork