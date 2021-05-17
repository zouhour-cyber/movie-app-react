import React from 'react'
import Menu from './navbar'
import {Row, Col, Container,Badge } from 'react-bootstrap'
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'


const Favoris =({favorite, favoritMovie}) => {
   
        return (
            <div>
                <Container className="bannerAbout" fluid> 
                <Menu favorite={favorite}/>
                <Container>
                    <Row className="max-height">  
                 <Col md={5}> <h1 className="text-banner"> Mes Favoris</h1>   </Col>
                    </Row>
                </Container>
                </Container>
                <Container fluid>
            
                <Row className="d-flex p-5">
       
       {favoritMovie.map(el=> 
       <Col md={3} sm={6} xs={12} className="mt-3">
            <div className="cardexp">
                <div className="d-flex"> 
            <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
            <ul className="product-links">
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
              <Rater  total={5} rating={el.rating} />
              </div>
              </div>
           
              </div> 
              </div>
            </div> 
            </div>
         </Col>
     ) }
     </Row>









                </Container>
            </div>
        )

}

export default Favoris