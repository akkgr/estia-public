import React from "react"
import { ServicesBar } from "../../components/ServicesBar"
import {FaRegBuilding} from "react-icons/fa"


function BuildingAdmin() {
    return (
        <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
            <div className="container-fluid">
            <br/>
            <br />
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#f4623a"}}>Διαχειρίσεις Πολυκατοικιών - Κτιρίων</h2>
                    <p>
                        Η ΕΣΤΙΑ City Services , αναλαμβάνει με υπευθυνότητα και επαγγελματική συνέπεια τη διαχείριση της πολυκατοικίας σας και σας απαλλάσσει από οποιαδήποτε ταλαιπωρία που αφορά στους κοινόχρηστους χώρους.                    </p>
                    <p>
                        Μια ομάδα Συμβούλων είναι έτοιμη να σας εξηγήσει όλες τις υπηρεσίες που προσφέρει η ΕΣΤΙΑ City Services , αλλά και τρόπους για καλύτερη διαχείριση.                    </p>
                    <br />
                    <p>
                    Η ΕΣΤΙΑ - City Services είναι σε θέση να σας προσφέρει με τον πλέον αξιόπιστο τρόπο και τις φιλικότερες χρεώσεις τις παρακάτω υπηρεσίες, απαλλάσσοντας σας από ταλαιπωρία και περιττά έξοδα.                             </p>                    
                    </div>
                    <div className="col-sm-4">
                        <br/>
                        <FaRegBuilding size="150" style={{color:"#f4623a"}}/>

                    </div>
                </div>
                </div>
                <br /><br />
                <p><i><strong>Μέριμνα και Πληρωμή των κοινόχρηστων λογαριασμών (ΔΕΗ, ΕΥΔΑΠ κ.λ.π.)</strong></i></p>
                <p><i><strong>Πληρωμή συνεργείων (Καθαριότητα, Ανελκυστήρας κ.λ.π.)</strong></i></p>
                <p><i><strong>Προγραμματισμός και υλοποίηση από έμπειρους συνεργάτες των περιοδικών εργασιών (Συντήρηση καυστήρα, Απολύμανση, Πυροσβεστήρες κ.λ.π. )</strong></i></p>
                <p><i><strong>Έλεγχος της πολυκατοικίας για διάφορες φθορές και ανάγκες.</strong></i></p>
                <p><i><strong>Σε περιπτώσεις εκτάκτων βλαβών, μέριμνα για την άμεση ειδοποίηση των αντίστοιχων συνεργείων, για την επισκευή των βλαβών καθώς και την πληρωμή των συνεργείων.</strong></i></p>
                <p><i><strong>Διανομή των ειδοποιητηρίων.</strong></i></p>
                <p><i><strong>Είσπραξη των κοινοχρήστων στην πολυκατοικία σε καθορισμένη ημέρα και ώρα.</strong></i></p>
                <p><i><strong>Λογιστική διαχείριση του αποθεματικού ταμείου.</strong></i></p>
                <p><i><strong>Έλεγχος των αποδείξεων δαπανών των κοινοχρήστων.</strong></i></p>
                <p><i><strong>Ανάρτηση των αντιγράφων των αποδείξεων στον πίνακα ανακοινώσεων σύμφωνα με το 718/ΦΕΚ 2090/2014.</strong></i></p>
                <p><i><strong>Διατήρηση ψηφιακού αρχείου πολυκατοικίας για τα δύο τελευταία έτη (συγκεντρωτικές καταστάσεις και αποδείξεις δαπανών).</strong></i></p>
                <br /><br/>
                <p>Αν δεν υπάρχει στην πολυκατοικία σας διαθέσιμος διαχειριστής, το έμπειρο προσωπικό μας βρίσκεται εδώ για να σας εξυπηρετήσει και να σας βάλει στην οικογένεια μας. Βρισκόμαστε δίπλα σας και σας παρέχουμε τις υπηρεσίες μας με αξιοπιστία, ποιότητα & οικονομία.</p>
                <br />
                <p style={{color:"#f4623a"}}><strong>Σας περιμένουμε για να χτίσουμε μία σχέση εμπιστοσύνης.</strong></p>
                <br/><br />
                <hr style={{border: '0' ,borderTop: '1px solid #f4623a'}}/> 
                <div className="slideanim">
                    <ServicesBar />
                </div> 
       </div>   
    )
}

export default BuildingAdmin