import {Button ,Row, Col, InputGroup , FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom';

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
    <h6>News</h6>
 
    
    </Col>
    <Col md={3} xs={12} className="mt-3">
    <h5>Account</h5>
    <h6>  Favorit list</h6>
    <h6> Movies</h6>
    <h6> Series</h6>
    
    </Col>

   <Col md={3} xs={12} className="mt-3">
      <h5> Newsletter </h5>
      <p>   Enter your email to create or restart your membership.</p>
      <InputGroup>
      <FormControl type="text" id="search-item" placeholder="E-mail adresse "/>
      <InputGroup.Append>
          <Button id="bs" type="submit"> <i class="fa fa-send mx-1"> </i></Button>
    </InputGroup.Append>
        </InputGroup>
   </Col>


<Col md={12} className="text-center mt-5">
<hr color="white"/>
 <p><Link to="/">  NOXE </Link> © Copyright 2021</p>
 </Col>
 </Row>

</div>

    )
    
}

export default Footer