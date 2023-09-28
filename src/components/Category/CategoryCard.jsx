import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function CategoryCard({item, cart}) {
  console.log('item', item.id)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleCart(e, id) {
    console.log(cart[0].products)
    console.log('checking id', id)
    const cartIndex = cart[0].products.findIndex(cartItem => cartItem.productId === id)
    console.log(cartIndex)
    const newItem = {
      productId: item.id,
      quantity: 1
    }
    if (cartIndex === -1) {
      console.log('adding item')
      cart[0].products.push(newItem)
      localStorage.setItem('cart', JSON.stringify(cart))
    } else if (cart[0].products[cartIndex].productId === item.id) {
      console.log('updating quantity')
      cart[0].products[cartIndex].quantity++
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    console.log('item added/updated', cart)
  }

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
            <Button variant="primary" onClick={e => (handleCart(e, item.id))}>Add To Cart</Button>
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
            <Button variant="primary" onClick={e => (handleCart(e, item.id))}>
              Add To Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }