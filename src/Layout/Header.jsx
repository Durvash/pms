import { Container, Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteSession, getSession } from '../helpers/Auth';
import { apiRequest, errorMsg, successMsg } from '../helpers/General';

const Header = () => {
  const handleLogout = async () => {
    let data = getSession();
    let params = {
      api: '/logout',
      user_id: data.user.user_id,
      token: data.token,
      from_all_device: 'no'
    }
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded;multipart/form-data',
      'Access-Control-Allow-Origin': '*'
    }
    let response = await apiRequest('POST', params, headers);
    if (response.data.success) {
      successMsg(response.data.message);
      deleteSession();  /// exporting to app.js via props drilling
      window.location.replace("/");
    } else {
      errorMsg(response.data.message);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/dashboard">PMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/dashboard">Home</Nav.Link>
            <Nav.Link as={Link} to="/tasks">My Tasks</Nav.Link>
            <Nav.Link as={Link} to="/projects">My Projects</Nav.Link>
            
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>

            <NavDropdown title={<img src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp' className='rounded-circle navbar-profile-pic' />} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/change-password">Change Password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#" className="dropdown-item" onClick={() => handleLogout()}>Logout</NavDropdown.Item>
            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header