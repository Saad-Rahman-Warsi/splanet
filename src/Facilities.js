import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PageHeader from './PageHeader.js';
import PageFooter from './PageFooter.js';
import FacetedSearch from './FacetedSearch';
import FacilityList from './FacilityList.js';
import ShowProgress from './ShowProgress';


function Facilities(props) {
  return (
    <div>
      <Container fluid>
        <Row> <ShowProgress label="Explore our laboratory facilities"/> </Row>
        <Row>
          <Col xs={3}> <FacetedSearch rflag={props.rflag} setRFlag={props.setRFlag}/> </Col>
          <Col xs={9}> <FacilityList rflag={props.rflag} setRFlag={props.setRFlag}/> </Col>
        </Row>
      </Container>
      <PageFooter />
    </div>
  );
}

export default Facilities;