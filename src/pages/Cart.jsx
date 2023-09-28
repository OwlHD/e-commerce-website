import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';

export default function Cart() {
  const [refresh, setRefresh] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [show, setShow] = useState(false);
  const pageCart = JSON.parse(localStorage.getItem('cart'));
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let price = 0;
    let items = 0;
    pageCart[0].products.forEach((item) => price += (item.product.price * item.quantity));
    pageCart[0].products.forEach((item) => items += item.quantity);
    const p = parseFloat(price.toFixed(2));
    setTotalPrice(p);
    setTotalItems(items);
  }, [refresh]);

  function handleCheckout() {
    localStorage.setItem('cart', JSON.stringify([{ products: [] }]));
    navigate('/');
  }

  return (
    <div>
      {pageCart[0].products.length > 0
        ? pageCart[0].products.map((item) => (
          <div>
            <CartItem pageCart={pageCart} setRefresh={setRefresh} refresh={refresh} item={item} />
          </div>
        ))
        : <p>Cart is empty.</p>}
      {pageCart[0].products.length > 0
        ? (
          <Row className="cart-card">
            <Col xs={6}>
              <p>
                Subtotal (
                {totalItems}
                {' '}
                Items): $
                {totalPrice}
              </p>
            </Col>
            <Col xs={6}>
              <Button variant="primary" onClick={handleShow}>Proceed To Checkout</Button>

              <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false}>
                <Modal.Header>
                  <Modal.Title>Order Successful!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Please allow 3-7 business days for delivery.
                  Thank you for shopping at Amazon 2!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleCheckout}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        )
        : <div />}
    </div>
  );
}
