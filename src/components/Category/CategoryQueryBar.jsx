import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function CategoryQueryBar({productsAll, setProductsAll, productsCategory, setProductsCategory}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [filters, setFilters] = useState({
            rating: '3',
            price:500,
            filterByPrice: 'false'
});

    function handleChange(event) {
        if (event.target.name === 'price') {
            setFilters(filters => ({...filters, [event.target.name]:(event.target.value*10)}))
            console.log(filters)
        } else {
            setFilters(filters => ({...filters, [event.target.name]:event.target.value}))
            console.log(filters)
        }
    }

    function handlePriceChange(e) {

        if (e.target.value==='false') {
            setFilters(filters => ({...filters, [e.target.name]:'true'}))
            console.log(filters)
        } else {
            setFilters(filters => ({...filters, [e.target.name]:'false'}))
            console.log(filters)
        }

    }

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
                <Form key="inline-radio" className="mb-4" onChange={handleChange}>
                    <span>Rating&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <Form.Check
                        inline
                        defaultChecked={filters.rating==='0'}
                        label="All"
                        name="rating"
                        type="radio"
                        id="inline-radio-1"
                        value={'0'}
                    />
                    <Form.Check
                        inline
                        defaultChecked={filters.rating==='1'}
                        label="1+"
                        name="rating"
                        type="radio"
                        id="inline-radio-1"
                        value={'1'}
                    />
                    <Form.Check
                        inline
                        defaultChecked={filters.rating==='2'}
                        label="2+"
                        name="rating"
                        type="radio"
                        id="inline-radio-2"
                        value={'2'}
                    />
                    <Form.Check
                        inline
                        defaultChecked={filters.rating==='3'}
                        label="3+"
                        name="rating"
                        type="radio"
                        id="inline-radio-3"
                        value={'3'}
                    />
                    <Form.Check
                        inline
                        defaultChecked={filters.rating==='4'}
                        label="4+"
                        name="rating"
                        type="radio"
                        id="inline-radio-4"
                        value={'4'}
                    />
                </Form>
                <div>
                    <Form.Check
                        type="switch"
                        id="price-filter"
                        label="Filter by Price"
                        name="filterByPrice"
                        defaultChecked={filters.filterByPrice === 'true'}
                        value={filters.filterByPrice}
                        onChange={handlePriceChange}
                    />
                    <Row>
                        <Col xs={3}>
                            <span>${filters.price}</span>
                        </Col>
                        <Col xs={8}>
                            <Form.Range
                            min={1} 
                            max={100}
                            defaultValue={filters.price/10}
                            name="price"
                            onChange={handleChange} 
                            />
                        </Col>
                    </Row>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
</>
    )
}