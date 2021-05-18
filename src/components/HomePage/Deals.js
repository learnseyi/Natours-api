import React from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import {deals} from './images/deals'

const Deals = ()=>{
  return(<>
    <Container className='pt-3'>
    <Row>
    {deals.map((deal)=>{
    return(
      <Col key={deal.id}>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={deal.link} />

</Card>
</Col>
    )
  })}
    </Row>
    </Container>
  </>

  )
}
export default Deals;