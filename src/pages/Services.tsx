import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineClear, AiOutlineBug } from "react-icons/ai";
import { FaGasPump, FaFireExtinguisher, FaRegBuilding } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { BsTools } from "react-icons/bs";
import ServiceCard from "../layout/common/ServiceCard";

function Services() {
  return (
    <div>
      <br />
      <br />
      <h4>Υπηρεσίες</h4>
      <hr className="divider my-4" />
      <p>Οι διαθέσιμες υπηρεσίες μας, θα ικανοποιήσουν κάθε σας ανάγκη</p>
      <br />
      <div
        className="row text-center "
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="col-sm-3">
          <ServiceCard
            icon={<GoChecklist style={{ color: "#faad14" }} size="75" />}
            title={"Έκδοση Κοινοχρήστων"}
            desc={
              "Το τμήμα μηχανογράφησης δημιούργησε ένα αξιόπιστο, πλήρες και  αναλυτικό πρόγραμμα έκδοσης κοινοχρήστων. Δώστε μας τηλεφωνικά τα  έξοδα σας, και θα σας τα παραδώσουμε σε 24 ώρες."
            }
            page={
              <Link to={"/services/koinoxrista"}>
                {" "}
                <p style={{ color: "#faad14" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
        <div className="col-sm-3">
          <ServiceCard
            icon={<AiOutlineBug style={{ color: "#a0d911" }} size="75" />}
            title={"Απολυμάνσεις"}
            desc={
              " H ΕΣΤΙΑ City Services, με επαγγελματίες εφαρμοστές απολυμάνσεων και την επίβλεψη εξειδικευμένου επιστήμονα, αναλαμβάνει την απολύμανση οποιουδήποτε χώρου, με..."
            }
            page={
              <Link to={"/services/disinfection"}>
                {" "}
                <p style={{ color: "#a0d911" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
        <div className="col-sm-3">
          <ServiceCard
            icon={<FaRegBuilding style={{ color: "#13c2c2" }} size="75" />}
            title={"Διαχειρίσεις Κτιρίων"}
            desc={
              "Η ΕΣΤΙΑ City services, αναλαμβάνει με υπευθυνότητα και επαγγελματική συνέπεια την διαχείριση της πολυκατοικίας σας και σας απαλλάσσει από οποιαδήποτε ταλαιπωρία που..."
            }
            page={
              <Link to={"/services/managebuilding"}>
                {" "}
                <p style={{ color: "#13c2c2" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
        <div className="col-sm-3">
          <ServiceCard
            icon={<AiOutlineClear style={{ color: "#eb2f96" }} size="75" />}
            title={"Καθαρισμοί"}
            desc={
              " Οι έμπειροι συνεργάτες της ΕΣΤΙΑ City Services, αναλαμβάνουν με υπευθυνότητα την καθαριότητα των κοινόχρηστων χώρων της πολυκατοικίας ή των επαγγελματικών χώρων σας."
            }
            page={
              <Link to={"/services/cleaning"}>
                {" "}
                <p style={{ color: "#eb2f96" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
      </div>
      <br />
      <br />
      <div
        className="row text-center "
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        <div className="col-sm-3">
          <ServiceCard
            icon={<FaFireExtinguisher style={{ color: "#fa541c" }} size="75" />}
            title={"Πυροσβεστήρες"}
            desc={
              " Η εταιρεία μας ανέκαθεν ευαισθητοποιημένη στον παράγοντα ασφάλεια παρέχει στους πελάτες της, πυροσβεστήρες με τα υψηλότερα standards ποιότητας τόσο υλικών όσο και ασφάλειας."
            }
            page={
              <Link to={"/services/extinguisher"}>
                {" "}
                <p style={{ color: "#fa541c" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
        <div className="col-sm-3">
          <ServiceCard
            icon={<FaGasPump style={{ color: "#52c41a" }} size="75" />}
            title={"Πετρέλαιο θέρμανσης"}
            desc={
              "  Οι συνεργάτες της ΕΣΤΙΑ City Services, είναι δίπλας σας και συνεχίζουν να σας προσφέρουν υπηρεσίες ευρωπαϊκών προδιαγραφών. Προτεραιότητα μας είναι η σωστή παράδοση του πετρελαίου στις πιο ανταγωνιστικές οι τιμές της αγοράς."
            }
            page={
              <Link to={"/services/heatingoil"}>
                {" "}
                <p style={{ color: "#52c41a" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
        <div className="col-sm-3">
          <ServiceCard
            icon={<BsTools style={{ color: "#40a9ff" }} size="75" />}
            title={"Δίκτυα συνεργατών"}
            desc={
              " H ΕΣΤΙΑ City Services διαθέτει εξειδικευμένους συνεργάτες όλων των ειδικοτήτων, με σκοπό την άμεση και άριστη αντιμετώπιση κάθε σας ανάγκης. Σύμβουλοι κτιρίων / Τεχνική Εξυπηρέτηση / Νομική Υποστήριξη"
            }
            page={
              <Link to={"/services/network"}>
                <p style={{ color: "#40a9ff" }}>Περισσότερα...</p>
              </Link>
            }
          />
        </div>
        <div className="col-sm-3">
          <ServiceCard
            icon={<GiTakeMyMoney style={{ color: "#722ed1" }} size="75" />}
            title={"Πληρωμή λογαριασμών"}
            desc={
              " Με τη νέα υπηρεσία i-bank Simple Pay Spot της Εθνικής Τράπεζας, μπορείτε να πληρώνετε στα γραφεία μας, εύκολα και γρήγορα, τουςλογαριασμούς σας σε ΔΕΚΟ, τηλεπικοινωνίες, ασφαλιστικές εταιρείες και άλλους οργανισμούς."
            }
            page={
              <Link to={"/services/heatingoil"}>
                {" "}
                <p className="servicesText" style={{ color: "#722ed1" }}>
                  Περισσότερα...
                </p>
              </Link>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
