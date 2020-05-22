import React from "react"
import MyPhoto from '../../layout/photos/cleaning.jpg'
import { ServicesSidebar } from "../../components/ServicesSidebar"


function Cleaning() {
    return (
       
            <div className="well-xs well-sm-inset-1 bg-secondary-2">
        <div className="container ">
            <h2 style={{color:"#FA2742"}}>Συνεργείο Καθαρισμού</h2>
            <div className="row flow-offset-1 txtalign  text-left">
                <div className="col-md-9 col-sm-6  txtalign">
                   
                    <img src={MyPhoto} className="img-fluid" alt="cleaning" />
                       
                    <p>
                        Οι συνεργάτες της ΕΣΤΙΑ City Services, αναλαμβάνουν την καθαριότητα των κοινόχρηστων χώρων της πολυκατοικίας ή των επαγγελματικών χώρων σας.
                    </p>
                    <p>
                        Για τις εργασίες καθαριότητας διαθέτουμε τον πλέον εξελιγμένο εξοπλισμό και σε συνδυασμό με το σταθερό και εκπαιδευμένο προσωπικό, σας παρέχουμε το καλύτερο δυνατό αποτέλεσμα. Ταυτόχρονα, χρησιμοποιούμε τα αποτελεσματικότερα, οικολογικά υλικά καθαρισμού προσφέροντας υπηρεσίες προσαρμοσμένες στις ανάγκες και τις απαιτήσεις του κάθε χώρου ξεχωριστά.
                    </p>
                    <br />
                    <h5>
                       ΑΨΟΓΗ ΚΑΘΑΡΙΟΤΗΤΑ, ΥΓΙΕΙΝΟ ΚΑΙ ΕΥΧΑΡΙΣΤΟ ΠΕΡΙΒΑΛΛΟΝ
                    </h5>

                    <p>
                        * Η πολυκατοικία δεν έχει καμία νομική ή άλλη σχέση. Συνεπώς κανένα μέλος του προσωπικού     δεν μπορεί να αξιώσει μισθούς, επιδόματα  ή αποζημιώσεις, και η πολυκατοικία ΑΠΑΛΛΑΣΕΤΑΙ από Ι.Κ.Α., Δώρα, Επιδόματα.
                             </p>
                    <br />
                </div>
                <div >
                    <ServicesSidebar />
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Cleaning