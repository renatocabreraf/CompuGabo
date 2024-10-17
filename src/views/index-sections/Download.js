import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col md="4">
              <h3
              style={{
                fontFamily:"Mustang2",
                fontSize:"30px",
                textAlign:"center"
              }}>¡Contáctanos!</h3>
              <h5 >
              </h5>
              <div
              style={{
                textAlign:"center"
              }}>
              
              </div>
            </Col>
            <Col md="8">
            
            </Col>
            
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="6">
            
          
          
            </Col>
            <Col className="ml-auto mr-auto" md="6">
              </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3
              style={
                {
                  fontFamily:"Mustang4"
                }
              }>¡Síguenos en nuestras redes sociales!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              
               
              
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/Compugaboamatitlan"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Da Like y Comparte
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
