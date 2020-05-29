import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUS/AboutUs";
import FireFighters from "./pages/SpecificServices/FireFighters";
import Cleaning from "./pages/SpecificServices/Cleaning";
import HeatingOil from "./pages/SpecificServices/HeatingOil";
import BuildingAdmin from "./pages/SpecificServices/BuildingAdmin";
import Contact from "./pages/Contact";
import AssociatesNetwork from "./pages/SpecificServices/AssociatesNetwork";
import AccountPayments from "./pages/SpecificServices/AccountPayments";
import Services from "./pages/Services";
import { Disinfection } from "./pages/SpecificServices/Disinfection";
import Koinoxrista from "./pages/SpecificServices/Koinoxrista";
import Tos from "./pages/Tos";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <MainPage />
      </Route>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/tos">
        <Tos />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/services/extinguisher">
        <FireFighters />
      </Route>
      <Route exact path="/services/cleaning">
        <Cleaning />
      </Route>
      <Route exact path="/services/disinfection">
        <Disinfection />
      </Route>
      <Route exact path="/services/network">
        <AssociatesNetwork />
      </Route>
      <Route exact path="/services/payment">
        <AccountPayments />
      </Route>
      <Route exact path="/services/koinoxrista">
        <Koinoxrista />
      </Route>
      <Route exact path="/services/heatingoil">
        <HeatingOil />
      </Route>
      <Route exact path="/services/buildingadmin">
        <BuildingAdmin />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default Routes;
