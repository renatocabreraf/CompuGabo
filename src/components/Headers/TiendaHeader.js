/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function TiendaHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/431280399_122115903830220970_261231179427592337_n.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <img
              src={require("assets/img/Logos2.png")}
              style={{
                width:"50%"
              }}
            ></img>
            
            <h1 className="h1-seo"
            style={{
              fontFamily:'Mustang'
            }}> 
            <br/>market place</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TiendaHeader;
