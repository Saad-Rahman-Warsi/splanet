import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PageFooter from './PageFooter.js';
import Table from 'react-bootstrap/Table';
import ShowProgress from './ShowProgress';
import Button from 'react-bootstrap/Button';

var orderState=1;
var orderName="";
var area=["Physics", "Chemistry"];

var sAPhy=["MRI", "X-Ray", "Electron Microscope"];
var sAPMRI=["Closed Bore", "Open MRI"];
var sAPXRay=["Plain X-Ray", "CT Scanning"];
var sAPEM=["Transmission EM", "Scanning EM"];


var sACh=["Spectroscopy", "Chromatography", "Nuclear Magnetic Resonance"];
var sACSpect=["IR Spectroscopy", "NMR Spectroscopy"];
var sACChr=["Column Chromatography", "HPLC"];
var sACNMR=["CW-NMR", "FT-NMR"];

var sFac111=["Closed Bore MRI Facility MRC1", "Closed Bore MRI Facility MRC2"];
var sFac112=["Open MRI Facility MRO1", "Open MRI Facility MRO2"];
var sFac121=["Plain X-Ray Machine XRP1", "Plain X-Ray Machine XRP2"];
var sFac122=["CT Scanning Machine XRC1", "CT Scanning Machine XRC2"];
var sFac131=["Transmission Electron Microscope EMT1", "Transmission Electron Microscope EMT2"];
var sFac132=["Scanning Electron Microscope EMS1", "Scanning Electron Microscope EMS2"];

var sFac211=["IR Spectrometer SPI1", "IR Spectrometer SPI2"];
var sFac212=["NMR Spectrometer SPN1", "NMR Spectrometer SPN2"];
var sFac221=["Column Chromatography Machine CHC1", "Column Chromatography Machine CHC2"];
var sFac222=["HPLC Machine CHH1", "HPLC Machine CHH2"];
var sFac231=["CW-NMR Machine NMC1", "CW-NMR Machine NMC2"];
var sFac232=["FT-NMR Machine NMF1", "FT-NMR Machine NMF2"];

var bd=[["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]];

var parea=area;
var psarea=sAPhy;
var pftype=sAPMRI;
var pspecfac=sFac111;
var itemCount=0;


/*******************************************************************************************/
var setSelector=()=>{
  var tArea=document.getElementById('selA').value;
  var tSubArea=document.getElementById('selSubA').value;
  var tFactType=document.getElementById('selFacTyp').value;

  if(tArea == 1) {
    psarea = sAPhy;
    if(tSubArea == 1) {pftype=sAPMRI; if(tFactType==1) pspecfac=sFac111; else pspecfac=sFac112;}
    if(tSubArea == 2) {pftype=sAPXRay; if(tFactType==1) pspecfac=sFac121; else pspecfac=sFac122;}
    if(tSubArea == 3) {pftype=sAPEM; if(tFactType==1) pspecfac=sFac131; else pspecfac=sFac132;}
  }

  if(tArea == 2) {
    psarea = sACh;
    if(tSubArea == 1) {pftype=sACSpect; if(tFactType==1) pspecfac=sFac211; else pspecfac=sFac212;}
    if(tSubArea == 2) {pftype=sACChr; if(tFactType==1) pspecfac=sFac221; else pspecfac=sFac222;}
    if(tSubArea == 3) {pftype=sACNMR; if(tFactType==1) pspecfac=sFac231; else pspecfac=sFac232;}
  }
};


function ShowOrderTable() {
  return(
    <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No </th>
                  <th>Facility Name</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td style={{textAlign: 'left'}}>{bd[0][0]}</td> 
                  <td >{bd[0][1]}</td>
                  <td>{bd[0][2]}</td>
                </tr>

                <tr>
                  <td>2.</td>
                  <td style={{textAlign: 'left'}}>{bd[1][0]}</td>
                  <td>{bd[1][1]}</td>
                  <td>{bd[1][2]}</td>
                </tr>

                <tr>
                <td>3.</td>
                  <td style={{textAlign: 'left'}}>{bd[2][0]}</td>
                  <td>{bd[2][1]}</td>
                  <td>{bd[2][2]}</td>
                </tr>

                <tr>
                <td>4.</td>
                  <td style={{textAlign: 'left'}}>{bd[3][0]}</td>
                  <td>{bd[3][1]}</td>
                  <td>{bd[3][2]}</td>
                </tr>

                <tr>
                  <td>5.</td>
                  <td style={{textAlign: 'left'}}>{bd[4][0]}</td>
                  <td>{bd[4][1]}</td>
                  <td>{bd[4][2]}</td>
                </tr>
              </tbody>
              </Table>
    );
}


/*******************************************************************************************/
function ShowBookLabUse(props) {
  return(
    <div style={{padding: '20px'}}>
      <Form.Label htmlFor="inputPassword5"><b>Items in the Order</b></Form.Label>
      <ShowOrderTable />
      <Button as="input" type="submit" value="Place Order" size="sm" onClick={() => 
             { 
                if(itemCount==0) alert("List of items in the order is empty");
                else {
                  orderState=3;
                  props.setRFlag(props.rflag+"Y");
                 }
              }
                } />{' '}
      <Button as="input" type="submit" value="Delete Last Item" size="sm" onClick={() => 
             { 
                if(itemCount==0) alert("List of items in the order is empty");
                else {itemCount=itemCount-1;
                      bd[itemCount][0]=bd[itemCount][1]=bd[itemCount][2]=""
                      props.setRFlag(props.rflag+"Y");
                  }
              }
                } />{' '}          
  </div>
    );
}

/*******************************************************************************************/
function BookLabUseStep1(props) {
  return (
    <div>
      <ShowProgress label="(Booking Laboratory Use) Step 1 of 2 : Enter Personal Information"/>
      <Row>
      <Col xs={2}></Col>
      <Col xs={8}>
        <Form style={{textAlign: 'left'}}>
        
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
              <Form.Label> <b>First Name</b> </Form.Label>
              <Form.Control type="email" placeholder="First Name" id="fname"/>
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
              <Form.Label> <b>Last Name</b> </Form.Label>
              <Form.Control type="email" placeholder="Last Name" id="lname"/>
            </Form.Group>
            </Col>
            </Row>
            
            <Row>
            <Col>
            <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
              <Form.Label> <b>Email</b> </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            </Col>

            <Col>
            <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
              <Form.Label> <b>Mobile Number</b> </Form.Label>
              <Form.Control type="email" placeholder="9999999999" />
            </Form.Group>
            </Col>
            </Row>
            
            <Row >
            <Col>
                <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1 style={{marginBottom: '15px'}}">
                  <Form.Label htmlFor="inputPassword5"> <b>You are a:</b> </Form.Label>
                  <Form.Select aria-label="Select Area" id="profession">
                      <option value="1">Student</option>
                      <option value="2">Teacher</option>
                      <option value="1">Job, Business</option>
                      <option value="2">Other</option>
                  </Form.Select>
                </Form.Group>
            </Col>
            <Col>   </Col>
            </Row>

            <Button as="input" type="submit" value="Next" onClick={() => 
                  {
                    orderName=document.getElementById("fname").value+" "+document.getElementById("lname").value;
                    orderState=2;
                    props.setRFlag(props.rflag+"Y");
                  }
                  }/>{' '}
        </Form>
    </Col>
    <Col xs={2}></Col>
    </Row>
     <br /><br />
    <PageFooter />
      </div>
  );
}


/*******************************************************************************************/
function BookLabUseStep2(props) {
  return (
    <div style={{textAlign: "left"}}>
      <Container fluid>
        <Row> <ShowProgress label="(Booking Laboratory Use) Step 2 of 2 : Select the facility that you wish to use"/> </Row>
        <Row>

          <Col xs={3}>
            <Row> 
              <div style={{padding: '20px'}}>
              <Form.Label htmlFor="inputPassword5">Select Area</Form.Label>
              <Form.Select aria-label="Select Area"   onChange={() => 
                  {  
                    setSelector();
                    props.setRFlag(props.rflag+"Y");
                  }
                }
                id="selA">
                  <option value="1"> {parea[0]} </option>
                  <option value="2">{parea[1]}</option>
              </Form.Select>
              </div>

              <div style={{padding: '20px'}}>
              <Form.Label htmlFor="inputPassword5">Type of Facility</Form.Label>
              <Form.Select aria-label="Select Area" onChange={() => 
                  {  
                    setSelector();
                    props.setRFlag(props.rflag+"Y");
                  }
                }
                id="selFacTyp">
                  <option value="1">{pftype[0]}</option>
                  <option value="2">{pftype[1]}</option>
              </Form.Select>
              </div>

              <div style={{padding: '20px'}}>
                <Form.Label htmlFor="inputPassword5">Select Date to Avail Facility</Form.Label>
                <input type="date" id="birthday" name="birthday" id='accdate'/>
              </div>

              <div style={{marginLeft: '5px', marginTop: '5px'}}>
              <Button as="input" type="submit" value="Back to Step 1" size="sm" onClick={() =>{
                orderState=1; props.setRFlag(props.rflag+"Y");
              }} />{'  '}
                <Button as="input" type="submit" value="Add To Item List" size="sm" onClick={() => 
                  {
                    if(document.getElementById('accdate').value=="") alert("Please specify the date of availing the facility");
                    else {
                    if(itemCount<5){
                      bd[itemCount][0]=pspecfac[document.getElementById('selSpecFac').value-1];
                      bd[itemCount][1]=document.getElementById('accdate').value;
                      bd[itemCount][2]=document.getElementById('selTimeSlot').value;
                      itemCount=itemCount+1;
                    } else alert("Please order five items at a time.");
                    props.setRFlag(props.rflag+"Y");
                  }
                  }}/> 
              </div>
            </Row>
          </Col>

          <Col xs={3}>
            <Row>
              <div style={{padding: '20px'}}>
              <Form.Label htmlFor="inputPassword5">Select Sub-Area</Form.Label>
              <Form.Select aria-label="Select Area" onChange={() => 
                  {  
                    setSelector();
                    props.setRFlag(props.rflag+"Y");
                  }
                } 
                id="selSubA">
                  <option value="1">{psarea[0]}</option>
                  <option value="2">{psarea[1]}</option>
                  <option value="3">{psarea[2]}</option>
              </Form.Select>
              </div>

              <div style={{padding: '20px'}}>
              <Form.Label htmlFor="inputPassword5">Select Specific Facility</Form.Label>
              <Form.Select aria-label="Select Area" id="selSpecFac">
                  <option value="1">{pspecfac[0]}</option>
                  <option value="2">{pspecfac[1]}</option>
              </Form.Select>
              </div>

              <div style={{padding: '20px'}}>
              <Form.Label htmlFor="inputPassword5">Select Time Slot</Form.Label>
              <Form.Select aria-label="Select Area" id='selTimeSlot'>
                  <option value="9:30 AM">9:30 AM - 10:30 AM</option>
                  <option value="10:30 AM">10:30 AM - 11:30 AM</option>
                  <option value="11:30 AM">11:00 AM - 12:30 PM</option>
              </Form.Select>
              </div>

            </Row>
          </Col>
          <Col xs={6}>  
            <ShowBookLabUse rflag={props.rflag} setRFlag={props.setRFlag}/>
          </Col>
        </Row>

      </Container>
      <PageFooter />
    </div>
  );
}


/*******************************************************************************************/
function BookLabUseStep3(props){
  return(
  <div>
    <Row> <ShowProgress label="(Booking Laboratory Use) Order Confirmation"/> </Row>
    <Row>
    <Col xs={3}> </Col>
    <Col>
    <h6 style={{textAlign: 'left'}}> Your order to use the laboratory is confirmed. Order No is 327154. Order 
         Details are as given below - </h6>
    <p style={{textAlign: 'left'}}> Name: {orderName} </p>
    <ShowOrderTable />
    </Col>
    <Col xs={3}> </Col>
    </Row>
    <PageFooter />
  </div>
  );
}


/*******************************************************************************************/
function BookLabUse(props) {
  return(
    <>
    {orderState==1 && <BookLabUseStep1 rflag={props.rflag} setRFlag={props.setRFlag}/>}
    {orderState==2 && <BookLabUseStep2 rflag={props.rflag} setRFlag={props.setRFlag}/>}
    {orderState==3 && <BookLabUseStep3 rflag={props.rflag} setRFlag={props.setRFlag}/>}
    </>
  );
}

export default BookLabUse;