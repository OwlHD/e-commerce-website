import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function CartItem({pageCart, setRefresh, refresh, item}) {
    const [price, setPrice] = useState(item.product.price * item.quantity)

    function handleChange(e) {
        const cartIndex = pageCart[0].products.findIndex(cartItem => cartItem.productId === item.productId)
        pageCart[0].products[cartIndex].quantity = parseInt(e.target.value)
        setPrice(item.quantity * item.product.price)
        localStorage.setItem('cart', JSON.stringify(pageCart))
        setRefresh(!refresh)
    }

    function handleInput(e) {
        if (Number(e.target.value) < Number(e.target.min)) {
            e.target.value = e.target.min
        }
        if (Number(e.target.value) > Number(e.target.max)) {
            e.target.value = e.target.max
        }
    }

    function handleDelete(e) {
        const cartIndex = pageCart[0].products.findIndex(cartItem => cartItem.productId === item.productId)
        pageCart[0].products.splice(cartIndex, 1)
        localStorage.setItem('cart', JSON.stringify(pageCart))
        setRefresh(!refresh)
    }

    return (
        <Container>
            <Row className='cart-card' key={item.product.id}>
                <Col xs={3} >
                    <Image thumbnail src={`${item.product.image}`} style={{width: '200px', height: '200px', float: 'left'}} rounded />
                </Col>
                <Col className='cart-card-layout' xs={6}>
                    {item.product.title} <br />
                    ${item.product.price}
                </Col>
                <Col className='cart-card-layout' xs={3}>
                    <Row> 
                        <p>${price.toFixed(2)}</p>
                        <Row>
                            <Col>
                            <p>Qty</p>
                            </Col>
                            <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                        type="number" 
                                        onChange={e => (handleChange(e))} defaultValue={item.quantity} 
                                        min={1}
                                        max={99}
                                        onInput={handleInput} />
                                </Form.Group>
                            </Form>
                            </Col>
                            <Button variant="primary" onClick={handleDelete}>Remove</Button>
                        </Row>
                    </Row>
                </Col>
            </Row>
    </Container>
    )
}