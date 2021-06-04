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
  // Refresh the page //
    const Refresh=() =>{
      window.location.reload();
    }
   //-------------- Poster les films ---------------// 
    const handelSubmit=(e) => {
      console.log("posttttttttttttttttttttttt",input)      
      axios.post('https://newdash-291b6-default-rtdb.europe-west1.firebasedatabase.app/posts.json',input)
      .then(res=>  console.log(res))
      .then(response => Refresh())
      }
     
   //--------------Supprimer les films-------------// 
     const supprimer= (id) =>{
       console.log("biiiiiiiiiiiiiiiiiiiiiib" ,id)
       axios.delete(`https://newdash-291b6-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`)
         .then((res) => console.log("deleeeeeeeeeeeeeeeeeete",id))
         .then(response => Refresh())

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
  <SidebarHeader className="text-center">
    <h3> Dashoard </h3>
 {/* <img
        src="image/logo-dark.webp" 
        width="80"
       
        
        className="mx-auto mt-3 mb-3"
        alt="moviehunter"
      />  */}
  {/* <img
        src="image/michael-dam-mEZ3PoFGs_k-unsplash.jpg" 
        width="120"
        height="120"
        
        className="mx-auto mt-5 mb-3 rounded-circle"
        alt="moviehunter"
      />  */}

      
      {/* <h5 className="mb-4"> Admin@gmail.com</h5> */}
 </SidebarHeader>
    <SidebarContent className="my-5">
    <MenuItem> <a  onClick={handleShow}> <i class="fa fa-plus  mr-3 "></i> Add movie </a> </MenuItem>


      <MenuItem> <Link to="/">  <i class="fa fa-home  mr-3" ></i> Home  </Link> </MenuItem>
      <MenuItem> <Link to="/about"> <i class="fa fa-video  mr-3"></i>Movies</Link></MenuItem>
      <MenuItem>  <Link to="/serie"> <i class="fa fa-film mr-3"></i>Series</Link></MenuItem>
      <MenuItem>  <Link to="/serie"> <i class="far fa-heart mr-3"></i>Favoris </Link></MenuItem>

     
   </SidebarContent>
   <SidebarFooter className="pt-3">
   <MenuItem >  <i class="fa fa-users mr-3"></i> Users</MenuItem>
    <MenuItem > <i class="fa fa-chart-line mr-3"></i>Analytics</MenuItem>
  </SidebarFooter>
     </Menu>
   </ProSidebar> 
     </Col>
     <Col md={9} className="mtop bgwhite" >
          {/*modal  input */}
          <div className="d-flex justify-content-end mr-3"  > 
       <Button  id="uppercase" variant="dark" onClick={handleShow}>
       <i class="fa fa-plus"></i>
      </Button>
      </div>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton  className="bgdark">
          <Modal.Title> <h1> Noxe  </h1></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bgdark" >   
        <Row > 
        
        <Col   md={9} className="mx-auto my-4" >
          
        <Form >
      <Form.Group  >
     <Form.Control type="text" name="title" onChange={handelChange} placeholder="Title" />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="genre" onChange={handelChange} placeholder="Genre" />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="duré" onChange={handelChange} placeholder="Duration"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="image" onChange={handelChange} placeholder="Poster"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="rating" onChange={handelChange} placeholder="Rating"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="year" onChange={handelChange} placeholder="Year "  />
     </Form.Group>
   </Form>
   <Button onClick={handelSubmit}  variant="danger" id ="uppercase" className="btn-block mt-4 text-transform-uppercase">  Add movie </Button>

   </Col>
   
   </Row>
   </Modal.Body>

    </Modal>

       <Container className="mt-3">

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
      <td><Button variant="dark"  className="mr-2 btn-sm" onClick = {()=> supprimer(el)} ><i  class="fa fa-times"></i></Button> 
    <ModalEdit Refresh={Refresh} element={movie[el]} x={el} />  </td>
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