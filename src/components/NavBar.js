import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from 'react';
import LogoLinked from '../assets/img/nav-icon1.svg'
function NavBar() {

    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=>window.removeEventListener("scroll",onScroll);
    },[])
  return (
    <Navbar expand="lg " className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Karas" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
          </Nav>
          <span className="nav-text">
            <div className="social-items">
               
              <a href='#facebook'>
                <img src={LogoLinked} alt='' />
              </a>
              <a href='#linkedin'>
                <img src={''} alt='' />
              </a>
              <a href='#facebook'>
                <img src={''} alt='' />
              </a>
               
            </div>
           
          </span>
           <button className='connect_btn' onClick={()=>console.log('have connected')}>
             Let's Connect
            </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;