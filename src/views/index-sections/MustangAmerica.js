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

function MustangAmerica() {

  return (
    <>
      <div>
        <Container>
         
        
          <Container>
            <Row>
              <Col md="6">
                <h4
                style={{
                    fontSize: "18px"
                  }}
                >
                Era el año 1976. Ted Turner compra los Bravos de Atlanta. El transporte supersónico 
                Concorde comienza vuelos comerciales. Debuta el programa de televisión Laverne y Shirley. 
                La música disco está tomando al país por sorpresa. George Bush se convierte en el Director 
                de la CIA. Willie Shoemaker gana su carrera número 7000. Patty Hearst es condenada por 
                robo a mano armada. Cuatro hombres celebraron una reunión el 9 de marzo en Stone Mountain 
                Park, Georgia, y así fundaron el Mustang Club of America.
                Stan Jones, George White, Gary Goddard y Tom Taylor se habían reunido unas semanas antes, 
                discutiendo la idea de formar un club para entusiastas del Mustang. Se colocó un anuncio en 
                el Atlanta Journal-Constitution. Un total de diez personas asistieron a la primera reunión 
                organizativa en marzo. Un mes después, el 11 de abril, se celebró la primera reunión oficial 
                para establecer un Club Nacional de Mustang, dedicado a los Ford Mustangs de 1965 a 1973.
                
                </h4>
              </Col>
              
              <Col md="6">
              <Container>
              <br /><br />
                <img
                  src={require("assets/img/432536921_122118545984220970_7655665117461876705_n.jpg")}

                ></img>
                </Container>
              </Col>
              

              <Col md="6">
                <br />
                <img
                  src={require("assets/img/434293293_122125037414220970_4731575629954434643_n.jpg")}

                ></img>
              </Col>
              <Col md="6">
            
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"right"
                  }}>
                Más de cien personas asistieron a la segunda reunión del club en mayo. Las cuotas
                de membresía eran de $10, luego se elevaron a $12 en julio. Para agosto, el Mustang 
                Club of America celebró su primer encuentro Gran Nacional en Stone Mountain Park, c
                on más de 100 participantes de 20 estados. Para ese entonces, la membresía era de más 
                de 250 personas.
                El nacimiento de MCA fue un torbellino, ya que el club cumplió con una necesidad latente 
                entre los entusiastas del Mustang. Aunque había otros clubes incipientes de Mustang, 
                incluyendo el Classic Mustang Association International, ninguno de ellos sobrevivió 
                más de un año. ¿Por qué tuvo éxito MCA y otros no? Esa es una pregunta muy difícil de 
                responder. Los intereses de los propietarios de Ford Mustang van desde la restauración 
                de concursantes o de stock hasta autos de calle altamente modificados para carreras en 
                pista y arrancones. Intentar satisfacer la gran diversidad de intereses de los entusiastas 
                del Mustang es una tarea desalentadora. Los primeros años de MCA enfatizaron la restauración 
                de autos a condición de fábrica según las reglas de juzgamiento publicadas para los shows 
                sancionados por MCA, los cuales estuvieron restringidos a la participación de miembros de 
                MCA durante varios años.
                </h4>
                
              </Col>

            <Col md="12">
<br/>
              
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"center",
                   
                  }}>
                    <img
                  src={require("assets/img/434043495_122123634134220970_4068313279592299538_n.jpg")}

                ></img>
                <br/><br/>
                El Mustang Club of America comenzó como un club dedicado únicamente a la primera 
                generación de Mustangs: los de 1964.5 hasta 1973. En 1986, MCA preguntó a sus miembros 
                y clubes si MCA debería expandirse a Mustangs de todos los años, en un intento por 
                aumentar la membresía y facilitar el patrocinio corporativo de Ford. Casi una 
                mayoría de dos a uno de los miembros dijo no a esta idea. A pesar de los deseos de 
                los miembros de MCA, la Junta Directiva con visión de futuro aprobó el cambio de todos 
                modos. MCA también comenzó a cambiar su enfoque del juzgamiento de concursos a Mustangs 
                modificados, reflejando el interés general de la comunidad. Hoy en día, treinta años después 
                de la fundación de MCA, MCA abarca Mustangs de stock, Shelbys, Roushes, Saleens y Steedas 
                de todos los años, y Mustangs modificados, eventos de pista y conducción, y está comenzando
                a relacionarse con otros clubes y eventos nacionales, como el All Ford Show en Carlisle, 
                eventos del Shelby American Automobile Club y el Antique Automobile Club of America. MCA 
                sanciona tres shows Nacionales y uno Gran Nacional por año, y celebra una Celebración del 
                Aniversario del Mustang cada cinco años, y la propia Celebración del Aniversario de MCA, 
                también cada cinco años.
                </h4>
            </Col>
            </Row>
            
          </Container>

         
        </Container>
        
      </div>
    </>
  );
}

export default MustangAmerica;