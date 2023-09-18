import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function CategoryCard({item}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <Card style={{ width: '19rem', height: '35rem' }}>
          <Card.Img className='preview-image' variant="top" src={`${item.image}`} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Card.Text>Rating: {item.rating.rate}({item.rating.count})</Card.Text>
            <Button variant="primary" onClick={handleShow}>More Details</Button>
            <br /><br />
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{item.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={5}>
                <Image src={`${item.image}`} thumbnail />
                  <br /><br />
                  <h4>Price: ${item.price}
                  <br /><br />
                  Rating: {item.rating.rate}({item.rating.count})
                  <br /><br />
                  Category: {item.category}
                  </h4>
              </Col>
              <Col xs={7}>
                  <h4>
                    {item.description}
                  </h4>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add To Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }