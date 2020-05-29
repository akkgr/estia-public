import React from "react";
import { TeamSection } from "./TeamSection";
import { Advantages } from "./Advantages";
import { AboutUsText } from "./AboutUsText";

function AboutUs() {
  return (
    <div>
      <div className="container well-xs well-sm-inset-1">
        <br />
        <br />
        <div className="row flow-offset-1 txtalign">
          <div className="col-md-6 col-sm-6 txtalign ppading ">
            <AboutUsText />
          </div>
          <div className="col-md-6 col-sm-6 ">
            <Advantages />
          </div>
        </div>
      </div>
      <TeamSection />
    </div>
  );
}

export default AboutUs;
