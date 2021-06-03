import {useState} from 'react'
import {Button, Modal, Form , Row, Col} from 'react-bootstrap'
import axios from 'axios'

    export const ModalEdit = ({element,x}) => {
    
    // Update Modal states//
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShowUpdated = () => setShow(true);

  
    // input's state //
    const [input, setInput] = useState(
      { title:element.title , genre:element.genre, image:element.image, rating:element.rating, year:element.year, duré:element.duré} )

    //Handle Change//
    const handleChangeUpdate = (e) => {
        const {name, value} = e.target
        setInput({...input, [name]:value})
    }

    //Modifier le film //
    const handleUpdate = async (id) => {
    await axios.put(`https://newdash-291b6-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`,input)
    .then(response => {
                       console.log('Data : ', response.data)
                       setInput(response.data)
                    })
    .catch(error => console.error('error', error)
    )}

  return(
      <>
    <Button variant="warning" onClick={handleShowUpdated}><i class="far fa-edit"></i></Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Noxe </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row> 
                <Col  md={10} className="mx-auto my-3" > 
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control className="form" type="text" placeholder="Enter the title" 
                    name="title"
                    defaultValue={element.title}
                    onChange={handleChangeUpdate}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control className="form" type="text" placeholder="Enter the genre" 
                    name = "genre"
                    defaultValue={element.genre}
                    onChange={handleChangeUpdate}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className="form" type="text" placeholder="Enter URL Image"
                    name = "image"
                    defaultValue={element.image} 
                    onChange={handleChangeUpdate}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control className="form" type="text" placeholder="Enter the rating" 
                    name = "rating"
                    defaultValue={element.rating}
                    onChange={handleChangeUpdate}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control className="form" type="text" placeholder="Enter the year" 
                    name = "year"
                    defaultValue={element.year}
                    onChange={handleChangeUpdate}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control className="form" type="text" placeholder="Enter the duration" 
                    name = "duré"
                    defaultValue={element.duré}
                    onChange={handleChangeUpdate}/>
                </Form.Group>
            </Form>
            <Button variant="danger" className="btn-block" onClick={()=>handleUpdate(x)}>
                Save Changes
            </Button>
            </Col>
            </Row>
            </Modal.Body>
            
           
        </Modal>
        </>
    )
}
