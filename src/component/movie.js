import React from 'react';
import {Row, Col, Container,Badge} from 'react-bootstrap';
// import Rater from 'react-rater';
// import 'react-rater/lib/react-rater.css'

function Movie ({search, movie, addFAvorite}) {

  return(
    search==="" ? 
      <Container fluid >
     <Row className="d-flex bgcards">
       
     {  movie.map(el=> 
     <Col md={3} sm={6} xs={12} className="mt-3">
          <div className="cardexp">
          <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
          <ul className="product-links">
            <li><a  onClick={addFAvorite}><i class="fa fa-heart"></i></a></li>
             <li><a ><i class="fa fa-play"></i></a></li>
          </ul>
          
          <div className="content">
            <div className="d-flex justify-content-around"> 
            <div>
            <h6 >  <Badge variant="danger">{el.genre}</Badge>  </h6>

            <h6> {el.title}</h6>
            <h6> {el.year}</h6>

          

            </div>
            <div>  
            {/* <Rater total={5} rating={el.rating} /> */}
            <h5> {el.rating} <i class="far fa-star  mr-2" id="iconstar"></i> </h5> 
            </div>
            </div>
         
            </div> 
            </div>
          </div> 
       </Col>
   ) }
   </Row>
   </Container> :  <Container fluid >
     <Row className="d-flex bgcards">
       
     {  movie.filter(el => 
     el.title.toLowerCase().includes(search.toLowerCase())
     ).map(el=> 
     <Col md={3} sm={6} xs={12} className="mt-3">
          <div className="cardexp">
          <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
          <ul className="product-links">
            <li><a href=""><i class="fa fa-heart "></i></a></li>
             <li><a href="youtube.comhttps://www.youtube.com/watch?v=wNFkFXORgQ"><i class="fa fa-play"></i></a></li>
          </ul>
          
          <div className="content">
            <div className="d-flex justify-content-around"> 
            <div>
            <h6 >  <Badge variant="danger">{el.genre}</Badge>  </h6>

            <h6> {el.title}</h6>
            <h6> {el.year}</h6>

          

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
