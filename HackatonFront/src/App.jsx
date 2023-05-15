
import './App.css'
import {Container, Row, Col} from 'react-bootstrap'
import DragDrop from './DragDrop'


function App() {


  return (
    <Container fluid>
    <Row ><Col className='titulo'>
      <h1>STAR DROP </h1></Col>
      <Col className='textoInicio'>
      <i>Star Drop es una web que te permite poder guardar en tu ordenador aquellas imágenes que más te gustan de simplemente arrastrándolas a la Spock Box. También tendrás una vista previa de aquellas imágenes que has subido.</i></Col>
      </Row>
    <Row >
      <Col className='droparea'><DragDrop/></Col>
     
    </Row>
    
    </Container>
  )
}

export default App
