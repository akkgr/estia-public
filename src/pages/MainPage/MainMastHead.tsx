import React from "react";

export const MainMastHead = () => {
  return (
    <div>
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className=" font-weight-bold text-white">
                ΕΣΤΙΑ City Services
              </h1>
              <hr className="divider my-4" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className=" font-weight-light mb-5" style={{ color: "white" }}>
                Με εμπειρία πάνω από 30 χρόνια η ΕΣΤΙΑ City Services πρωτοπορεί
                με τις υπηρεσίες της και τον επαγγελματισμό της. Παρέχει μια
                σειρά από υπηρεσίες για τα κτίρια που καλύπτουν κάθε ανάγκη. Το
                έμπειρο προσωπικό της είναι καθημερινά δίπλα στους πελάτες για
                να εξυπηρετεί και να δίνει λύσεις σε κάθε τους πρόβλημα.
              </p>
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Προσφορα
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
