import "../css/Header.css"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';



function Header({searchTerm,setSearchTerm,handleSearch}) {
  const onSearchChange = (e)=>{
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  }
  return (
    <div className="header-content">
    <Navbar expand="lg" className="">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
      
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Party</Nav.Link>
            <Nav.Link href="#action2">Rewind</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
            <Nav.Link href="#action2">Settings</Nav.Link>
         </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search game titles"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={onSearchChange}
            />
            <div className="user-profile">
        <img
          src="app/public/game-images/profilImages.png" 
          alt="User Profile"
          className="profile-image"
        /></div>
              <Dropdown>
          <Dropdown.Toggle  id="dropdown-basic" className="username-dropdown">
            Hakancko
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
  );
}

export default Header;