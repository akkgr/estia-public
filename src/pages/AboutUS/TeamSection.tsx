import React from "react";
import Photo1 from "../../layout/photos/vasiliki_pantzia.jpg";
import Photo2 from "../../layout/photos/ioanna_kanta.jpg";
import Photo3 from "../../layout/photos/giorgos_tsilis.jpg";
import Photo4 from "../../layout/photos/kostas_vournas.jpg";
import Photo5 from "../../layout/photos/argiris_nikolaou.jpg";
import Photo6 from "../../layout/photos/xristos_fourtounis.jpg";
import Photo7 from "../../layout/photos/giannis_pantzias.jpg";
import AvatarCard from "../../layout/common/AvatarCard";

export const TeamSection = () => {
  return (
    <div>
      <div className="container well-sm ">
        <h2 style={{ color: "#f4623a" }}>Η ομάδα μας</h2>
        <hr className="divider my-4" />
        <div className="row flow-offset-1 text-xs-center slideanim">
          <div className="col-md-3 col-xs-6">
            <img
              src={Photo1}
              alt="Vassiliki Pantzia"
              style={{ borderRadius: "50%" }}
            />
            <div className="box-skin-1 ">
              <h5>ΠΑΝΤΖΙΑ Β. ΒΑΣΙΛΙΚΗ </h5>
              <p>Manager & Σύμβουλος Διαχειρίσεων</p>
              <p>
                Οικονομολόγος, Απόφοιτος Εθνικού & Καποδιστριακού Πανεπιστημίου
                Αθηνών{" "}
              </p>
              <p>Msc Finanial Economics, Erasmus University of Rotterdam</p>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <img
              src={Photo2}
              alt="Ioanna Kanta"
              style={{ borderRadius: "50%" }}
            />
            <div className="box-skin-1 ">
              <h5>ΚΑΝΤΑ Ο. ΙΩΑΝΝΑ</h5>
              <p>Σύμβουλος Διαχειρίσεων & Τεχνική Υποστήριξη</p>
              <p>
                Φιλόλογος, Απόφοιτος Εθνικού & Καποδιστριακού Πανεπιστημίου
                Αθηνών
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <img
              src={Photo3}
              alt="Giorgos Tsilis"
              style={{ borderRadius: "50%" }}
            />
            <div className="box-skin-1">
              <h5>ΤΣΙΛΗΣ ΓΙΩΡΓΟΣ</h5>
              <p>Σύμβουλος Διαχειρίσεων & Υπεύθυνος Επιστήμονας Απολυμάνσεων</p>
              <p>Τεχνολόγος Γεωπόνος</p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <img
              src={Photo4}
              alt="Kostas Vournas"
              style={{ borderRadius: "50%" }}
            />
            <div className="box-skin-1">
              <h5>ΒΟΥΡΝΑΣ ΚΩΣΤΑΣ</h5>
              <p>Επόπτης Κτιρίων & Διανομέας - Εισπράκτορας</p>
            </div>
          </div>
        </div>
        <div className="row flow-offset-1 text-xs-center slideanim">
          <div className="col-md-4 col-xs-6">
            <AvatarCard
              photo={Photo5}
              name={<h5>ΝΙΚΟΛΑΟΥ ΑΡΓΥΡΗΣ</h5>}
              duty={
                <div>
                  <p>Επόπτης Κτιρίων & Διανομέας – Εισπράκτορας</p>
                </div>
              }
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <AvatarCard
              photo={Photo6}
              name={<h5>ΦΟΥΡΤΟΥΝΗΣ ΧΡΗΣΤΟΣ</h5>}
              duty={
                <div>
                  <p>Διανομέας – Εισπράκτορας & Απολυμαντής</p>
                </div>
              }
            />
          </div>
          <div className="col-md-4 col-xs-6">
            <AvatarCard
              photo={Photo7}
              name={<h5>ΠΑΝΤΖΙΑΣ Β. ΓΙΑΝΝΗΣ</h5>}
              duty={
                <div>
                  <p>Υπεύθυνος Καθαριοτήτων</p>
                  <p>Απόφοιτος Τμήματος Διοίκησης Επιχειρήσεων </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
