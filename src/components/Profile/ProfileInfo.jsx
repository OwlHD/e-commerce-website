import Card from 'react-bootstrap/Card';

export default function ProfileInfo({userInfo}) {
    console.log('user info final', userInfo)
    return (
        <Card style={{ width: '100%', textAlign: 'left' }}>
            <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>User Info</Card.Title>
                <Card.Text>
                    Username: {userInfo.username}
                </Card.Text>
                <Card.Text>
                    Email Address: {userInfo.email}
                </Card.Text>
                <Card.Text>
                    First Name: {userInfo.name.firstname}
                </Card.Text>
                <Card.Text>
                    Last Name: {userInfo.name.lastname}
                </Card.Text>
                <Card.Text>
                    Phone Number: {userInfo.phone}
                </Card.Text>
                <Card.Text>
                    Main Address: {userInfo.address.number} {userInfo.address.street} {userInfo.address.city} {userInfo.address.zipcode}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}