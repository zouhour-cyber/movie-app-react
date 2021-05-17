import React,{useState} from 'react';
import Movie from '../component/movie';
import Menu from './navbar';
import {Row, Col, Container , InputGroup , FormControl ,Button } from 'react-bootstrap';


function Home ({movie, addFAvorite, favorite, addfavoriteMovie}){
    const [search, setSearch] = useState("");
    const handelChange=(e)=>{
       setSearch(e.target.value);
    }

    return (
        <div>
    
    <Container className="banner" fluid>
    <Menu handelChange={handelChange} search={search} favorite={favorite} /> 
    <Row className="d-flex justify-content-evenly mx-auto">
      <Col md={6} xs={10} className="ml-auto max-height text-justify" >
        <h5 class="text-banner">Films, Séries TV Et Bien Plus En Illimité.</h5>
        <h5> strange black entity from another world bonds with <br></br>
             Peter Parker and causes inner turmoil as </h5>
        
   <Row> 
   <Col md={6} xs={10} className="mt-4">
     
       <Button variant="danger"> Start your free 14-days trial </Button>
   </Col>
   </Row>
        </Col> 

        {/* <Col md={4} xs={10} className="mx-auto max-height">
        <div className="circle"> <a href="https://www.youtube.com/watch?v=l28ZsecmuFc"> <i class="fa fa-play"></i> </a> </div> 
        </Col> */}
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
 
    <Container className="bg-white " fluid>
    <Row  className="justify-content-center  title-banner">
      <Col md={10} xs={10} className="mx-auto text-center " >
        <h1 class="text-capitalize">Rejoignez notre communauté</h1>
        <h5>Abonnez-vous pour reçevoir nos offres</h5>

        </Col> 
 
      <Col md={6} xs={12} className="mx-auto mt-5">
      <InputGroup >
      <FormControl type="text"  id="newsletter"  placeholder="Saisir votre adresse e-mail" />
      <InputGroup.Append>
          <Button  variant="danger" type="submit"  > s'abonner</Button>
    </InputGroup.Append>
        </InputGroup>
        </Col>
      
       
   
    </Row>
    </Container>
    <Container >

<Row  className="my-5">
    <Col md={6} xs={12} className="">
        <img src="image/mobile.png" alt="mobile"/> 
      </Col>
    <Col md={5} xs={10} >
        <div className="text ">
    <h2 className="mt-5"> Téléchargez vos séries préférées pour les regarder hors connexion.</h2>
     <p className="mt-3"> Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</p>
     </div>
    </Col>
</Row>
</Container>
   <Container  className="bgcards" fluid>
   <h1 className="text-center my-5">  Our latest movies </h1>
   <Movie search={search} movie={movie} addFAvorite={addFAvorite} favorite={favorite} addfavoriteMovie={addfavoriteMovie} />   
     
    </Container>



    </div>
    )
}

export default Home
