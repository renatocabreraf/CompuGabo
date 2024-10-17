import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import BlogHeader from "components/Headers/BlogHeader.js";

import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

import Talleres from "./index-sections/Talleres.js";
import Tienda from "./index-sections/Tienda.js";
import StangBlog from "./index-sections/StangBlog.js";



function Blog() {
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
      <BlogHeader/>
      <div className="wrapper">
     <br/><br/><br/><br/>
          <StangBlog/>
        </div>
        <DarkFooter />
 
    </>
  );
}

export default Blog;
