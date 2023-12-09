import {Navbar, Container, Nav} from 'react-bootstrap'
import "../App.css" 
//import iconGitHub from '../img/icon-github.svg'
//import iconLinkedin from '../img/icon-linkedin.svg'

export const NavBar = () => {
    return(
        <Navbar variant="dark">
        <Container>
          <Nav className="justify-content-end">
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#Projetos">Projetos</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      

    );
}