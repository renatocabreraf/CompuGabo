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

function Historia() {

  return (
    <>
      <div>
        <Container>
         
        <h3
                style={{
                    fontFamily:"Mustang2",
                    fontSize: "25px",
                    textAlign:"CENTER"
                  }}
                >
                    nACIMIENTO de una lEYENDA
                </h3>
          <Container>
            <Row>
              <Col md="6">
                <h4
                style={{
                    fontSize: "18px"
                  }}
                >
                Ford Mustang nació en 1964 como un ambicioso proyecto 
                encabezado por Lee Iacocca, en el que se buscaba crear 
                un auto distinto a los demás; imponente con mencionar 
                sólo el nombre, con capacidades extraordinarias y muy 
                ligero. El resultado: uno de los vehículos más 
                importantes de la historia.
                Inicialmente, se consideraron nombres 
                de ciudades como Montecarlo, Mónaco e incluso Torino.
                
                Sin embargo, tras varios estudios se eligieron 
                nombres de animales como finalistas: 
                Cougar, Cheetah y Mustang, que había llamado la 
                atención anteriormente, aunque de una forma distinta.
                
                </h4>
              </Col>
              
              <Col md="6">
              <Container>
              <br /><br />
                <img
                  src={require("assets/img/428659926_122111627780220970_7305853224413527635_n.jpg")}

                ></img>
                </Container>
              </Col>
              

              <Col md="6">
                <br />
                <img
                  src={require("assets/img/434294727_122125037474220970_3335361720817508775_n.jpg")}

                ></img>
              </Col>
              <Col md="6">
            
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"right"
                  }}>
                El esperado vehículo fue bautizado como Mustang, 
                evocando a los caballos salvajes que habitan en 
                Norteamérica, pero también al avión de combate de la 
                Segunda Guerra Mundial del mismo nombre. El emblema 
                de Mustang encerraba un caballo salvaje corriendo 
                hacia el oeste. El nuevo deportivo de Ford vio la 
                luz un 17 de abril de 1964 en la Feria Mundial de 
                Nueva York, había nacido el Pony Car por excelencia 
                que redefinió el concepto de deportividad y marcó el 
                camino de uno de los segmentos más icónicos en la 
                historia del automovilismo. Ford Mustang no tardó mucho 
                tiempo en convertirse en un éxito absoluto.
                </h4>
                
              </Col>
              <Col md="6"
              style={{
                backgroundColor:"#13161f"
              }}>
                <br />
              <h3
                style={{
                    fontFamily:"Mustang2",
                    fontSize: "25px",
                    textAlign:"CENTER",
                    color:"white"
                  }}
                >
                    Carroll Shelby
                </h3>
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"center",
                    color:"white"
                  }}>
                    <img
                  src={require("assets/img/carroll-shelby.jpg")}

                ></img>
                <br/><br/>
                Carroll Shelby fue un piloto de automovilismo y 
                diseñador de automóviles estadounidense. Fue ganador 
                de las 24 Horas de Le Mans en 1959 con un Aston Martin
                y disputó ocho Grandes Premios de Fórmula 1 en las 
                temporadas 1958 y 1959. Después de retirarse de la 
                conducción en octubre de 1959 por razones de salud, 
                fundó el fabricante Shelby American.
                <br/>
                Son muchos los automóviles deportivos asociados en
                mayor o menor medida a Carroll Shelby. De su obra 
                son conocidos en el ámbito mundial los resultantes 
                de su trabajo para la Ford Motor Company en los 
                años 60 que dieron como resultado la saga de los 
                Shelby Mustang, los cuales han trascendido a lo 
                largo de los años, así como también uno de los 
                clásicos más populares, el Shelby Cobra.
                </h4>
              </Col>
              <Col md="6"
              style={{
                backgroundColor:"#13161f"
              }}>
                <br />
              <h3
                style={{
                    fontFamily:"Mustang2",
                    fontSize: "25px",
                    textAlign:"CENTER",
                    color:"white"
                  }}
                >
                    GT350/GT500
                </h3>
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"center",
                    color:"white"
                  }}>
                    <img
                  src={require("assets/img/439227618_122136364970220970_6910574984830485782_n.jpg")}

                ></img>
                <br/><br/>
                En conjunto con el diseñador, ingeniero y pionero Carroll Shelby, 
                Ford Motor Company trabajó en el desarrollo del Ford Mustang GT350, 
                un deportivo de altas prestaciones en carretera diseñado para las 
                pistas. Pronto se convirtió en uno de los Mustang más icónicos de 
                todos los tiempos por su alto rendimiento, su diseño y su 
                impresionante color blanco con las famosas franjas azules.
                <br/>
                Para 1967, el G.T. 350 cargó el K-Code de 289 plg³ 
                (4,7 litros) de alto rendimiento 'COBRA' con aluminio hilvanado. 
                El G.T. 500 fue agregado a la alineación, equipado con un motor
                 V8 "Ford Cobra Serie FE" de 428 plg³ (7 litros), con dos 
                 carburadores de cuatro gargantas Holley de 600 pies cúbicos 
                 por minuto (17,0 m³/min), sentado sobre un colector de admisión 
                 de aluminio de media altura.
                </h4>
              </Col>
              <img
                  src={require("assets/img/Evolucion.png")}

                ></img>

            <Col md="12">
<br/>
              <h3
                style={{
                    fontFamily:"Mustang2",
                    fontSize: "35px",
                    textAlign:"CENTER",
                   
                  }}
                >
                    mustang mach-E
                </h3>
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"center",
                   
                  }}>
                    <img
                  src={require("assets/img/2021-Mustang-Mach-E-GT-Performance-Edition_03.jpg")}

                ></img>
                <br/><br/>
                El Ford Mustang Mach-E es un vehículo utilitario deportivo 
                eléctrico del segmento D de cinco plazas, producido por el 
                fabricante estadounidense Ford Motor Company desde 2020.
                <br/>
                Dispone de un motor eléctrico en el eje trasero y otro en 
                el delantero que, según las versiones, le proporciona tracción
                en las cuatro ruedas, acoplados a una transmisión de una 
                sola marcha. La potencia combinada va de 188 a 338 kW 
                (256 a 460 CV) (252 a 453 HP). Acelera de 0 a 100 km/h 
                (0 a 62 mph) entre 3.5 y 6 segundos. Tiene una autonomía 
                entre 338 y 483 km (210 y 300 millas)
                </h4>
            </Col>  
            <Col md="6"
              style={{
                backgroundColor:"#13161f"
              }}>
                <br />
              <h3
                style={{
                    fontFamily:"Mustang2",
                    fontSize: "25px",
                    textAlign:"CENTER",
                    color:"white"
                  }}
                >
                    60 Aniversario
                </h3>
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"center",
                    color:"white"
                  }}>
                    <img
                  src={require("assets/img/60.png")}

                ></img>
                <br/><br/>
                El icónico muscle car Ford Mustang se ha convertido 
                en un símbolo de potencia y estilo, además de poseer 
                una de las líneas más emblemáticas de Ford Motor Company, 
                desde su debut en 1964 cuando revolucionó el mundo. 
                En su sexagésimo aniversario, celebra ser el Auto Deportivo 
                más vendido a nivel mundial durante diez años.
                <br/>
                Al celebrar su sexagésimo aniversario, Ford lanzará un 
                nuevo paquete de apariencia de edición limitada: Mustang 
                60th Anniversary, disponible en Mustang GT Premium 2025 
                con motor V8 de 5.0 litros, en versiones coupé o convertible. 
                Incluirá insignias, placa conmemorativa en el tablero y 
                características exteriores exclusivas, así como franjas y 
                rines inspirados en Mustang GT 1965.
                </h4>
              </Col>
              <Col md="6"
              style={{
                backgroundColor:"#13161f"
              }}>
                <br />
              <h3
                style={{
                    fontFamily:"Mustang2",
                    fontSize: "25px",
                    textAlign:"CENTER",
                    color:"white"
                  }}
                >
                    Dark Horse
                </h3>
                <h4
                  style={{
                    fontSize: "18px",
                    textAlign:"center",
                    color:"white"
                  }}>
                    <img
                  src={require("assets/img/darkhorse.png")}

                ></img>
                <br/><br/>
                Marcando el inicio de una nueva era y desarrollado para 
                romper paradigmas de forma poderosa y dinámica, Ford Mustang 
                Dark Horse 2024 es el auto deportivo de líneas elegantes cuyo 
                diseño está optimizado aerodinámicamente para destacar por 
                su velocidad y deportividad en las pistas. Ford Mustang Dark 
                Horse 2024 es la Nueva Definición del Poder.
                <br/>
                El Ford Mustang Dark Horse cuenta con un motor Coyote V8 de
                cuarta generación naturalmente aspirado de 5.0 litros que produce
                500 HP y 418 lb-pie de torsión, equivalente a 100 hp/L para un
                manejo visceral.
                <br/>
                El Ford Mustang Dark Horse es un nuevo paso hacia el futuro, el cambio
                y la evolución del muscle car más exitoso de la historia.
                </h4>
              </Col>  
            </Row>
            
          </Container>

         
        </Container>
        
      </div>
    </>
  );
}

export default Historia;