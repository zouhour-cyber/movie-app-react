import React, { Component } from 'react';
// import Banner from '../component/banner';
import Movie from '../component/movie';
import Menu from './navbar';
import {Row, Col, Container , InputGroup , FormControl ,Button } from 'react-bootstrap';




function Home() {
    return (
        <div>
    
    
    <Container className="banner" fluid>
    <Menu/> 
      
    <Row  className="max-height justify-content-center align-items-center">
      <Col xs={10} className="mx-auto text-center title-banner" >
        <h2 class="text-capitalize">Films, séries TV et bien plus en illimité. </h2>
        
 
      <Col xs={7} className="mx-auto mt-4">
      <InputGroup>
      <FormControl type="text"  placeholder="Chercher votre film préféré"/>
      <InputGroup.Append>
          <Button  variant="danger" type="submit">Rechercher</Button>
    </InputGroup.Append>
        </InputGroup>
        </Col>
      

    </Col>
    </Row>
    </Container>

   <h1 className="text-center my-5">  Our latest movies </h1>
   <Movie/>   
        </div>
    )
}

export default Home
