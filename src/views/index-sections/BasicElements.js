import React from "react";
// react plugin used to create switch buttons


// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BasicElements() {

  return (
    <>
      <div className>
        <Container>
          <h3
            style={{
              fontFamily: "Mustang2",
              textAlign: "center",
              fontSize: "25px"
            }}>Compugabo</h3>

          <Container>
            <Row>

              <Col md="6">
               
              </Col>
              
              <Col md="6">
              
              </Col>
              <Col md="12">
                            <br/>
                         <hr/>
                         </Col>
              <Col md="6">
                <br />
                
              </Col>
              <Col md="6">
                <br />
               
               
                <div
                  style={{
                    textAlign: "center"
                  }}><Button className="btn-round" color="info" type="button"
                    textAlign="center" href="/">
                    Conocer Más
                  </Button></div>
                  <Col md="12">
                           
                         <hr/>
                         </Col>
              
                <h3
                  style={{
                    fontFamily: "Mustang2",
                    fontSize: "19px",
                    textAlign: "center"
                  }}>
                 
                </h3>
             
                <div
                  style={{
                    textAlign: "center"
                  }}><Button className="btn-round" color="info" type="button"
                    textAlign="center" href="/">
                    Conocer Más
                  </Button></div>
              </Col>
            </Row>
          </Container>

         
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
