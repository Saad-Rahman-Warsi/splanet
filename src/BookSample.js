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

var sFac111=["MRI Scanning on MRC1", "MRI Scanning on MRC2"];
var sFac112=["MRI Scanning on MRO1", "MRI Scanning on MRO2"];
var sFac121=["X-Ray on XRP1", "X-Ray on XRP2"];
var sFac122=["CT Scanning on XRC1", "CT Scanning on XRC2"];
var sFac131=["Electron Microscope Scanning on EMT1", "Electron Microscope Scanning on EMT2"];
var sFac132=["Electron Microscope Scanning on EMS1", "Electron Microscope Scanning on EMS2"];

var sFac211=["Spectroscopy on SPI1", "Spectroscopy on SPI2"];
var sFac212=["Spectroscopy on SPN1", "Spectroscopy on SPN2"];
var sFac221=["Column Chromatography on CHC1", "Column Chromatography on CHC2"];
var sFac222=["HPLC on CHH1", "HPLC on CHH2"];
var sFac231=["NMR Scanning on NMC1", "NMR Scanning on NMC2"];
var sFac232=["NMR Scanning on NMF1", "NMR Scanning on NMF2"];

var bd=["", "", "", "", ""];

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
                  <th>Name of Analysis and Equipment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td style={{textAlign: 'left'}}>{bd[0]}</td> 
                </tr>

                <tr>
                  <td>2.</td>
                  <td style={{textAlign: 'left'}}>{bd[1]}</td>
                </tr>

                <tr>
                <td>3.</td>
                  <td style={{textAlign: 'left'}}>{bd[2]}</td>
                  </tr>

                <tr>
                <td>4.</td>
                  <td style={{textAlign: 'left'}}>{bd[3]}</td>
                </tr>

                <tr>
                  <td>5.</td>
                  <td style={{textAlign: 'left'}}>{bd[4]}</td>
                </tr>
              </tbody>
              </Table>
    );
}


/*******************************************************************************************/
function ShowBookSample(props) {
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
                      bd[itemCount]=""
                      props.setRFlag(props.rflag+"Y");
                  }
              }
                } />{' '}          
  </div>
    );
}

/*******************************************************************************************/
function BookSampleStep1(props) {
  return (
    <div>
      <ShowProgress label="(Booking for Sample Analysis) Step 1 of 2 : Enter Personal Information"/>
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
                  <Form.Label htmlFor="inputPassword5"> <b>How do we get sample?</b> </Form.Label>
                  <Form.Select aria-label="Select Area" id="profession">
                      <option value="1">You send us sample</option>
                      <option value="2">We collect from your address</option> 
                  </Form.Select>
                </Form.Group>
            </Col>
            <Col>   
              <Form.Group className="mb-3" controlId="contactUsForm.ControlInput1">
              <Form.Label> <b>Address</b> </Form.Label>
              <Form.Control type="email" placeholder="Address" id="lname"/>
            </Form.Group>
            </Col>
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
function BookSampleStep2(props) {
  return (
    <div style={{textAlign: "left"}}>
      <Container fluid>
        <Row> <ShowProgress label="(Booking for Sample Analysis) Step 2 of 2 : Choose analysis that you wish to perform on sample"/> </Row>
        <Row style={{marginLeft: '20px', marginRight: '60px'}}>

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

              <div style={{marginLeft: '5px', marginTop: '5px'}}>
              <Button as="input" type="submit" value="Back to Step 1" size="sm" onClick={() =>{
                orderState=1; props.setRFlag(props.rflag+"Y");
              }} />{'  '}
                <Button as="input" type="submit" value="Add To Item List" size="sm" onClick={() => 
                  {
                    if(itemCount<5){
                      bd[itemCount]=pspecfac[document.getElementById('selSpecFac').value-1];
                      itemCount=itemCount+1;
                    } else alert("Please order five items at a time.");
                    props.setRFlag(props.rflag+"Y");
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

            </Row>
          </Col>
          <Col xs={1}> </Col>
          <Col xs={5}>  
            <ShowBookSample rflag={props.rflag} setRFlag={props.setRFlag}/>
          </Col>
        </Row>

      </Container>
      <PageFooter />
    </div>
  );
}


/*******************************************************************************************/
function BookSampleStep3(props){
  return(
  <div>
    <Row> <ShowProgress label="(Booking for Sample Analysis) Order Confirmation"/> </Row>
    <Row>
    <Col xs={3}> </Col>
    <Col xs={5}>
    <h6 style={{textAlign: 'left'}}> Your order for sample analysis is confirmed. Order No is 327154. Order 
         Details are as given below - </h6>
    <p style={{textAlign: 'left'}}> Name: {orderName} </p>
    <ShowOrderTable />
    </Col>
    <Col xs={4}> </Col>
    </Row>
    <PageFooter />
  </div>
  );
}


/*******************************************************************************************/
function BookSample(props) {
  return(
    <>
    {orderState==1 && <BookSampleStep1 rflag={props.rflag} setRFlag={props.setRFlag}/>}
    {orderState==2 && <BookSampleStep2 rflag={props.rflag} setRFlag={props.setRFlag}/>}
    {orderState==3 && <BookSampleStep3 rflag={props.rflag} setRFlag={props.setRFlag}/>}
    </>
  );
}

export default BookSample;