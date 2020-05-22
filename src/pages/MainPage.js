import React from "react"

function MainPage() {
    return (
        <div>
           <h2 className="primary">ΕΣΤΙΑ City Services</h2>
            <p className="big secondary-2">
                Με εμπειρία πάνω από 30 χρόνια η ΕΣΤΙΑ City Services πρωτοπορεί με τις υπηρεσίες της και τον επαγγελματισμό της. Παρέχει μια σειρά από υπηρεσίες για τα κτίρια που καλύπτουν κάθε ανάγκη. Το έμπειρο προσωπικό της είναι καθημερινά δίπλα στους πελάτες για να εξυπηρετεί και να δίνει λύσεις σε κάθε τους πρόβλημα.
            </p>
            <div className="row products">
                <div className="col-sm-6  col-lg-3 product product-skin-1">
                    <div className="product">
                        <div className="product__title">ΕΚΔΟΣΗ ΚΟΙΝΟΧΡΗΣΤΩΝ</div>
                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-calendar"></span>
                            <p className="product__descr">Το τμήμα μηχανογράφησης δημιούργησε ένα αξιόπιστο, πλήρες και αναλυτικό πρόγραμμα έκδοσης κοινοχρήστων. Δώστε μας τηλεφωνικά τα έξοδα σας, και θα σας τα παραδώσουμε  σε 24 ώρες.</p>
                            <a className="link link-primary" href="/services/koinoxrista">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 product product-skin-4">
                    <div className="product">
                        <div className="product__title">ΔΙΑΧΕΙΡΙΣΕΙΣ ΚΤΙΡΙΩΝ</div>
                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-building-o"></span>
                            <p className="product__descr">Η ΕΣΤΙΑ City services , αναλαμβάνει με υπευθυνότητα και επαγγελματική συνέπεια την διαχείριση της πολυκατοικίας σας και σας απαλλάσσει από οποιαδήποτε ταλαιπωρία που...</p>
                            <a className="link link-primary" href="/services/managebuilding">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 product product-skin-3">
                    <div className="product">
                        <div className="product__title">ΑΠΟΛΥΜΑΝΣΕΙΣ</div>
                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-bug"></span>
                            <p className="product__descr">H ΕΣΤΙΑ City Services,  με επαγγελματίες εφαρμοστές απολυμάνσεων και την επίβλεψη εξειδικευμένου επιστήμονα, αναλαμβάνει την απολύμανση οποιουδήποτε χώρου, με...</p>
                            <a className="link link-primary" href="/services/disinfection">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 product product-skin-2">
                    <div className="product">
                        <div className="product__title">ΚΑΘΑΡΙΣΜΟΙ</div>
                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-trash"></span>
                            <p className="product__descr">Οι έμπειροι συνεργάτες της ΕΣΤΙΑ City Services, αναλαμβάνουν με υπευθυνότητα την καθαριότητα των κοινόχρηστων χώρων της πολυκατοικίας ή των επαγγελματικών χώρων σας.</p>
                            <a className="link link-primary" href="/services/cleaning">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row products">
                <div className="col-sm-6 col-lg-3 product product-skin-1">
                    <div className="product">
                        <div className="product__title">ΠΥΡΟΣΒΕΣΤΗΡΕΣ</div>
                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-fire-extinguisher"></span>
                            <p className="product__descr">Η εταιρεία μας ανέκαθεν ευαισθητοποιημένη στον παράγοντα "ασφάλεια" παρέχει στους πελάτες της, πυροσβεστήρες με τα υψηλότερα standards ποιότητας τόσο υλικών όσο και ασφάλειας.</p>
                            <a className="link link-primary" href="/services/extinguisher">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 product product-skin-4">
                    <div className="product">
                        <div className="product__title">ΠΕΤΡΕΛΑΙΟ ΘΕΡΜΑΝΣΗΣ</div>

                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-truck"></span>
                            <p className="product__descr">Οι συνεργάτες της ΕΣΤΙΑ City Services, είναι δίπλας σας και συνεχίζουν να σας προσφέρουν υπηρεσίες ευρωπαϊκών προδιαγραφών. Προτεραιότητα μας είναι η σωστή παράδοση του πετρελαίου στις  πιο  ανταγωνιστικές οι τιμές της αγοράς.</p>
                            <a className="link link-primary" href="/services/heatingoil">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 product product-skin-3">
                    <div className="product">
                        <div className="product__title">ΔΙΚΤΥΟ ΣΥΝΕΡΓΑΤΩΝ</div>

                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa fa-sitemap"></span>
                            <p className="product__descr">
                                H ΕΣΤΙΑ City Services  διαθέτει εξειδικευμένους συνεργάτες όλων των ειδικοτήτων, με σκοπό την άμεση και άριστη αντιμετώπιση κάθε σας ανάγκης.<br />
                                Σύμβουλοι κτιρίων /
                                Τεχνική Εξυπηρέτηση /
                                Νομική Υποστήριξη
                            </p>
                            <a className="link link-primary" href="/services/network">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3 product product-skin-2">
                    <div className="product">
                        <div className="product__title">ΠΛΗΡΩΜΗ ΛΟΓΑΡΙΑΣΜΩΝ</div>
                        <div className="product__body">
                            <span className="icon icon-primary icon-lg fa ">
                                <img src="/Images/ete.png" />
                            </span>
                            <p className="product__descr">Με τη νέα υπηρεσία i-bank Simple Pay Spot της Εθνικής Τράπεζας, μπορείτε να πληρώνετε στα γραφεία μας, εύκολα και γρήγορα, τους λογαριασμούς σας σε ΔΕΚΟ, τηλεπικοινωνίες, ασφαλιστικές εταιρείες και άλλους οργανισμούς.</p>
                            <a className="link link-primary" href="/services/payment">ΠΕΡΙΣΣΟΤΕΡΑ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default MainPage