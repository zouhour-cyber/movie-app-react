import React , {useState}  from 'react'
import Menu from './navbar'
import Movie from '../component/movie';
import {Row, Col, Container , InputGroup , FormControl ,Button } from 'react-bootstrap';
import Footer from './footer';


function About({ movie, addFAvorite, favorite, addfavoriteMovie}){
    const [search, setSearch] = useState("");
    const handelChange=(e)=>{
       setSearch(e.target.value);
    }
        return (
            <div>
                 <Container fluid className="bannerAbout">
                <Menu favorite={favorite} handelChange={handelChange} search={search}/>
                <Container>
                    <Row className="max-height">  
                 <Col md={5}> <h1 className="text-banner"> It's Movie time </h1>   </Col>
                    </Row>
                </Container>
                </Container>
     <Row className="mx-auto my-5"> 
     <Col md={6} xs={12} className="mx-auto py-4">
      <InputGroup >
      <FormControl type="text"  placeholder="Recherchez vos films préférés" onChange={handelChange}  />
      <InputGroup.Append>
          <Button  variant="danger" type="submit"  > Rechercher</Button>
    </InputGroup.Append>
        </InputGroup>
        </Col>
  </Row>

                <Container  className="bgcards mt-5" fluid>
   <Movie search={search} movie={movie} addFAvorite={addFAvorite} favorite={favorite} addfavoriteMovie={addfavoriteMovie} />   
     
    </Container>
     {/* <Container >

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
       </Container> */}


      {/* <Container className="public" fluid> 
       <Row  className="d-flex justify-content-center"> 
    
   <Col md={5} className="text mt-5">
    <h2> NOxe, Qu'est ce que c'est ?</h2>
   <p>C'est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet. </p>

   </Col>
   <Col md={5}>
       <img src="image/tvt.jpg" alt="public"/>
       </Col>
       </Row>
       </Container>  */}
   
  
               
   <Footer/>
 
            </div>
        )
    }

export default About
