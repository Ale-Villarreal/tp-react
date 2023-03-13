import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (

    <Container fluid>
      <Row className='bg-dark p-5 text-white'>
        <Col>Empresa</Col>
        <Col>Rik</Col>
        <Col>Morty</Col>
        <Col>Otras</Col>
      </Row>
    </Container>
   
  )
}

export default Footer