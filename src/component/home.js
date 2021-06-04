import React,{useState} from 'react';
import Movie from '../component/movie';
import Menu from './navbar';
import {Row, Col, Container , InputGroup , FormControl ,Button } from 'react-bootstrap';
import Footer from './footer';


function Home ({moviemd, movie, addFAvorite, favorite, addfavoriteMovie}){
    const [search, setSearch] = useState("");
    const handelChange=(e)=>{
       setSearch(e.target.value);
    }
    return (
        <div>
   <Menu handelChange={handelChange} favorite={favorite} /> 
    <Container className="banner" fluid>
    <Row className="d-flex justify-content-evenly mx-auto">
      <Col md={6} xs={10} className="ml-auto max-height text-justify" >
        <h4 className="text-banner  ">Unlimited movies, TV shows, and more.</h4>
        <h4 className="mt-3">Watch anywhere. Cancel anytime. </h4>
        
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
    <h2 className="mt-5"> Watch everywhere.</h2>
     <h4 className="mt-3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h4>
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
        <h1 class="text-capitalize mb-3"> Ready to watch ? Join us </h1>
        <h5>Abonnez-vous pour reçevoir nos offres</h5>

        </Col> 
 
      <Col md={6} xs={12} className="mx-auto mt-5">
      <InputGroup >
      <FormControl type="text"  id="newsletter"  placeholder="Enter your  e-mail adress " />
      <InputGroup.Append>
       <Button  variant="danger" type="submit"  > Get started </Button>
       </InputGroup.Append>
        </InputGroup>
        </Col>
      
       
   
    </Row>
    </Container>
    <Container >

<Row  className="my-5">
    <Col md={6} xs={12} className=""  >
      <img src="image/mobile.png" alt="mobile"/> 
      </Col>
    <Col md={5} xs={10} >
    <div className="text ">
                    <h2  
                    className=" mt-5 mb-3">Download your shows to watch offline.</h2>
                    <h4>Save your favorites easily and always have something to watch.</h4>
                </div>
      
    </Col>
</Row>
</Container>
   <Container  className="bgcards" fluid>
   <h1 className="text-center my-5">  Our latest movies </h1>
   <Movie search={search} moviemd={moviemd} movie={movie} addFAvorite={addFAvorite} favorite={favorite} addfavoriteMovie={addfavoriteMovie} />   
     
    </Container>


    <Footer/>

    </div>
    )
}

export default Home
