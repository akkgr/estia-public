import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";

export const MainContact = () => {
  return (
    <div>
      <div className="container-fluid well-xs well-sm-inset-1">
        <h3>Επικοινωνήστε τώρα μαζί μας</h3>
        <hr className="divider my-4" />
        <br />
        <div className="row d-flex justify-content-center">
          <div className="col-sm-6 ">
            <div className="row">
              <div className="col-sm-4">
                <AiOutlinePhone style={{ color: "#f4623a" }} size="75" />
                <br />
                <p>
                  210 76 64 676
                  <br />
                  210 76 64 677
                </p>
              </div>
              <div className="col-sm-4">
                <FaAddressBook style={{ color: "#f4623a" }} size="75" />
                <br />
                <p>
                  Νικ. Αρώνη 34
                  <br />
                  16231, Βύρωνας
                </p>
              </div>
              <div className="col-sm-4">
                <AiOutlineMail style={{ color: "#f4623a" }} size="75" />
                <br />
                <p> e-info@cityservices.gr</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Comment"
                  rows={5}
                ></textarea>
                <br />
                <div className="row">
                  <div className="col-sm-12 form-group">
                    <button
                      className="btn btn-primary pull-right"
                      type="submit"
                    >
                      Αποστολή
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
