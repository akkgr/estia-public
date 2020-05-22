import React from "react"
import fwto from '../../layout/photos/extinguisher-testing.jpg'
import { ServicesSidebar } from "../../components/ServicesSidebar"


function FireFighters() {
    return (
    <div className="well-xs well-sm-inset-1 bg-secondary-2">
        <div className="container">
            <h2 style={{color:"#FA2742"}}>Πυροσβεστήρες</h2>
            <div className="row flow-offset-1 txtalign text-left">
                <div className="col-md-9 col-sm-6  txtalign">
                    <div className="servicephoto">
                        <img src={fwto} className="img-fluid" alt="FireFighters"/>
                    </div>
                    <p>
                        Στο ενδεχόμενο μιας πυρκαγιάς η διάσωση των ανθρώπινων ζωών αφενός και η ασφάλεια των κτιρίων αφετέρου, κρίνονται από την αμεσότητα λειτουργίας των πυροσβεστήρων. Εκ του νόμου επιβάλλεται η ύπαρξη των πυροσβεστήρων σε πολυκατοικίες και κτίρια.
                       </p>
                    <p>
                        Κανένας νόμος όμως δεν επιβάλει την άψογη λειτουργία τους. Αυτή καθορίζεται από την εκάστοτε εταιρία που αναλαμβάνει την αναγόμωση και την πώληση τους.
                      </p>
                    <p>
                        Η εταιρεία μας ανέκαθεν ευαισθητοποιημένη στον παράγοντα "ασφάλεια" παρέχει στους πελάτες της πυροσβεστήρες με τα υψηλότερα standards ποιότητας τόσο υλικών όσο και ασφάλειας. Το τμήμα πυρασφάλειας και οι συνεργάτες μας πραγματοποιούν την τοποθέτηση καινούργιων πυροσβεστήρων όλων των τύπων και μεγεθών για ορόφους κτιρίων, λεβητοστάσια και επαγγελματικούς χώρους. Επίσης, αναλαμβάνουμε τον ετήσιο έλεγχο και την αναγόμωση των πυροσβεστήρων.
                    </p>
                    <br />
                    <p>Συνήθεις Τύποι Πυροσβεστήρων 
                    </p>

                    <ul className="marked-list">
                        <li>Φορητοί πυροσβεστήρες ξηράς κόνεως 6 kg </li>
                        <li>Φορητοί πυροσβεστήρες ξηράς κόνεως 12 kg </li>
                        <li>Πυροσβεστήρες οροφής 12 kg (λεβητοστασίου)</li>
                        <li>Πυροσβεστήρες διοξειδίου άνθρακα</li>
                    </ul>
                 <p>Ενημερωθείτε από τους έμπειρους τεχνικούς μας και με κριτήριο τις πραγματικές σας ανάγκες, θα λάβετε ολοκληρωμένες λύσεις στον ιδιαίτερα ευαίσθητο τομέα της πυρασφάλειας των κτιρίων.</p>
                </div>
                <div >
                <div >
                    <ServicesSidebar />
                </div>
                </div>
            </div>
        </div>
    </div>
         
    )
}

export default FireFighters