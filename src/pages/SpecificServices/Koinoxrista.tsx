import React from "react"
import { ServicesBar } from "../../components/ServicesBar"
import {GoChecklist} from 'react-icons/go' 
import {BsListCheck} from 'react-icons/bs'

function Koinoxrista() {
    return (
        <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
            <div className="container-fluid">
            <br/>
            <br />
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#f4623a"}}>Έκδοση Κοινοχρήστων</h2>
                    <p>Το τμήμα μηχανογράφησης δημιούργησε ένα απλό αλλά παράλληλα πλήρες και αναλυτικό πρόγραμμα κοινοχρήστων που απαλλάσσει το διαχειριστή από κάθε πρόσθετη 
                        ενασχόληση, δίνοντας ταυτόχρονα σαφείς πληροφορίες στους ενοίκους σχετικά με τα κοινόχρηστα τους.
                     </p> 
                     <p>  
                        Το πρόγραμμα προσφέρει:
                    </p>
                    <p> <i>Δύο συγκεντρωτικές καταστάσεις</i></p> 
                    <p> <i> Ένα ειδοποιητήριο για κάθε διαμέρισμα </i></p>
                    <p> <i> Δύο εξοφλητικές αποδείξεις, μια για τον ενοικιαστή και μια για τον ιδιοκτήτη. 
                        Κάθε απόδειξη περιλαμβάνει ανάλυση των ποσών και των χιλιοστών έτσι ώστε να γίνονται κατανοητά από όλους.</i>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <br/>
                    <GoChecklist size="150" style={{color:"#f4623a"}}/>
                    </div>
                </div>
                <p><strong><i>Η ΕΣΤΙΑ - City services διαθέτει ειδικό τμήμα με εξειδικευμένο προσωπικό για την άμεση υποστήριξη των δικών σας αναγκών.
Δώστε μας τηλεφωνικά τα έξοδα σας, και μέσα σε 24 ώρες, θα σας αποστείλουμε τα κοινόχρηστα όπου εσείς μας ζητήσετε</i></strong></p>            
                </div>
                <br /><br />
                <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <BsListCheck size="150" style={{color:"#f4623a"}}/>
                    </div>
                    <div className="col-sm-8">
                    <h2 style={{color:"#f4623a"}}>Απαραίτητα στοιχεία για την έκδοση κοινοχρήστων</h2>
                    <p><i>Πίνακας χιλιοστών μηχανικού για την κατανομή των κοινοχρήστων (Δήλωση από διαχειριστή σε περίπτωση που δεν υπάρχει)</i></p>
                    <p><i>Μηχανολογική μελέτη θέρμανσης (ωρομέτρηση)</i></p>
                    <p><i>Ονοματεπώνυμα ιδιοκτητών ενοικιαστών</i></p>
                    <p><i>Υπεύθυνος διαχειριστής για την καταγραφή ενδείξεων των μετρητών, παραλαβή πετρελαίου κλπ</i></p>
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

export default Koinoxrista