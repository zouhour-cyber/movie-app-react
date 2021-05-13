import React from 'react';
import {Row, Col, Container,Badge} from 'react-bootstrap';

function Movie ({movie, addFAvorite}) {


  return(

      <Container fluid >
     <Row className="d-flex bgcards">
     { movie.map(el=> 
     <Col md={3} sm={6} xs={12} className="mt-3">
          <div className="cardexp">
          <div className="imgfilm mb-3"> <img src={el.image} className="imgexp"/> 
          <ul className="product-links">
            <li><button onClick={addFAvorite}> <i class="fa fa-heart fa-2x"></i></button></li>
             <li><a href="#"><i class="fa fa-play-circle fa-2x"></i></a></li>
          </ul>
          
          <div className="content">
            <div className="d-flex justify-content-around"> 
            <div>
            <h5> {el.title}</h5>
            <h6 >  <Badge variant="danger">{el.genre}</Badge>  </h6>
          

            </div>
            <div>  
            <h5> {el.rating} <i class="far fa-star  mr-2" id="iconstar"></i> </h5> 
            </div>
            </div>
         
            </div> 
            </div>
          </div> 
       </Col>
   ) }
   </Row>
   </Container>

  )
 }

export default Movie
