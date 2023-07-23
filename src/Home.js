import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import PageHeader from './PageHeader.js';
import PageFooter from './PageFooter.js';

import img1 from './images/homeimg1.jpg';
import img2 from './images/homeimg2.jpg';
import img3 from './images/homeimg3.jpg';
import img4 from './images/homeimg4.jpg';
import img5 from './images/homeimg5.jpg';
import img6 from './images/homeimg6.jpg';


function HomeCenter(props) {
  return (
 <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={props.im1} alt={props.lalt1} />
        <Carousel.Caption>
          <h3> {props.label1} </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={props.im2} alt={props.lalt2} />
        <Carousel.Caption>
          <h3> {props.label2} </h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

  );
}

function HomeF() {
  return (
    <div>
    
      <Container>
        <Row>
      
          <Col>
            <Row>
              <HomeCenter label1="" label2="" im1={img1} im2={img2} lalt1="Apprendre Experimenter" lalt2="Apprendre l'équipement avancé"/>
            </Row>
            <Row> <h3>Apprendre Experimenter</h3> </Row>
          </Col>

          <Col>
            <Row>
              <HomeCenter label1="" label2="" im1={img3} im2={img4} lalt1="Analyse d'échantillon" lalt2="Échantillon de sol, échantillon de miel, échantillon d'eau"/>
            </Row>
            <Row> <h3>Analyse d'échantillon</h3> </Row>
          </Col>
          
          <Col>
            <Row>
              <HomeCenter label1="" label2="" im1={img5} im2={img6} lalt1="Utiliser les installations du laboratoire" lalt2="Utiliser un équipement avancé"/>
            </Row>
            <Row> <h3>Utiliser le laboratoire</h3> </Row>
          </Col>
          
        </Row>
      </Container>
      <br/>
      <PageFooter />
     </div>
  );
}


function HomeE() {
  return (
    <div>
      
      <Container>
        <Row>
      
          <Col>
            <Row>
              <HomeCenter label1="" label2="" im1={img1} im2={img2} lalt1="Learn Experiments" lalt2="Learn Advanced Equipment"/>
            </Row>
            <Row> <h3>Learn Experiments</h3> </Row>
          </Col>

          <Col>
            <Row>
              <HomeCenter label1="" label2="" im1={img3} im2={img4} lalt1="Sample Analysis" lalt2="Soil Sample, Honey Sample, Water Sample"/>
            </Row>
            <Row> <h3>Sample Analysis</h3> </Row>
          </Col>
          
          <Col>
            <Row>
              <HomeCenter label1="" label2="" im1={img5} im2={img6} lalt1="Use Lab Facilities" lalt2="Use Advanced Equipment"/>
            </Row>
            <Row> <h3>Use Laboratory Facilities</h3> </Row>
          </Col>
          
        </Row>
      </Container>
      <br/>
      <PageFooter />
     </div>
  );
}


function Home() {
  return(
  <>
    {window.english && <HomeE/>}
    {!window.english && <HomeF/>}
  </>
  );
}


export default Home;