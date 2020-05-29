import React from "react";
import { Link } from "react-router-dom";

export const MainFooter = () => {
  return (
    <div>
      <footer className="bg-light py-5">
        <div className="container">
          <div className="small text-center text-muted">
            Copyright © 2020 - GG noob
            <br />
            <Link to={"/tos"}> Όροι χρήσης</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
