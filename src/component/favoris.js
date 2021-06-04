import React, {useState} from 'react'
import Menu from './navbar'
import {Row, Col, Container,Badge , Button } from 'react-bootstrap'
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'
import Footer from './footer';


const Favoris =({favorite, favoritMovie, removeFavoriteMovie, removeFavoriteMovieAll}) => {
    const [search, setSearch] = useState("");
    const handelChange=(e)=>{
       setSearch(e.target.value);
    }

        return (
            <div>
            <Container className="bannerAbout" fluid> 
            <Menu favorite={favorite} handelChange={handelChange} />
            <Container>
            <Row className="max-height">  
            <Col md={5}> <h1 className="text-banner"> Mes Favoris</h1>   </Col>
            </Row>
            </Container>
            </Container>



      <Container fluid className="mb-5">
     
          <div className="d-flex justify-content-end "> 
      <Button variant="outline-light"  onClick={()=> removeFavoriteMovieAll()}> <i class="fa fa-trash-alt mr-2"></i> Remove all</Button>       
      </div> 
       <Row className="d-flex p-5 my-5">
        { favoritMovie.length ? (favoritMovie.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
         .map(el=> 
                      <Col md={3} sm={6} xs={12} className="mt-3">
                           <div className="cardexp">
                               <div className="d-flex"> 
                           <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
                           <ul className="product-links">
                              <li><a ><i class="fa fa-play"></i></a></li>
                              <li><a onClick={()=>removeFavoriteMovie(el)}><i class="fas fa-times"></i></a></li>

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
          ) ) : (<h3 > No favrites movies added </h3>) }

                    </Row>
               
                 </Container> 
                 <Footer/>

            </div>

            
        )

}

export default Favoris