import React,{useState} from 'react';
import Movie from '../component/movie';
import Menu from './navbar';
import {Row, Col, Container , InputGroup , FormControl ,Button } from 'react-bootstrap';


function Home (){
    const [search, setSearch] = useState("");
    const handelChange=(e)=>{
       setSearch(e.target.value);
    }

    return (
        <div>
    
    <Container className="banner" fluid>
    <Menu handelChange={handelChange} search={search} /> 
    <Row className="d-flex justify-content-evenly mx-auto">
      <Col md={6} xs={10} className="mx-auto max-height text-justify" >
        <h2 class="text-banner">Free Guy</h2>
        <h5> strange black entity from another world bonds with <br></br>
             Peter Parker and causes inner turmoil as </h5>
        
   <Row> 
   <Col md={6} xs={10} className="mt-4">
     
       <Button variant="outline-light"> Start your free 14-days trial </Button>
   </Col>
   </Row>
        </Col> 

        <Col md={4} xs={10} className="mx-auto max-height">
        <div className="circle"> <a href="https://www.youtube.com/watch?v=l28ZsecmuFc"> <i class="fa fa-play"></i> </a> </div> 
        </Col>
    </Row>
    </Container>
    <Container className="device" fluid>
        <Row className="d-flex justify-content-center">
            <Col md={5} xs={10}>
                <div className="text ">
                    <h2 className="mb-3">Où que vous soyez</h2>
                    <h4>Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris.</h4>
                </div>
            </Col>
            <Col md={6} xs={12}>
          <div><img src="image/device.png" alt="device" /></div>
         
            </Col>
        </Row>
    </Container>
    <Container className="bg-white py-5" fluid>
    <Row  className="justify-content-center  title-banner">
      <Col md={6} xs={10} className="mx-auto text-center " >
        <h1 class="text-capitalize">Films, séries TV et bien plus en illimité. </h1>
        <h6>Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h6>

        </Col> 
 
      <Col md={7} xs={12} className="mx-auto mt-4">
      <InputGroup>
      <FormControl type="text"  placeholder="Saisir votre adresse e-mail" />
      <InputGroup.Append>
          <Button  variant="danger" type="submit"  > s'abonner</Button>
    </InputGroup.Append>
        </InputGroup>
        </Col>
      
       
   
    </Row>
    </Container>
   <Container  className="bgcards" fluid>
   <h1 className="text-center my-5">  Our latest movies </h1>
   <Movie search={search}/>   
     
    </Container>


    </div>
    )
}

export default Home
