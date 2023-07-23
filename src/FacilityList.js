import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacData from './FacData';

import img1 from './images/img1.jpg';

var tn="";

var checkD=(val)=>{
  var flg=false;
  if(window.areaP==false && window.areaC==false)
    flg=true;
  if(val=="Closed Bore" && window.areaP==true && window.subA2==false && window.subA3==false && window.facT2==false) 
    flg=true;
  if(val=="Open MRI" && window.areaP==true && window.subA2==false && window.subA3==false && window.facT1==false) 
    flg=true;
  if(val=="Plain X-Ray" && window.areaP==true && window.subA1==false && window.subA3==false && window.facT2==false) 
    flg=true;
  if(val=="CT Scanning" && window.areaP==true && window.subA1==false && window.subA3==false && window.facT1==false) 
    flg=true;
  if(val=="TEM" && window.areaP==true && window.subA1==false && window.subA2==false && window.facT2==false) 
    flg=true;
  if(val=="SEM" && window.areaP==true && window.subA1==false && window.subA2==false && window.facT1==false) 
    flg=true;

  if(val=="IRSp" && window.areaC==true && window.subA2==false && window.subA3==false && window.facT2==false) 
    flg=true;
  if(val=="NMRSp" && window.areaC==true && window.subA2==false && window.subA3==false && window.facT1==false) 
    flg=true;
  if(val=="ColChr" && window.areaC==true && window.subA1==false && window.subA3==false && window.facT2==false) 
    flg=true;
  if(val=="HPLC" && window.areaC==true && window.subA1==false && window.subA3==false && window.facT1==false) 
    flg=true;
  if(val=="CWNMR" && window.areaC==true && window.subA1==false && window.subA2==false && window.facT2==false) 
    flg=true;
  if(val=="FTNMR" && window.areaC==true && window.subA1==false && window.subA2==false && window.facT1==false) 
    flg=true;
  return(flg);
}

function WinPrint() {
  return(
  <p> AreaP:{window.areaP? ' T ' : ' F '}, AreaC:{window.areaC? ' T ' : ' F '}, subA1:{window.subA1? ' T ' : ' F '}, subA2:{window.subA2? ' T ' : ' F '}
      SubA3:{window.subA3? ' T ' : ' F '}, FacT1:{window.facT1? ' T ' : ' F '}, facT2:{window.facT2? ' T ' : ' F '}</p>
      );
}

function FList(props) {
  
  const fListView = FacData.map(
        (element, index) => { tn="/images/"+element.Image;
        return (
              (checkD(element.TypeF)) ? 
                    <Row> <Col xs={2}>  <img src={tn} /> </Col>
                    <Col xs={10}>
                    <h6 style={{color: '#1F7E6B'}}><b>{element.Name}</b></h6>
                    <p> {element.Descr} </p>
                    </Col>
                    <hr />
                    </Row> : <> </>
            )
          }
        )

  return( 
    <>
    {fListView}
    </>
    );
}

function FacilityList(props) {

  return (
    <div style={{textAlign: 'left'}}>  
      <FList />
    </div>
  );
  
}


export default FacilityList;