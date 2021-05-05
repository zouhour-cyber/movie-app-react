import {Button ,Row, Col, InputGroup , FormControl} from 'react-bootstrap'

function Footer() {
    return(
<div>
<Row className="bgfooter">
    <Col md={3} xs={12} className="mt-3">
 
      <img
        src="image/logo-dark.webp" color="#FF5A5F"
        width="100"
      
        className=""
        alt="moviehunter"
      />

    </Col>
    <Col md={3} xs={12} className="mt-3">
    <h5> Ressources</h5>
    <h6>About us</h6>
    <h6>Contact us</h6>
    <h6> Centre d'aide</h6>
 
    
    </Col>
    <Col md={3} xs={12} className="mt-3">
    <h5>Compte</h5>
    <h6> List de favoris</h6>
    <h6> Collections</h6>
    <h6> Nouveautés</h6>
    
    </Col>

   <Col md={3} xs={12} className="mt-3">
      <h5> Newsletter </h5>
      <p>  Saisissez votre adresse e-mail pour reçevoir nos actualités</p>
      <InputGroup>
      <FormControl type="text" id="search-item" placeholder="Adresse e-mail"/>
      <InputGroup.Append>
          <Button id="bs" type="submit"> <i class="fa fa-send ml-2"> </i></Button>
    </InputGroup.Append>
        </InputGroup>
   </Col>


<Col md={12} className="text-center mt-5">
<hr color="white"/>
 <p><a href="">  NOXE </a> © Copyright 2021</p>
 </Col>
 </Row>

</div>

    )
    
}

export default Footer