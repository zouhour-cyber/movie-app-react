// import {React ,useState} from 'react';

// import ModalTitle from 'react-bootstrap';
// import ModalBody from 'react-bootstrap';
// import ModalHeader from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap';
// import ModalFooter from 'react-bootstrap/ModalFooter';



// const Example=() =>{
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <div>
//         <Button variant="primary" onClick={handleShow}>
//           Launch static backdrop modal
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             I will not close if you click outside me. Don't even try to press
//             escape key.
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
  
//   export default Example