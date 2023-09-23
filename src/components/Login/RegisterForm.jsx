import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import States from './States';
import { useState } from 'react';
import { userCreate } from '../../utils/functions';

export default function RegisterForm() {
    const [validated, setValidated] = useState(false);
    const [userInfo, setUserInfo] = useState({
        email: '',
        username: '',
        password: '',
        passwordValidate:'',
        firstName:'',
        lastName:'',
        city:'',
        street:'',
        number:'',
        zipcode:'',
        lat:'',
        long:'',
        phone:''
    })

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUserInfo(values => ({...values, [name]:value}))
    }

    async function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (userInfo.password != userInfo.passwordValidate) {
                event.preventDefault();
                alert('Password does not match.')
            } else {
                event.preventDefault()
                alert('Good :)')
                const userData = await userCreate(userInfo)
                if (userData != undefined) {
                    console.log('created object: ', userData)
                    alert(`
                    Test data sent successfully.  Created user - 
                    Username: ${userInfo.username}
                    Email: ${userInfo.email}
                    Password: ${userInfo.password}
                    Phone Number: ${userInfo.phone}
                    First Name: ${userInfo.firstName}
                    Last Name: ${userInfo.lastName}
                    City: ${userInfo.city} 
                    Street: ${userInfo.street}
                    House/Apt Number: ${userInfo.number}
                    Zipcode: ${userInfo.zipcode}
                    Latitude: ${userInfo.lat}
                    Longitude: ${userInfo.long}
                    Data needed for this user from FakeStoreAPI.
                    Note: User not added to database, use user info
                    from FakeStoreAPI to login and gain full functionality.
                    `)
                } else {
                    console.log('bad', userData)
                }
            }
        }

        setValidated(true);
    }

    return (
    <div className='card'>
        <h2>Register</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        required 
                        type="email" 
                        placeholder="Enter email"
                        name='email' 
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        placeholder="Enter username" 
                        name='username'
                        value={userInfo.username}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        required 
                        type="password" 
                        placeholder="Password" 
                        name='password'
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        required 
                        type="password" 
                        placeholder="Password" 
                        name='passwordValidate'
                        value={userInfo.passwordValidate}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        placeholder="Enter first name" 
                        name='firstName'
                        value={userInfo.firstName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        placeholder="Enter last name" 
                        name='lastName'
                        value={userInfo.lastName}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="8" className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        required 
                        placeholder="1234 Main St" 
                        name='street'
                        value={userInfo.street}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="4" className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control 
                        required 
                        placeholder="Apartment, studio, or floor" 
                        name='number'
                        value={userInfo.number}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        required 
                        placeholder="City"
                        name='city'
                        value={userInfo.city}
                        onChange={handleChange}
                    />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select required defaultValue="Choose..." name='state' onChange={handleChange}>
                        <option>Choose...</option>
                        <States />
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                        required 
                        type="number" 
                        name='zipcode'
                        value={userInfo.zipcode}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Row>
                
                <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicGeolocationLat">
                    <Form.Label>latitude</Form.Label>
                    <Form.Control 
                        required 
                        type="text" 
                        placeholder="Enter latitude" 
                        name='lat'
                        value={userInfo.lat}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicGeolocationLong">
                    <Form.Label>longitude</Form.Label>
                    <Form.Control 
                        required 
                        type="number" 
                        placeholder="Enter longitude" 
                        name='long'
                        value={userInfo.long}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        required 
                        type="number" 
                        placeholder="Enter phone number" 
                        name='phone'
                        value={userInfo.phone}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Row>
        </Form>
    </div>
    )
}