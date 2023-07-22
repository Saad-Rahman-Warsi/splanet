import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PageFooterInfoE() {
  return (
    <Container fluid style={{
          backgroundColor: '#deded5', textAlign: 'left', marginTop: '5px'
        }}>
      <Row style={{padding: '10px'}}>
        <Col xs={6}>
          <p><b>SciPlanet</b></p>
          <p> Welcome to our state-of-the-art scientific facility, where we offer various fully-equipped 
              laboratories for hands-on learning and experiments. Our team provides expert guidance, and we 
              also offer sample analysis services. Once you are familiar with our protocols, you are free 
              to use our facilities for your own research. Join us on this exciting journey of scientific 
              exploration and innovation! </p>
        </Col>
        <Col xs={3}>
          <p><b>contact</b></p>   
          <p>Unit-2, 2445 Clover Street. <br/>Ottawa</p>
          <p>Email : sciplanet@gmail.com</p>
        </Col>
        <Col xs={3}>
          <p><b>opening hours</b></p>
          <p>Mon - Fri : 11 AM - 7 PM<br/>Sat - Sun : 8 AM - 7 PM</p>
        </Col>
      </Row>
    </Container>
  );
}


function PageFooterInfoF() {
  return (
    <Container fluid style={{
          backgroundColor: '#deded5', textAlign: 'left', marginTop: '5px'
        }}>
      <Row style={{padding: '10px'}}>
        <Col xs={6}>
          <p><b>SciPlanet</b></p>
          <p> Bienvenue dans notre installation scientifique à la pointe de la technologie, où nous proposons 
          divers laboratoires entièrement équipés pour un apprentissage pratique et des expériences. Notre 
          équipe fournit des conseils d'experts et nous proposons également des services d'analyse d'échantillons. 
          Une fois que vous êtes familiarisé avec nos protocoles, vous êtes libre d'utiliser nos installations pour 
          vos propres recherches. Rejoignez-nous dans ce voyage passionnant d'exploration scientifique et d'innovation ! </p>
        </Col>
        <Col xs={3}>
          <p><b>contact</b></p>   
          <p>Unit-2, 2445 Clover Street. <br/>Ottawa</p>
          <p>Email : sciplanet@gmail.com</p>
        </Col>
        <Col xs={3}>
          <p><b>Horaires d'ouvertures</b></p>
          <p>Lun - Ven : 11h - 19h<br/>Sam - Dim : 8h - 19h</p>
        </Col>
      </Row>
    </Container>
  );
}

function PageFooterDown() {
  return (
            <div>
                <div>
                  <div>
                    <p align="center">© 2023 Copyright: Saad Rahman Warsi</p>
                  </div>
                </div>
            </div>
  );
}

function PageFooter() {
  return (
    <footer>
        {window.english && <PageFooterInfoE />}
        {!window.english && <PageFooterInfoF />}
        <PageFooterDown />
    </footer>

  );
}

export default PageFooter;