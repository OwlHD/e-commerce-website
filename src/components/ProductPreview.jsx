import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductPreview() {
  return (
    <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media.istockphoto.com/photos/aggressive-angry-dog-picture-id542218056?k=6&m=542218056&s=612x612&w=0&h=jSawPE-i2QHM-6i1YVCiDfuu4nFSTcAlvuIepnIUFk0=" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
