
import React, { useState, useContext } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandSpock } from "@fortawesome/free-solid-svg-icons";

function DragDrop () {
  
  const [dragging, setDragging] = useState(false);
  const [collect, setCollect] = useState([]);
  const [preview, setPreview] = useState('');
  
  //cuando no se arrastra
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  //cuando se arrastra
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  //cuando se suelta la imagen
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files[0];
    const prevArray = [...collect, URL.createObjectURL(files)]
    setCollect(prevArray);
    setPreview(URL.createObjectURL(files));
    uploadFile(files);
  };

  //funcion para subir la foto donde tambien se le pasa id necesarias 
  function uploadFile(files) {
    const data = new FormData()
    data.append('files', files);
      
    const options = {
      method: "POST",
      body: data
    }

    fetch("http://localhost:5000/api/archivos", options)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(cosa => console.log(cosa))

  }

  return (
    <Container fluid className="containerDropFiles">
   
    
    {/* zona donde se dipositan las imagenes */}
    <Row className='dropArea'
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      
    >
      {/* mientras se arrastra */}
      {dragging ? (
        <div className='textDropArea'>¡Suelta la imagen!</div>
      ) : (
        <div className='textDropArea'>Spock Box <FontAwesomeIcon icon={faHandSpock} /></div>
      )}
     
    </Row>
   
    <Row className='uploadFiles'>
      {
      preview ? <div >{collect.map((el,idx) => (
      <div key={idx}  >
          <img  src={el} className="files" />
        </div>
    ))}</div> : <div className='textPreview' >Aún no hay datos que mostrar... 
    <br />
    <br />
    <i>“La falta de datos siempre invita al peligro"</i> - Spock</div>}
      </Row>
    
    </Container>
    
  );
};

export default DragDrop;