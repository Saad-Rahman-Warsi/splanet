import Container from 'react-bootstrap/Container';
import PageFooter from './PageFooter.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ShowProgress from './ShowProgress';

var chat=["", "", "", "", "", "", ""];
var response=["Hello! How may I help you?",
              "Your question is related with which area (Physics/Chemistry)?",
              "Your question is related with which sub-area?",
              ]
var i=0;

function ShowChat(props) {
  
  const chatm = chat.map(
        (element, index) => {
            return ((element!="") ?
                    <>
                    <p style={{textAlign: 'left'}}> <b> Me : </b> {element} </p>
                    <p style={{textAlign: 'left'}}> <b>SciPlanet :</b> {response[index+1 ]} </p>
                    </>  : <>  </>
                  )
                    }
            )

  return( 
    <> <p style={{textAlign: 'left'}}><b>SciPlanet :</b>{response[0]}</p>
    {chatm}
    </>
    );
}

function Chatbot(props) {
  return (
    <div>
    <Row> <ShowProgress label="Chatbot"/> </Row>
      <Row>
      <Col xs={3}></Col>
      <Col xs={6}>

        <Form style={{textAlign: 'left'}}>
        <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
          <Form.Label> <b>Type in Message</b> </Form.Label>
          <Form.Control type="email" placeholder="Message" id="cmsg" onChange={()=> 
                              {}}/>
          <div style={{padding:'10px'}}><Button as="input" type="button" value="Send" size="sm" onClick={() => 
                  {
                   chat[i]=document.getElementById("cmsg").value; i=i+1;
                    props.setRFlag(props.rflag+"Y");
                  }}/></div>
        </Form.Group>
        </Form>

        <br/>
        <ShowChat />
    </Col>
    <Col xs={3}></Col>
    </Row>
     <br /><br />
    <PageFooter />
      </div>
  );
}

export default Chatbot;