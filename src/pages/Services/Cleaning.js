import React from "react"
import MyPhoto from '../../layout/photos/cleaning.jpg'
import { ServicesBar } from "../../components/ServicesBar"


function Cleaning() {
    return (
    <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Συνεργείο Καθαρισμού</h2>
                    <p>
                        Οι συνεργάτες της ΕΣΤΙΑ City Services, αναλαμβάνουν την καθαριότητα των κοινόχρηστων χώρων της πολυκατοικίας ή των επαγγελματικών χώρων σας.
                    </p>
                    <p>
                        Για τις εργασίες καθαριότητας διαθέτουμε τον πλέον εξελιγμένο εξοπλισμό και σε συνδυασμό με το σταθερό και εκπαιδευμένο προσωπικό, σας παρέχουμε το καλύτερο δυνατό αποτέλεσμα. Ταυτόχρονα, χρησιμοποιούμε τα αποτελεσματικότερα, οικολογικά υλικά καθαρισμού προσφέροντας υπηρεσίες προσαρμοσμένες στις ανάγκες και τις απαιτήσεις του κάθε χώρου ξεχωριστά.
                    </p>
                    <br />
                    <p><strong>ΑΨΟΓΗ ΚΑΘΑΡΙΟΤΗΤΑ, ΥΓΙΕΙΝΟ ΚΑΙ ΕΥΧΑΡΙΣΤΟ ΠΕΡΙΒΑΛΛΟΝ</strong></p>
                    <p>
                        * Η πολυκατοικία δεν έχει καμία νομική ή άλλη σχέση. Συνεπώς κανένα μέλος του προσωπικού     δεν μπορεί να αξιώσει μισθούς, επιδόματα  ή αποζημιώσεις, και η πολυκατοικία ΑΠΑΛΛΑΣΕΤΑΙ από Ι.Κ.Α., Δώρα, Επιδόματα.
                             </p>                    
                    </div>
                    <div className="col-sm-4">
                        <br/>
                        <img src={MyPhoto} alt="web bank" width="350"/>
                    </div>
                </div>
                </div>
                <br /><br />
                <hr style={{border: '0' ,borderTop: '1px solid #ff4d4f'}}/> 
                <div className="slideanim">
            <ServicesBar />
                </div> 
       </div>   
    )
}

export default Cleaning