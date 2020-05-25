import React from "react"
import { ServicesBar } from "../../components/ServicesBar"
import {FaGasPump } from 'react-icons/fa'
import { AiOutlineClear } from "react-icons/ai";

function HeatingOil() {
    return (
        <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Πετρέλαιο Θέρμανσης – Καθαρισμοί Δεξαμενών</h2>
                    <p>
                        Οι συνεργάτες της ΕΣΤΙΑ City Services, είναι δίπλας σας και συνεχίζουν να σας προσφέρουν υπηρεσίες ευρωπαϊκών προδιαγραφών. Προτεραιότητα μας είναι η σωστή παράδοση του πετρελαίου στις  πιο  ανταγωνιστικές οι τιμές της αγοράς.
                    </p>
                    <p>
                        Εμπιστευτείτε εμάς και τους συνεργάτες μας για την διανομή πετρελαίου θέρμανσης και θα διαπιστώσετε και μόνοι σας ότι:
                    </p>
                    <p> <i>προτεραιότητα μας είναι η σωστή παράδοση του πετρελαίου</i></p> 
                    <p> <i>ο χρόνος παράδοσης θα είναι αυτός που πραγματικά μας ζητήσατε</i></p>
                    <p> <i> η ποιότητα των καυσίμων  είναι υψηλών προδιαγραφών με πιστοποιητικά από όλους τους αρμόδιους φορείς</i></p>
                    <p><i>οι τιμές μας είναι οι πιο ανταγωνιστικές της αγοράς</i></p>
                    </div>
                    <div className="col-sm-4">
                        <br/>
                    <FaGasPump size="150" style={{color:"#ff4d4f"}}/>
                    </div>
                </div>
                <p><strong><i>Ξεχάστε για πάντα το άγχος της παραλαβής των καυσίμων και τη μεγάλη αναμονή για την παραλαβή της παραγγελίας σας. Το κύριο μέλημα μας είναι η ικανοποίηση του πελάτη και για αυτό μας εμπιστεύεστε όλα αυτά τα χρόνια.
                </i></strong></p>            
                    <p><strong><i>Επικοινωνήστε τώρα μαζί μας για την παραγγελία σας και ένας εκπρόσωπος της εταιρία μας θα σας ενημερώσει αναλυτικά για τον τρόπο παράδοσης.
                </i></strong></p>
                </div>
                <br /><br />
                <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <AiOutlineClear size="150" style={{color:"#ff4d4f"}}/>
                    </div>
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Καθαρισμοί δεξαμενών</h2>
                    <p>Το πετρέλαιο ως γνωστόν αφήνει πολλά κατάλοιπα με αποτέλεσμα να δημιουργούν κακή λειτουργία του καυστήρα. Ο καθαρισμός της δεξαμενής του πετρελαίου είναι απαραίτητος να γίνεται τουλάχιστον κάθε 2 χρόνια.</p>
                    <p>
                        Η σωστή συντήρηση της δεξαμενής συμβάλει στην καλύτερη λειτουργία του καυστήρα, την επιμήκυνση του χρόνου ζωής του μηχανήματος αλλά και την αποφυγή προβλημάτων.
                    </p>
                    <p>
                        Με ένα τηλεφώνημα σας, ειδικά εξοπλισμένο βυτιοφόρο αναλαμβάνει τον καθαρισμό της δεξαμενής σας ακόμα και αν υπάρχει πετρέλαιο. Το ειδικά εξοπλισμένο βυτιοφόρο έχει τη δυνατότητα να αναρροφήσει το πετρέλαιο, να το φιλτράρει και να σας το επιστρέψει καθαρό αμέσως μετά τον καθαρισμό της δεξαμενής σας.
                    </p>
                <br /><br />
                    </div>
                    </div>
                </div> 
                <hr style={{border: '0' ,borderTop: '1px solid #ff4d4f'}}/>  
                <div className="slideanim">
            <ServicesBar />
                </div>   
       </div>   
    )
}

export default HeatingOil