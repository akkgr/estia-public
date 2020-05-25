import React from 'react'
import MyPhoto from '../../layout/photos/apolimansi.jpg'
import { ServicesBar } from '../../components/ServicesBar'
import { AiOutlineBug }from 'react-icons/ai'

export const Disinfection = () => {
    return (
        <div className="container well-xs well-sm-inset-1 bg-secondary-2">  
        <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Απολύμανση - Απεντόμωση - Μυοκτονία</h2>
                    <p>
                        H ΕΣΤΙΑ City Services, με επαγγελματίες εφαρμοστές απολυμάνσεων υπό την επίβλεψη εξειδικευμένου επιστήμονα, αναλαμβάνει την απολύμανση οποιουδήποτε χώρου, με εγγυημένο αποτέλεσμα.
                    </p>
                    <p>
                        Καταπολεμούμε έντομα και τρωκτικά απαλλάσσοντάς σας από αυτά, με φάρμακα εγκεκριμένα από το Υπουργείο Γεωργίας, ακίνδυνα για τον άνθρωπο και άοσμα.
                    </p>
                    <p><strong><i>Η ΕΣΤΙΑ - City services διαθέτει ειδικό τμήμα με εξειδικευμένο προσωπικό για την άμεση υποστήριξη των δικών σας αναγκών.
Δώστε μας τηλεφωνικά τα έξοδα σας, και μέσα σε 24 ώρες, θα σας αποστείλουμε τα κοινόχρηστα όπου εσείς μας ζητήσετε</i></strong></p>  
                    </div>
                    <div className="col-sm-4">
                        <br/>
                        <img src={MyPhoto} alt="disinfection" width="350"/>
                    </div>
                </div>
                <br /><br />
                <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <br />
                        <br />
                        <AiOutlineBug size="150" style={{color:"#ff4d4f"}}/>
                    </div>
                    <div className="col-sm-8">
                    <h2 style={{color:"#ff4d4f"}}>Επιστημονική αντιμετώπιση σε κάθε σας ανάγκη!</h2>
                    <p>
                        Η εμπειρία μας λέει ότι για πολλούς  ο όρος απολύμανση δεν είναι ξεκάθαρος έννοια αφού με τον ίδια λέξη εννοούμε ουσιαστικά τρία πράγματα. Προσπαθώντας λοιπόν να ξεκαθαρίσουμε τι περιλαμβάνει ο όρος απολύμανση, θα λέγαμε ότι χωρίζεται σε τρεις κατηγορίες:
                    </p>
                    <p><i>Την <strong>απεντόμωση</strong>, η οποία αφορά την δραστική καταπολέμηση εντόμων, όπως κατσαρίδες, κουνούπια, μύγες κ.ά.</i></p>
                    <p><i>ην <strong>μυοκτονία</strong>, η οποία καταπολεμά τα τρωκτικά (ποντίκια, αρουραίοι).</i></p>
                    <p><i>Και την <strong>απολύμανση</strong>, η οποία καταπολεμά πάσης φύσεως μικρόβια.</i></p>
                    <p>Η απολύμανση είναι αναγκαία καθώς οι παραπάνω "εχθροί" αποτελούν φορείς ασθενειών που μπορεί να αποβούν επικίνδυνοι για την ανθρώπινη υγεία. Η απολύμανση κρίνεται σωστό να γίνεται κάθε χρόνο (συνήθως δύο με τρεις φορές, ανάλογα το πρόβλημα).</p>
                    </div>
                    </div>
                </div>
                <p>
                        Η ΕΣΤΙΑ City Services χρησιμοποιεί τα καλύτερα φάρμακα, ευρωπαϊκών προδιαγραφών και  σε συνεργασία με εγκεκριμένους γεωπόνους μεριμνεί για την απολύμανση του χώρου σας.  Κάθε περίπτωση απολύμανσης αντιμετωπίζεται ξεχωριστά και δημιουργείται πλάνο αφού μελετηθεί  χώρος σας. Το εκπαιδευμένο συνεργείο απολυμάνσεων,  τηρεί όλα τα απαραίτητα μέτρα ασφαλείας.
                </p>
            </div>    
                <br />
                <br />
                <div className="container well-sm">
                    <h2 style={{color:"#ff4d4f"}}>Συχνές ερωτήσεις και οι απαντήσεις τους:</h2>
                    <dl className="terms-list text-left" >
                        <dt className="heading-5" style={{color:"#ff4d4f"}}>ΠΩΣ ΓΙΝΕΤΑΙ Η ΑΠΕΝΤΟΜΩΣΗ ΓΙΑ ΚΑΤΣΑΡΙΔΕΣ;</dt>
                        <dd>
                            Υπάρχουν διαφορετικοί τρόποι αντιμετώπισης ανάλογα με το μέγεθος προσβολής αλλά και το είδος της κατσαρίδας.
                            <br />
                            Ο πιο συχνός τρόπος πρόληψης και αντιμετώπισης είναι ο ψεκασμός στα σημεία που συνήθως επιλέγει να αναπαραχθεί και στα σημεία που συνήθως περνάει (π.χ. σιφώνια).
                        </dd>
                        <dt className="heading-5" style={{color:"#ff4d4f"}}>ΜΕ ΜΙΑ ΑΠΕΝΤΟΜΩΣΗ ΕΧΩ ΗΣΥΧΑΣΕΙ ΜΙΑ ΓΙΑ ΠΑΝΤΑ ΑΠΟ ΤΙΣ ΚΑΤΣΑΡΙΔΕΣ;</dt>
                        <dd>
                            Δυστυχώς όχι. Ο καλύτερος τρόπος για να μειώσετε τον κίνδυνο από τις κατσαρίδες είναι η καθαριότητα. Παρόλα αυτά, σε περιπτώσεις που έχει πρόβλημα η ευρύτερη περιοχή σας, η καλύτερη αντιμετώπιση είναι η πρόληψη με περιοδικές απεντομώσεις. Αν υπάρχει  πρόβλημα γενικότερο στην περιοχή σας, οι κατσαρίδες θα ξανακάνουν την εμφάνισή τους όταν περάσει ο χρόνος δράσης των φαρμάκων.
                        </dd>
                        <dt className="heading-5" style={{color:"#ff4d4f"}}>ΤΑ ΦΑΡΜΑΚΑ ΠΟΥ ΧΡΗΣΙΜΟΠΟΙΟΥΝΤΑΙ ΣΤΙΣ ΑΠΟΛΥΜΑΝΣΕΙΣ ΕΙΝΑΙ ΒΛΑΒΕΡΑ ΓΙΑ ΤΟΝ ΑΝΘΡΩΠΟ ΚΑΙ ΤΑ ΚΑΤΟΙΚΙΔΙΑ;</dt>
                        <dd>
                            Όχι, δεν υπάρχει κανένας κίνδυνος από τα φάρμακα ή κατά τον ψεκασμό. Σε περίπτωση που υπάρχουν στο χώρο κατοικίδια θα πρέπει να ειδοποιείται το γραφείο μας πριν από το προκαθορισμένο ραντεβού ώστε να λαμβάνονται ειδικές προφυλάξεις.
                            <br />
                            Όλες οι απολυμάνσεις – απεντομώσεις που γίνονται από το γραφείο μας, πραγματοποιούνται από ειδικά εκπαιδευμένα συνεργεία και χρησιμοποιούνται φάρμακα εγκεκριμένα από τις αρμόδιες αρχές του υπουργείου Αγροτικής Ανάπτυξης και Τροφίμων. Σε περίπτωση που χρειαστεί να ληφθούν κάποιες επιπλέον προφυλάξεις μετά την απολύμανση, οι συνεργάτες μας θα σας ενημερώσουν εγκαίρως.
                        </dd>
                        <dt className="heading-5" style={{color:"#ff4d4f"}}>ΚΑΘΕ ΠΟΤΕ ΠΡΕΠΕΙ ΝΑ ΚΑΝΩ ΑΠΕΝΤΟΜΩΣΗ ΓΙΑ ΚΑΤΣΑΡΙΔΕΣ;</dt>
                        <dd>
                            Η κάθε περίπτωση κρίνεται ξεχωριστά και έχει να κάνει με διάφορους παράγοντες (π.χ. περιοχή, είδος κτηρίου). Σε γενικές όμως γραμμές με μία απεντόμωση την Άνοιξη και μία το Φθινόπωρο θα απαλλαγείτε από τις ανεπιθύμητες επισκέπτριες.
                        </dd>
                        <dt className="heading-5" style={{color:"#ff4d4f"}}>ΘΑ ΠΡΕΠΕΙ ΝΑ ΠΡΟΣΕΞΩ ΚΑΤΙ ΜΕΤΑ ΤΗΝ ΑΠΕΝΤΟΜΩΣΗ;</dt>
                        <dd>
                            Μετά την απεντόμωση για ένα χρονικό διάστημα περίπου πέντε ημερών δεν θα πρέπει να καθαριστούν οι χώροι που έγινε. Για το λόγο αυτό, καλό θα ήταν να καθαρίζεται ο χώρος πριν από την απεντόμωση.
                        </dd>
                        <dt className="heading-5" style={{color:"#ff4d4f"}}>ΤΙ ΕΙΝΑΙ Η ΑΝΤΙΜΕΤΩΠΙΣΗ ΚΑΤΣΑΡΙΔΩΝ ΜΕ GEL ΚΑΙ ΣΕ ΠΟΙΕΣ ΠΕΡΙΠΤΩΣΕΙΣ ΧΡΗΣΙΜΟΠΟΙΕΙΤΑΙ;</dt>
                        <dd>
                            Το gel είναι ένας τρόπος αντιμετώπισης κατσαρίδων που σε κάποιες περιπτώσεις είναι καλό να δρα συμπληρωματικά με τον ψεκασμό και σε άλλες περιπτώσεις αρκεί μόνο η αντιμετώπιση με gel. Το gel προορίζεται κυρίως για χρήση σε εσωτερικούς χώρους και ιδιαίτερα σε περιπτώσεις προσβολής από τις μικρές καστανές κατσαρίδες (Blattella germanica).
                        </dd>
                        <dt className="heading-5" style={{color:"#ff4d4f" }}>ΤΙ ΕΙΝΑΙ ΚΑΙ ΠΩΣ ΓΙΝΕΤΑΙ ΜΙΑ ΜΥΟΚΤΟΝΙΑ;</dt>
                        <dd>
                            Με τον όρο μυοκτονία εννοούμε όλες τις εφαρμογές που αφορούν την αντιμετώπιση τρωκτικών (ποντικών και αρουραίων). Τα τρωκτικά αποτελούν σημαντικό κίνδυνο για τη δημόσια υγεία μιας και είναι φορείς διαφόρων ασθενειών και παρασίτων (π.χ. ψείρες, ψύλλους).
                            <br />
                            Η αντιμετώπιση των τρωκτικών γίνεται, ανάλογα με τον εκάστοτε χώρο με:
                            <ul className="marked-list">
                                <li>Τοποθέτηση ποντικοφάρμακου</li>
                                <li>Τοποθέτηση δολωματικών σταθμών</li>
                                <li>Τοποθέτηση άλλου τύπου παγίδων παγίδων (π.χ. παγίδα με κόλλα)</li>
                            </ul>
                        </dd>
                    </dl>
                </div>
        <br />
        <br /> 
            <hr style={{border: '0' ,borderTop: '1px solid #ff4d4f'}}/>  
            <div className="slideanim">
                <ServicesBar />
            </div>
        </div>
        
    )
}
