import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
const AddMovies = ({Add}) => {
  const [show, setShow] = useState(false);

  const [title, settitle] = useState(""  );
  const [description, setdescription] = useState(""  );
  const [rate, setrate] = useState(""  );
  const [trailer, settrailer] = useState(""  );
  const [posterUrl, setposterUrl] = useState(""  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handletitle = (e) => {
    settitle(e.target.value);
  };

  const handledescription = (e) => {
    setdescription(e.target.value);
  };
  const handlerate= (e) => {
    setrate(e.target.value);
  };
  const handletrailer= (e) => {
    settrailer(e.target.value);
  };
  const handleposterUrl= (e) => {
    setposterUrl(e.target.value);
  };
  return (
    <div>
      <Button variant="primary" style={{margin:"3rem 27rem"}} onClick={handleShow}>
        add new mmovies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label> movie title</Form.Label>
                <Form.Control required type="text" placeholder="title" 
                onChange={(e)=>handletitle(e)} />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>movie description</Form.Label>
                <Form.Control required type="text" placeholder="description "onChange={(e)=>handledescription(e)} />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>movie rate </Form.Label>

                <Form.Control type="number" placeholder="rate" required  onChange={(e)=>handlerate(e)}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>movie posterUrl</Form.Label>
                <Form.Control type="text" placeholder="posterUrl" required onChange={(e)=>handleposterUrl(e)}/>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>movie trailer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="traile" onChange={(e)=>handletrailer(e)} name="posterUrlnge"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  
          onClick={()=>(
            
Add({
  id:Math.random(),title:title,description:description,rate:rate,posterUrl:posterUrl,trailer:trailer,
}),handleClose()
          )} >
            add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovies;
