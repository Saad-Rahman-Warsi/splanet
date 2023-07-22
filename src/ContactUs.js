import Container from 'react-bootstrap/Container';
import PageFooter from './PageFooter.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ShowProgress from './ShowProgress';


function ContactUs() {
  return (
    <div>
    <Row> <ShowProgress label="Contact Us"/> </Row>
      <Row>
      <Col xs={3}></Col>
      <Col xs={6}>
        <Form style={{textAlign: 'left'}}>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
          <Form.Label> <b>Name</b> </Form.Label>
          <Form.Control type="email" placeholder="First Name Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
          <Form.Label> <b>Email</b> </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlTextarea1">
          <Form.Label> <b>Message</b> </Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
          <Button as="input" type="submit" value="Submit" />{' '}
        </Form>
    </Col>
    <Col xs={3}></Col>
    </Row>
     <br /><br />
    <PageFooter />
      </div>
  );
}

export default ContactUs;