import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function ProductPreview({ item, nav }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/category/${nav}`);
  }

  return (
    <div>
      <Card style={{ width: '18rem', height: '30rem' }}>
        <Card.Img className="preview-image" variant="top" src={`${item.image}`} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            $
            {item.price}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>Go To Category</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
