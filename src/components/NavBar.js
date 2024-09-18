import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/x.png';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/linkedin.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
            <Container>
                {/*<Navbar.Brand href="#home">
                    <h1 className="logo">D Vehu</h1>
    </Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>

                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="x.com/dvehu"><img src={navIcon1} alt="" /></a>
                            <a href="github.com/@dvehu"><img src={navIcon2} alt="" /></a>
                            <a href="linkedin.com/dvehu"><img src={navIcon3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => { console.log('connect'); }}>View Resume</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}