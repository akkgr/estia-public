import React from "react";
import { ServicesBar } from "../../components/ServicesBar";
import webBanking from "../../layout/photos/webBanking.jpg";
import { BsBuilding } from "react-icons/bs";

function AccountPayments() {
  return (
    <div
      className="container well-xs well-sm-inset-1 bg-secondary-2"
      style={{ paddingTop: "5%" }}
    >
      <br />
      <div className="container-fluid">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-8">
            <h2 style={{ color: "#f4623a" }}>Πληρωμή Λογαριασμών</h2>
            <p>
              Με τη νέα υπηρεσία i-bank Simple Pay Spot της Εθνικής Τράπεζας,
              μπορείτε να πληρώνετε, εύκολα και γρήγορα, τους λογαριασμούς σας
              σε ΔΕΚΟ (ρεύμα, νερό κ.ά.), τηλεπικοινωνίες (σταθερή και κινητή
              τηλεφωνία, internet), ασφαλιστικές εταιρείες και άλλους
              οργανισμούς, χωρίς να περιμένετε σε ουρές. Αρκεί να επισκεφθείτε
              το γραφείο μας, Ν. Αρώνη 34, Βύρωνα.
            </p>

            <p>
              Με τον τρόπο αυτό, μπορείτε να εξοφλείτε τους λογαριασμούς σας
              οποιαδήποτε ώρα, κοντά στο σπίτι σας και, κυρίως, με τη σιγουριά
              και ασφάλεια που παρέχει η Εθνική Τράπεζα.
            </p>
          </div>
          <div className="col-sm-4">
            <br />
            <BsBuilding size="150" style={{ color: "#f4623a" }} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <br />
            <img src={webBanking} alt="web bank" width="350" />
          </div>
          <div className="col-sm-8">
            <h2 style={{ color: "#f4623a" }}>
              Πώς πληρώνετε τους λογαριασμούς σας
            </h2>
            <p>
              Μετά την πραγματοποίηση της συναλλαγής, λαμβάνετε απόδειξη
              πληρωμής από την Εθνική Τράπεζα. Η απόδειξη αναγράφει ένα μοναδικό
              αριθμό, ώστε να μπορείτε ανά πάσα στιγμή να αναζητήσετε την τύχη
              της πληρωμής σας, καλώντας το Κέντρο Τηλεφωνικής Εξυπηρέτησης της
              Εθνικής Τράπεζας στο 18 18 18. Όπως ακριβώς θα κάνατε αν είχατε
              πληρώσει από οποιοδήποτε Κατάστημα της Τράπεζας ή μέσω των
              ηλεκτρονικών καναλιών i-bank (i-bank Internet, Phone & Mobile
              Banking, ΑΤΜ, www.simplepay.gr)!
            </p>
            <p>
              Για την καλύτερη εξυπηρέτηση των καθημερινών σας αναγκών, οι
              παρεχόμενες συναλλαγές εμπλουτίζονται συνεχώς.
            </p>
            <br />
            <p>
              (*) Όλες οι συναλλαγές μέσω της υπηρεσίας i-bank Simple Pay Spot
              χρεώνονται με προμήθεια 1 ευρώ.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr style={{ border: "0", borderTop: "1px solid #f4623a" }} />

      <div className="slideanim">
        <ServicesBar />
      </div>
    </div>
  );
}

export default AccountPayments;
