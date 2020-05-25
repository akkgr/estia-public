import React from "react"
import fwto from '../../layout/photos/extinguisher-testing.jpg'
import { ServicesBar } from "../../components/ServicesBar"
import { FaFireExtinguisher} from 'react-icons/fa'


function FireFighters() {
    return (
        <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Πυροσβεστήρες</h2>
                    <p>
                        Στο ενδεχόμενο μιας πυρκαγιάς η διάσωση των ανθρώπινων ζωών αφενός και η ασφάλεια των κτιρίων αφετέρου, κρίνονται από την αμεσότητα λειτουργίας των πυροσβεστήρων. Εκ του νόμου επιβάλλεται η ύπαρξη των πυροσβεστήρων σε πολυκατοικίες και κτίρια.
                       </p>
                    <p>
                        Κανένας νόμος όμως δεν επιβάλει την άψογη λειτουργία τους. Αυτή καθορίζεται από την εκάστοτε εταιρία που αναλαμβάνει την αναγόμωση και την πώληση τους.
                      </p>
                    <p>
                        Η εταιρεία μας ανέκαθεν ευαισθητοποιημένη στον παράγοντα "ασφάλεια" παρέχει στους πελάτες της πυροσβεστήρες με τα υψηλότερα standards ποιότητας τόσο υλικών όσο και ασφάλειας. Το τμήμα πυρασφάλειας και οι συνεργάτες μας πραγματοποιούν την τοποθέτηση καινούργιων πυροσβεστήρων όλων των τύπων και μεγεθών για ορόφους κτιρίων, λεβητοστάσια και επαγγελματικούς χώρους. Επίσης, αναλαμβάνουμε τον ετήσιο έλεγχο και την αναγόμωση των πυροσβεστήρων.
                    </p>  
                    </div>
                    <div className="col-sm-4">
                        <br/>
                        <img src={fwto} alt="firefight" width="350"/>

                    </div>
                </div>
                </div>
                <br /><br />
                <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <FaFireExtinguisher size="150" style={{color:"#ff4d4f"}}/>
                    </div>
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Συνήθεις Τύποι Πυροσβεστήρων </h2>
                    <p><i>Φορητοί πυροσβεστήρες ξηράς κόνεως 6 kg </i></p>
                    <p><i>Φορητοί πυροσβεστήρες ξηράς κόνεως 12 kg </i></p>    
                    <p><i>Πυροσβεστήρες οροφής 12 kg (λεβητοστασίου)</i></p>   
                    <p> <i>Πυροσβεστήρες διοξειδίου άνθρακα</i></p>    
                   <br/>
               <br /><br />
                    </div>
                    </div>
                </div>  
                <p><strong>Ενημερωθείτε από τους έμπειρους τεχνικούς μας και με κριτήριο τις πραγματικές σας ανάγκες, θα λάβετε ολοκληρωμένες λύσεις στον ιδιαίτερα ευαίσθητο τομέα της πυρασφάλειας των κτιρίων.</strong></p>

                <hr style={{border: '0' ,borderTop: '1px solid #ff4d4f'}}/>  
                <div className="slideanim">
            <ServicesBar />
                </div>   
    </div>
         
    )
}

export default FireFighters