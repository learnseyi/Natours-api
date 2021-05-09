import React, {useEffect,useState}from 'react';
import {Container,Row,Button,Form,Col,Image} from 'react-bootstrap';
import {useFetch}from '../CustomHooks/useFetch';
import './nav.css';
import sun from './images/Sun.png'



function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const MyJumbotron = ({func})=>{
  const [isLoading, setLoading] = useState(false);
  const data = useFetch('https://express-1.slim147.repl.co/api/v1/tours') 
  if(data.length === 0){
    console.log('loading ...');
    }else{
        console.log(data)
    }
  

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
   
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return(<>
  <Container className='cname' fluid>
  <Row className='mx-5 searchBox'>
  <Col xs={8} className=''>
  <h3>Compare Millions of Cheap holidays</h3>
  <div className = ' w-50 p-4' style={{background:'white'}}>
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control onChange={func} className='test'type="email" placeholder="Enter Destination" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select an Airport</Form.Label>
    <Form.Control className='test' as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Row >
  <Col>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Select Date</Form.Label>
    <Form.Control className='test' type="date" placeholder="Select a date" />
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Nights</Form.Label>
    <Form.Control className='test' type="number" placeholder="Number of Nights" />
  </Form.Group>
  </Col>
  </Row>
    <Button  style={{background:'purple'}}
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    block>
      {isLoading ? 'Loading…' : 'Search'}
    </Button>
  </Form>
  </div>
  </Col>
  <Col>
  <Image className='sun'style={{width:100+'px'}} src={sun}  />
  <h1 className='name'>Natours-Api</h1>
  <h4 className='caption'>We bring your vacation dreams to life...</h4>
  </Col>
  </Row>

  </Container>
   
    </>
  )
}

export default MyJumbotron;

