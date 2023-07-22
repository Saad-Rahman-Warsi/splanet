import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

import './App.css';
import logo from './logo.svg';

 
function PageHeaderE(props) {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{
          backgroundColor: 'Teal', color:'White'
        }}>
        <Navbar.Brand href="https://saad-rahman-warsi.github.io/splanet/" style={{color: '#33CEFF'}}>
            <img alt="" src={logo} width="60"  className="App-logo"  />{' '}
            <b>SciPlanet</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: 'White' }}>
          <Nav className="me-auto">
            <Nav.Link href="https://saad-rahman-warsi.github.io/splanet/#/AboutUs" style={{color: 'White'}}>About Us</Nav.Link>

            <Nav.Link href="https://saad-rahman-warsi.github.io/splanet/#/Facilities" style={{color: 'White'}}>Explore</Nav.Link>

            <NavDropdown title={ <span className="text-white my-auto">Avail Services</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/BookLearn">Experiment Learning Sessions</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/BookSample">Sample Analysis</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/BookLabUse">Use Laboratory Facilities</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={ <span className="text-white my-auto">Contact Us</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/ContactUs">Send Us a Message</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/Chatbot">Chatbot</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse> 
        <button onClick={()=>{window.english=false; props.setRFlag(props.rflag+"Y")}}> Français </button>
      </Container> 
    </Navbar>
    <Outlet />
    </div>
  );
}

function PageHeaderF(props) {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{
          backgroundColor: 'Teal', color:'White'
        }}>
        <Navbar.Brand href="https://saad-rahman-warsi.github.io/splanet/" style={{color: '#33CEFF'}}>
            <img alt="" src={logo} width="60"  className="App-logo"  />{' '}
            <b>SciPlanet</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{color: 'White' }}>
          <Nav className="me-auto">
            <Nav.Link href="https://saad-rahman-warsi.github.io/splanet/#/AboutUs" style={{color: 'White'}}>À Propos de Nous</Nav.Link>

            <Nav.Link href="https://saad-rahman-warsi.github.io/splanet/#/Facilities" style={{color: 'White'}}>Explorer</Nav.Link>

            <NavDropdown title={ <span className="text-white my-auto">Obtenir des Services</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/BookLearn">Expérimenter Session d'apprentissage </NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/BookSample">Analyse d'échantillon</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet//#/BookLabUse">Utiliser le laboratoire</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={ <span className="text-white my-auto">Contactez-nous</span> } id="basic-nav-dropdown">
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/ContactUs">Envoie-nous un message</NavDropdown.Item>
              <NavDropdown.Item href="https://saad-rahman-warsi.github.io/splanet/#/Chatbot">Chatbot</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse> 
        <button onClick={()=>{window.english=true; props.setRFlag(props.rflag+"Y");}}> English </button>
      </Container> 
    </Navbar>
    <Outlet />
    </div>
  );
}

function PageHeader(props) {
  return(
    <>
    {window.english && <PageHeaderE rflag={props.rflag} setRFlag={props.setRFlag} />}
    {!window.english && <PageHeaderF rflag={props.rflag} setRFlag={props.setRFlag} />}
    </>
  );
}

export default PageHeader;