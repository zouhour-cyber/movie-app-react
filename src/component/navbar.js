// import logo-default-group-en.svg ./src;
import {Nav, Navbar} from 'react-bootstrap'
import {Form ,InputGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import src from '*.avif';
const Menu =(props) => {
  return (
    <div> 
<Navbar  className="nav" collapseOnSelect fixed="top" expand="lg" variant="light" >
<Navbar>
    <Navbar.Brand href="#home">
      <img
        src="image/logo-dark.webp" color="#FF5A5F"
        width="80"
      
        className=""
        alt="moviehunter"
      />
    </Navbar.Brand>

  </Navbar>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto ">
      <Link to="/" className="navlink"> Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    

  
    </Nav>
 
    <Form action="" className="mr-4">
  <input type="search" placeholder="search "/> 
  <i  className="fas fa-search"></i>
 
</Form>

   <Link to="/favoris" className="iconav"> <i class="far fa-heart  mr-4" ></i> <span className="badge badge-danger rounded-circle">0</span></Link>
    
  </Navbar.Collapse>
</Navbar>
  
     
    
 
    </div>
  );
}

export default Menu