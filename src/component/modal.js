import {React ,useState ,useEffect} from 'react';
import {Modal, Button , Form, Col , Row } from 'react-bootstrap';
import axios from 'axios';

const ModalEdit=({el}) =>{
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [UpdatedAt,setUpdatedAt] = useState( 
        { title :el.title , genre:el.genre , image:el.image, rating:el.rating, year:el.year, duré:el.duré}
      )

    const handelUpdate=(e)=>{
        const {name , value} =e.target;
        setUpdatedAt( {
            ...UpdatedAt,
            [name]: value
        })
      }
      console.log(UpdatedAt);
        //update 
        const update=(id) =>{
            axios.put(`http://localhost:3007/posts/${id}`,UpdatedAt)
            .then((res) => {setUpdatedAt(res.data)})
          
          .catch(err => console.log(err));
        }
          useEffect(() => {
            update() 
        }, [])

    return (
      <div>
      <li>  <a  onClick={handleShow}>
        <i class="fas fa-pencil-alt"></i>
        </a> </li>
  
        <Modal
        show={show} onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Noxe </Modal.Title>
          </Modal.Header>
          <Modal.Body>
         
         
          <Row > 
        <Col   md={10} className="mx-auto mb-5">
          
        <Form >
      <Form.Group  >
     <Form.Control type="text" name="title" onChange={handelUpdate} defaultValue={el.title} placeholder="Titre de film" />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="genre" onChange={handelUpdate}  defaultValue={el.genre}placeholder="Genre de film" />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="duré" onChange={handelUpdate} defaultValue={el.duré} placeholder="Durée de film"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="image" onChange={handelUpdate} defaultValue={el.image} placeholder="Poster de film"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="rating" onChange={handelUpdate} defaultValue={el.rating} placeholder="Rating"  />
     </Form.Group>
     <Form.Group>
     <Form.Control type="text" name="year" onChange={handelUpdate} defaultValue={el.year} placeholder="Date de sortie "  />
     </Form.Group>
     <Button  onClick={()=> update(el.id) } type="submit" variant="danger"  className="btn-block">  Modifier le film</Button>
   </Form>
   </Col>
   
   </Row>
          </Modal.Body>
        
        </Modal>
      </div>
    );
  }
  
  export default ModalEdit