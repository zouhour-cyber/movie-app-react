import React, {useState, useEffect} from 'react'
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'

// import Menu from './navbar'
import {Container , Button ,Form,  Col , Row , Badge} from 'react-bootstrap';
import axios from 'axios';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarHeader , SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import ModalEdit from './modal';

function Admin({movie}) {
    const [input, setInput] = useState(
        { title :"" , genre:"" , image:"", rating:"", year:"", duré:""}
    )
    //Récupérer la valeur de l'input
    const handelChange=(e)=> {
        const {name , value} =e.target;
        setInput( {
            ...input,
            [name]: value
        })
       
    }
 
    const handelSubmit=() => {
  
        axios.post("http://localhost:3007/posts",input)
        .then((response) => console.log(response))
        .catch((error)=> console.log(error))
       }
    
     const supprimer=(id) =>{
         axios.delete(`http://localhost:3007/posts/${id}`)
         .then((res) => console.log(res))
     }
   
   // function modal 0
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="bgwhite">
             {/* <Menu favorite={favorite} handelChange={handelChange} className="mb-5" /> */}
             

   <Row className="d-flex justify-content-between">
     <Col md={2}> 
     <ProSidebar>
  <Menu iconShape="square">
  <SidebarHeader className="text-center mb-5">

  <img
        src="image/michael-dam-mEZ3PoFGs_k-unsplash.jpg" 
        width="120"
        height="120"
        
        className="mx-auto mt-5 mb-3 rounded-circle"
        alt="moviehunter"
      /> 
      <h5 className="mb-4"> Admin@gmail.com</h5>
 </SidebarHeader>
    <SidebarContent className="my-5">
    <MenuItem icon={<FaGem/>}>Dashboard</MenuItem>

       
      <MenuItem> <Link to="/">Home </Link> </MenuItem>
      <MenuItem> <Link to="/about">Movies</Link></MenuItem>
      <MenuItem>  <Link to="/serie">Series</Link></MenuItem>
   </SidebarContent>
    <SidebarFooter className="mt-5">
    <MenuItem className="mt-2"> Users</MenuItem>
    <MenuItem>Analytics</MenuItem>

     </SidebarFooter>
     </Menu>
   </ProSidebar> 
     </Col>
     <Col md={9} className="mtop" >
          {/*modal  input */}
<Button variant="danger" className="px-5" onClick={handleShow}>
        Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Noxe </Modal.Title>
        </Modal.Header>
        <Modal.Body>   
        <Row > 
        
        <Col   md={10} className="mx-auto mb-5">
          
        <Form onSubmit={handelSubmit} >
      <Form.Group  >
     <Form.Control type="text" name="title" onChange={handelChange} placeholder="Titre de film" />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="genre" onChange={handelChange} placeholder="Genre de film" />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="duré" onChange={handelChange} placeholder="Durée de film"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="image" onChange={handelChange} placeholder="Poster de film"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="rating" onChange={handelChange} placeholder="Rating"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="year" onChange={handelChange} placeholder="Date de sortie "  />
     </Form.Group>
     <Button type="submit" variant="danger" className="btn-block">  Ajouter un film</Button>
   </Form>
   </Col>
   
   </Row>
   </Modal.Body>
    </Modal>

       <Container >
      
       <Row className="d-flex my-5">
         {movie.map(el => (
              <Col md={4} sm={6} xs={10} className="mt-3">
          <div className="cardexp" key={el.id}>
          <div className="imgfilm mb-3"> <img src={el.image} alt="imagemovie" className="imgexp"/> 
          <ul className="product-links">
            {/*start modal update*/}
            <li><a onClick={()=>supprimer(el.id)}><i class="fas fa-times"></i></a></li>
           <ModalEdit  el={el}  />
          
          </ul> 

          {/*fin modal*/ }
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
       </Col> ))}
       </Row>
    </Container>
    </Col>
      </Row>      
        </div>
    )
}

export default Admin
