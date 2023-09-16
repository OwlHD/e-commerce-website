import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

export default function CategoryQueryBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Row>
            <Col>
                <Button variant="success" onClick={handleShow}>
                    Filter Products
                </Button>
            </Col>
            <Col>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By&nbsp;
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Price: Low to High</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Price: High to Low</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Rating</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Col>
        </Row>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                />
            </Form>
            <div key="inline-radio" className="mb-4">
                <span>Rating&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Form.Check
                    inline
                    label="1+"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                />
                <Form.Check
                    inline
                    label="2+"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                />
                <Form.Check
                    inline
                    label="3+"
                    type="radio"
                    id="inline-radio-3"
                />
                <Form.Check
                    inline
                    label="4+"
                    type="radio"
                    id="inline-radio-4"
                />
            </div>
            <div>
                <Form.Label>Price</Form.Label>
                <br />
                <Row>
                    <Col xs={3}>
                        <span>($10-$1000)</span>
                    </Col>
                    <Col xs={8}>
                        <Form.Range min={0} max={100} />
                    </Col>
                </Row>
            </div>
            </Offcanvas.Body>
        </Offcanvas>
</>
    )
}