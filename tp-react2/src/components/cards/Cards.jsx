import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = (props) => {

  const{ id, image, name, species} = props.pers;

  console.log(props.pers)
  return (
    <Card key={id} style={{ width: '18rem' }} className='col-3 mx-2 g-0 shadow mb-3'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
          Especie: {species}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}

export default Cards