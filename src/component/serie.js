import React , {useState,useEffect} from 'react';
import {Row, Col, Container,Badge , InputGroup , FormControl ,Button } from 'react-bootstrap';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'
import Menu from './navbar'

function Serie ({  favorite ,addFAvorite, addfavoriteMovie}){
  const [search, setSearch] = useState("");
  const handelChange=(e)=>{
     setSearch(e.target.value); }

    const [serie, setSerie] = useState([])
    const getserie = ()=>{
      
      fetch('series.json').then(
            response => response.json()).then 
                     (series => setSerie(series));
    }
    
    useEffect(()=> {getserie()
    },[])
  
        return (
            <div>
                <Container fluid className="bannerAbout">
                <Menu favorite={favorite} handelChange={handelChange} search={search} />
              
                <Container>
                    <Row className="max-height">  
                 <Col md={5}> <h1 className="text-banner"> It's Serie time</h1>   </Col>

                 
                    </Row>
                  
                </Container>
                </Container>   
  <Row className="mx-auto my-5"> 
  <Col md={6} xs={12} className="mx-auto py-4">
      <InputGroup >
      <FormControl type="text"  placeholder="Recherchez vos séries préférées" onChange={handelChange}  />
      <InputGroup.Append>
          <Button  variant="danger" type="submit"  > Rechercher</Button>
    </InputGroup.Append>
        </InputGroup>
        </Col>
  </Row>
        
                { search === "" ?            
                <Container fluid >
  
     <Row className="d-flex m-5">
     { serie.map(el=> 
     <Col md={3} sm={6} xs={12} className="mt-3">
          <div className="cardexp">
          <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
          <ul className="product-links">
            <li><a  onClick = { () => {addFAvorite(); addfavoriteMovie(el)}}><i class="fa fa-heart"></i></a></li>
             <li><a ><i class="fa fa-play"></i></a></li>
          </ul>
          
          <div className="content">
            <div className="d-flex justify-content-around"> 
            <div>
            <h6 >  <Badge variant="danger">{el.genre}</Badge>  </h6>
       
           <div> <h6 > {el.title}</h6>  </div>
          
            <div className="d-flex justify-content-between"> 
            <div className="mr-4"> <h6 > {el.year}</h6> </div>  <div className="mr-5"> <h6> {el.duré}</h6> </div>
          
          <div> <h6><Rater  interactive={false}  total={5} rating={el.rating} />  </h6>  </div>
           </div>
            </div>

            <div>  
            </div>
            </div>
         
            </div> 
            </div>
          </div> 
       </Col>
   ) }
   </Row>
     
   </Container> 
   : <Container fluid>
     <Row className="d-flex m-5">
      {serie.filter(el => el.title.toLowerCase().includes(search.toLowerCase()))
      .map(el=> 
      
        <Col md={3} sm={6} xs={12} className="mt-3">
        <div className="cardexp">
        <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
        <ul className="product-links">
          <li><a  onClick = { () => {addFAvorite(); addfavoriteMovie(el)}}><i class="fa fa-heart"></i></a></li>
           <li><a ><i class="fa fa-play"></i></a></li>
        </ul>
        
        <div className="content">
          <div className="d-flex justify-content-around"> 
          <div>
          <h6 >  <Badge variant="danger">{el.genre}</Badge>  </h6>
     
         <div> <h6 > {el.title}</h6>  </div>
        
          <div className="d-flex justify-content-between"> 
          <div className="mr-4"> <h6 > {el.year}</h6> </div>  <div className="mr-5"> <h6> {el.duré}</h6> </div>
        
        <div> <h6><Rater  interactive={false}  total={5} rating={el.rating} />  </h6>  </div>
         </div>
          </div>

          <div>  
          </div>
          </div>
       
          </div> 
          </div>
        </div> 
     </Col>

    
      )}


     </Row>
     
     
     </Container>}
          
           
            </div>
        )

}

export default Serie;