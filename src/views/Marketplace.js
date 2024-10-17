import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TiendaHeader from "components/Headers/TiendaHeader.js";

import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Talleres from "./index-sections/Talleres.js";
import Tienda from "./index-sections/Tienda.js";



function Marketplace() {
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
      <TiendaHeader/>
      <div className="wrapper">
     <br/><br/><br/><br/>
          <Tienda/>
        </div>
        <DarkFooter />
 
    </>
  );
}

export default Marketplace;
