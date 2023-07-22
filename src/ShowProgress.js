import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



function ShowProgress(props) {
  return (
    <div style={{backgroundColor: "#D5DBDB", textAlign: "left", marginBottom: "10px"}}>
      <h5> {props.label} <br/> </h5>
    </div>
  );
}

export default ShowProgress;