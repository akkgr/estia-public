import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutUs from "./pages/AboutUs";
import FireFighters from "./pages/Services/FireFighters";
import Cleaning from "./pages/Services/Cleaning";
import HeatingOil from "./pages/Services/HeatingOil";
import BuildingAdmin from "./pages/Services/BuildingAdmin";
import Contact from "./pages/Contact";
import AssociatesNetwork from "./pages/Services/AssociatesNetwork";
import AccountPayments from "./pages/Services/AccountPayments";
import Services from "./pages/Services"
import { Disinfection } from "./pages/Services/Disinfection";

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