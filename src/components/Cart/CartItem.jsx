import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function CartItem({userCart, item}) {
    console.log('in cart item', userCart)
    const [cart, setCart] = useState(userCart)
    console.log('checking cart', cart)

    function handleChange(e, id) {
        const cartIndex = userCart.findIndex(item => item.id === id)
        console.log('item id', id)
        console.log(cartIndex)
        userCart[cartIndex].quantity = parseInt(e.target.value)
        console.log(userCart)
        const updateCart = cart.map(item => item.id === userCart[cartIndex].id ? {
            ...item, quantity: e.target.value
        } : item
        )
        setCart(updateCart)
        console.log('checking cart', cart)
    }

    function handleInput(e) {
        if (Number(e.target.value) < Number(e.target.min)) {
            e.target.value = e.target.min
        }
        if (Number(e.target.value) > Number(e.target.max)) {
            e.target.value = e.target.max
        }
    }

    return (
        <Container>
            {cart.map((item, index) => {
                return (
                    <Row className='cart-card' key={item.id}>
                        <Col xs={3} >
                            <Image thumbnail src={`${item.image}`} style={{width: '200px', height: '200px', float: 'left'}} rounded />
                        </Col>
                        <Col className='cart-card-layout' xs={6}>
                            {item.title} <br />
                            ${item.price}
                        </Col>
                        <Col className='cart-card-layout' xs={3}>
                            <Row> 
                                <p>${cart[index].quantity * item.price} </p>
                                <Row>
                                    <Col>
                                    <p>Qty</p>
                                    </Col>
                                    <Col>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control 
                                                type="number" 
                                                onChange={e => (handleChange(e, item.id))} defaultValue={item.quantity} 
                                                min={1}
                                                max={99}
                                                onInput={handleInput} />
                                        </Form.Group>
                                    </Form>
                                    </Col>
                                    <Button variant="primary">Remove</Button>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                )
            })}
        </Container>
    )
}