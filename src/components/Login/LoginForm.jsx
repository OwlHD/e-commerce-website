import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { userLogin, getAllUsers } from '../../utils/functions';
import { useOutletContext } from 'react-router-dom';

export default function LoginForm() {
    const [validated, setValidated] = useState(false);
    const [userInfo, setUserInfo] = useState({
        username: 'Username',
        password: 'password'
    })
    const navigate = useNavigate()
    const { user, setUser } = useOutletContext()

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUserInfo(values => ({...values, [name]:value}))
    }

    async function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            alert('Invalid user details.')
            event.stopPropagation();
        } else {
            event.preventDefault()
            const userData = await userLogin(userInfo)
            const userList = await getAllUsers()
            if (userData != undefined) {
                console.log('good', userData)
                localStorage.setItem('username', JSON.stringify(userInfo.username))
                localStorage.setItem('token', JSON.stringify(userData.token))
                setUser({
                    Username: userInfo.username,
                    Token: userData.token
                })
                console.log('user set', user)
                const singleUser = userList.filter(user => user.username === userInfo.username)
                console.log('single user', singleUser)
                localStorage.setItem('id', JSON.stringify(singleUser[0].id))
                navigate('/')
            } else {
                console.log('bad', userData)
            }
        }

        setValidated(true);
    }

    return (
        <div className='card' style={{marginBottom: '5px'}}>
            <h2>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                        name='username'
                        value={userInfo.username}
                        onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={userInfo.password}
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}