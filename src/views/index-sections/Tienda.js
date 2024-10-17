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

function Tienda() {

    return (
        <>
            <div>

                <Container>
                    <h4
                        style={{
                            fontSize: "18px"
                        }}
                    >
                        ¿Tienes piezas, equipo o hasta un Mustang que quieras vender con la comunidad?
                        ¡Éste es el espacio indicado para poder hacerlo! si quieres publicarlo con la
                        comunidad de Mustang Club Guatemala, comunicate con nosotros para poder hacerlo.
                    </h4>
                    <Col md="12">
                            <br/>
                         <hr/>
                         </Col>
                    <Container>
                        <Row>
                            <Col md="6">
                                <Container>
                                    
                                </Container>

                            </Col>

                            <Col md="6">
                                

                            </Col>
                            <Col md="6">
                                <Container>
                                    
                                </Container>

                            </Col>

                            <Col md="6">
                                

                            </Col>
                        

                            
                        </Row>

                    </Container>


                </Container>

            </div>
            <br/><br/>
        </>
    );
}

export default Tienda;