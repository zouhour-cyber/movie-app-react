import React, {useState} from 'react'
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'
import {Container , Button ,Form,  Col , Row } from 'react-bootstrap';
import axios from 'axios';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarHeader , SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import {ModalEdit} from './modal';
import Table from 'react-bootstrap/Table';

const Dash = ({movie}) => {
    const [input, setInput] = useState(
        { title :"" , genre:"" , image:"", rating:"", year:"", duré:""}
    )
    //-------Récupérer la valeur des inputs----------//
    const handelChange=(e)=> {
      
        const {name , value} =e.target;
        setInput( {
            ...input,
            [name]: value
        })
       
    }
   //-------------- Poster les films ---------------// 
    const handelSubmit=(e) => {
      console.log("posttttttttttttttttttttttt",input)      
      axios.post('https://newdash-291b6-default-rtdb.europe-west1.firebasedatabase.app/posts.json',input)
      .then(res=>  console.log(res))
      }
     
   //--------------Supprimer les films-------------// 
     const supprimer= (id) =>{
       console.log("biiiiiiiiiiiiiiiiiiiiiib" ,id)
       axios.delete(`https://newdash-291b6-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`)
         .then((res) => console.log("deleeeeeeeeeeeeeeeeeete",id))
         .catch(error=>console.log("error",error))
     }
   
   //---------- Post Modal states --------------------//
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div >
            
   <Row className="d-flex justify-content-between dash">
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
     <Col md={9} className="mtop bgwhite px-5 " >
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

       <Container className="mt-5">

 <Table  hover className="text-center" >
 <thead >
    <tr>
      <th>Poster</th>
      <th>Tilte</th>
      <th>Genre</th>
      <th>Year </th>
      <th>Rating </th>
      <th>Actions </th>


    </tr>
  </thead>

  <tbody>
  {Object.keys(movie).map(el => (
    <tr>
      <td > <img src={movie[el].image} className="imagetable"/> </td>
      <td> {movie[el].title} </td>
      <td> {movie[el].genre} </td>
      <td> {movie[el].year} </td>
      <td> <Rater  interactive={false}  total={5} rating={movie[el].rating} /> </td>
      <td><Button variant="dark"  className="mr-2" onClick = {()=> supprimer(el)} ><i  class="fas fa-times"></i></Button> 
     <a><ModalEdit  element={movie[el]} x={el} />   </a></td>
    </tr>
    ))}
   
  </tbody>
  
</Table> 

 </Container>

 </Col>
 </Row>
 </div>
    ) 
}
  export default Dash