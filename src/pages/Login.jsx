import Row from 'react-bootstrap/Row';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Login/RegisterForm';

export default function Login() {
    return (
        <Row>
                <LoginForm />

                <RegisterForm />
        </Row>
    )
}