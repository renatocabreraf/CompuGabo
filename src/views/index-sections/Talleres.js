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

function Talleres() {

    return (
        <>
            <div>

                <Container>
                    <h4
                        style={{
                            fontSize: "18px"
                        }}
                    >
                        A lo largo de los años, múltiples personas han sido parte del Mustang Club Guatemala
                        y las experiencias crecen vez con vez, haciendo de esta comunidad, una verdadera familia,
                        un grupo de amigos que disfruta de los autos. Pero no estamos excentos a sufrir fallas
                        en los vehículos, es por ello que hacemos algunas recomendaciones, basados en las buenas
                        experiencias con los Mustang trabajados.
                    </h4>
                    <Col md="12">
                            <br/>
                         <hr/>
                         </Col>
                    <Container>
                        <Row>
                            <Col md="6">
                                <Container>
                                    <br /><br />
                                    <img
                                        src={require("assets/img/Torq.png")}

                                    ></img>
                                </Container>

                            </Col>
                            

                            <Col md="6">
                                <p
                                    style={{
                                        fontSize: "18px"
                                    }}
                                >
                                    TorQ
                                    <br />
                                    Taller automotriz dedicado a la atención de vehículos convencionales y de alto desempeño,
                                    mantenimientos y electromecánicos.
                                    <br />
                                    Zona 5, Ciudad de Guatemala
                                    <br />
                                    Tel: 4208-2222
                                    <br />
                                    Email: torqgt@gmail.com
                                </p>

                            </Col>
                            <Col md="6">
                                <Container>
                                    <br /><br />
                                    <img
                                        src={require("assets/img/villatoro.png")}

                                    ></img>
                                </Container>

                            </Col>

                            <Col md="6">
                                <p
                                    style={{
                                        fontSize: "18px"
                                    }}
                                >
                                    Taller MVH
                                    <br />
                                    Taller automotriz dedicado a la atención de vehículos y realización de mantenimiento.
                                    <br />
                                    7ma calle 13-85, Zona 7, Ciudad de Guatemala
                                    <br />
                                    Tel: 5801-4331
                                    <br />
                                    Email: villatorocarlos552@gmail.com
                                </p>

                            </Col>
                            <Col md="12">
                            <br/>
                         <hr/>
                         </Col>
                            <p
                                style={{
                                    fontSize: "18px"
                                }}
                            >
                                Muchas veces puede resultar complicado comprar piezas, tanto mecánicas como estéticas para tu
                                Ford Mustang. Es por eso que te hacemos la recomendación de estas páginas, para que puedas traer
                                tus partes desde Estados Unidos.
                            </p>


                            <Col md="4">

                                <a href="https://www.americanmuscle.com"><img
                                    src={require("assets/img/AM.png")}
                                ></img>
                                </a>

                            </Col>
                            <Col md="4">
                                <a href="https://www.cjponyparts.com"><img
                                    src={require("assets/img/CJ.png")}
                                ></img>
                                </a>
                            </Col>
                            <Col md="4">
                                <a href="https://www.lethalperformance.com"><img
                                    src={require("assets/img/lethal.png")}
                                ></img>
                                </a>
                            </Col>
                            <p
                                style={{
                                    fontSize: "18px",
                                    textAlign: "center"
                                }}
                            >
                                Si buscas partes de alto rendimiento, puede que tengas problemas en 
                                conseguir piezas en Guatemala, así que debes dirigirte a las siguientes páginas:
                            </p>
                            <Col md="4">

                                <a href="https://www.roushperformance.com"><img
                                    src={require("assets/img/roush.png")}
                                ></img>
                                </a>

                            </Col>
                            <Col md="4">
                                <a href="https://www.steeda.com"><img
                                    src={require("assets/img/steeda.png")}
                                ></img>
                                </a>
                            </Col>
                            <Col md="4">
                                <a href="https://performanceparts.ford.com"><img
                                    src={require("assets/img/fp.png")}
                                ></img>
                                </a>
                            </Col>

                            
                        </Row>

                    </Container>


                </Container>

            </div>
            <br/><br/>
        </>
    );
}

export default Talleres;