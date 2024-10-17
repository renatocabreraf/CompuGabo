import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TallerHeader from "components/Headers/TallerHeader.js";

import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Talleres from "./index-sections/Talleres.js";



function Servicio() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <TallerHeader/>
      <div className="wrapper">
     <br/><br/><br/><br/>
          <Talleres/>
        </div>
        <DarkFooter />
 
    </>
  );
}

export default Servicio;
