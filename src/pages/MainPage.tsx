import React from "react";
import { MainServices } from "./MainPage/MainServices";
import { MainContact } from "./MainPage/MainContact";
import { MainMastHead } from "./MainPage/MainMastHead";
import { Divider } from "../layout/common/Divider";
import { MainAbout } from "./MainPage/MainAbout";

function MainPage() {
  return (
    <div style={{ height: "100%" }}>
      <MainMastHead />
      <div className="container-fluid text-center well-xs well-sm-inset-1 mmedia">
        <br />
        <br />
        <MainAbout />
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <MainServices />
        <Divider /> <br />
        <MainContact />
      </div>
    </div>
  );
}

export default MainPage;
