import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PageHeader from './PageHeader.js';
import PageFooter from './PageFooter.js';


function FacilityType(props){
  
  return(
    <div>
      <Form.Label><b>Type of Facility</b></Form.Label>
        <Form.Check type='checkbox' label={props.label1} onChange={() => 
                  { 
                    window.facT1 = window.factT1 ? false : true;
                    document.getElementById('btFacT2').checked=false; window.facT2=false;
                    props.setRFlag(props.rflag+"Y");
                  }
                } 
                id='btFacT1' />

        <Form.Check type='checkbox' label={props.label2} onChange={() => 
                  { 
                    window.facT2 = window.facT2 ? false : true;
                    document.getElementById('btFacT1').checked=false; window.facT1=false;
                    props.setRFlag(props.rflag+"Y");
                  }
                }
                id='btFacT2' />
        <hr />
        </div>
    );
}


function SubArea(props){
  var ifPhysics = (props.label1=="Spectroscopy") ? false : true;
  var ifChemistry = (props.label1=="Spectroscopy") ? true : false;
  return(
    <div>
      <Form.Label><b>Sub-Area</b></Form.Label>
        <Form.Check type='checkbox' label={props.label1} onChange={() => 
                  { 
                    window.subA1 = window.subA1 ? false : true;
                    document.getElementById('btSubA2').checked=false; window.subA2=false;
                    document.getElementById('btSubA3').checked=false; window.subA3=false;
                    window.facT1=false; window.facT2=false;
                    props.setRFlag(props.rflag+"Y");
                  }
                } 
                id='btSubA1' />

        <Form.Check type='checkbox' label={props.label2} onChange={() => 
                  { 
                    window.subA2 = window.subA2 ? false : true;
                    document.getElementById('btSubA1').checked=false; window.subA1=false;
                    document.getElementById('btSubA3').checked=false; window.subA3=false;
                    window.facT1=false; window.facT2=false;
                    props.setRFlag(props.rflag+"Y");
                  }
                }
                id='btSubA2' />

        <Form.Check type='checkbox' label={props.label3} onChange={() => 
                  { 
                    window.subA3 = window.subA3 ? false : true;
                    document.getElementById('btSubA1').checked=false; window.subA1=false;
                    document.getElementById('btSubA2').checked=false; window.subA2=false;
                    window.facT1=false; window.facT2=false;
                    props.setRFlag(props.rflag+"Y");
                  }
                }
                id='btSubA3' />
        <hr />

        {window.subA1 && ifPhysics && <FacilityType rflag={props.rflag} setRFlag={props.setRFlag} label1="Closed Bore" label2="Open MRI"/> }
        {window.subA2 && ifPhysics && <FacilityType rflag={props.rflag} setRFlag={props.setRFlag} label1="Plain X-Ray" label2="CT Scanning"/> }
        {window.subA3 && ifPhysics && <FacilityType rflag={props.rflag} setRFlag={props.setRFlag} label1="Transmission EM" label2="Scanning EM"/> }

        {window.subA1 && ifChemistry && <FacilityType rflag={props.rflag} setRFlag={props.setRFlag} label1="IR Spectroscopy" label2="NMR Spectroscopy"/> }
        {window.subA2 && ifChemistry && <FacilityType rflag={props.rflag} setRFlag={props.setRFlag} label1="Column Chromatography" label2="HPLC"/> }
        {window.subA3 && ifChemistry && <FacilityType rflag={props.rflag} setRFlag={props.setRFlag} label1="CW-NMR" label2="FT-NMR"/> }

        </div>
    );
}

function FacetedSearch(props) {

  return (
    <Form style={{
          backgroundColor: '#F2F4F4', color:'Green', padding: '20px', textAlign: 'left'
        }}>
      
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label><b>Area </b></Form.Label>
        <Form.Check type='checkbox' label='Physics' onChange={() => 
                  {  
                    window.areaP = window.areaP ? false : true;
                    document.getElementById('btAreaC').checked=false;
                    window.areaC=false; window.subA1 = window.subA2 = window.subA3 = window.factT1 = window.facT2 = false;
                    props.setRFlag(props.rflag+"Y");
                  }
                } 
                  id='btAreaP' defaultChecked={window.areaP}/>

        <Form.Check type='checkbox' label='Chemistry' onChange={() => 
                  {  
                    window.areaC = window.areaC ? false : true;
                    document.getElementById('btAreaP').checked=false;
                    window.areaP=false; window.subA1 = window.subA2 = window.subA3 = window.factT1 = window.facT2= false;
                    props.setRFlag(props.rflag+"Y");
                  }
                }
                  id='btAreaC' />
        <hr />
        
        { window.areaP && <SubArea rflag={props.rflag} setRFlag={props.setRFlag} label1="MRI" label2="X-Ray" label3="Electron Microscope (EM)"/> }
        { window.areaC && <SubArea rflag={props.rflag} setRFlag={props.setRFlag} label1="Spectroscopy" label2="Chromatography" label3="Nuclear Magnetic Resonance"/>}

      </Form.Group>

    </Form>
  );
}


export default FacetedSearch;