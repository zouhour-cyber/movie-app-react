import {Button ,Row, Col, InputGroup , FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Footer() {
    return(
<div>
<Row className="bgfooter">
    <Col md={4} xs={12} className="">
 
      <img
        src="image/logo-dark.webp" color="#FF5A5F"
        width="100"
      
        className=""
        alt="moviehunter"
      />
      <h6 className="mt-5"> Noxe offres unlimited movies, TV shows, and more. </h6>
      <div className="footer-social-link" >
      <ul class="d-flex justify-content-center">
      <li>
          <a href="#">
              <i className="fa fa-facebook"></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i className="fa fa-twitter"></i>
          </a>
      </li>
      <li>
          <a href="#">
          <i class="fa fa-instagram"></i>
          </a>
      </li>
      <li>
          <a href="#">
              <i class="fa fa-youtube"></i>
          </a>
      </li>
 
  </ul>
  </div>
    </Col>
    <Col md={2} xs={12} className="mt-5" >
    <h5> Ressources</h5>
    <div className="tiretbottom"> </div>
    <h6>About us</h6>
    <h6>Contact us</h6>
    <h6>News</h6>
 
    
    </Col>
    <Col md={2} xs={12} className="mt-5">
    <h5>Account</h5>
    <div className="tiretbottom"> </div>

    <h6>  Favorit list</h6>
    <h6> Movies</h6>
    <h6> Series</h6>
    
    </Col>

   <Col md={3} xs={12} className="mt-5">
      <h5> Newsletter </h5>
      <div className="tiretbottom"> </div>

      <p>   Enter your email to create or restart your membership.</p>
      <InputGroup>
      <FormControl type="text" id="search-item" placeholder="E-mail adress "/>
      <InputGroup.Append>
          <Button id="bs" type="submit"> <i class="fa fa-chevron-right mx-1"> </i></Button>
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