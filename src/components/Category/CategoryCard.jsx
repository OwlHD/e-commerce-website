import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CategoryCard({item}) {
    return (
      <Card style={{ width: '19rem', height: '35rem' }}>
        <Card.Img className='preview-image' variant="top" src={`${item.image}`} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <Card.Text>Rating: {item.rating.rate}({item.rating.count})</Card.Text>
          <Button variant="primary">More Details</Button>
          <br /><br />
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    );
  }