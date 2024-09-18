import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/x.png';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/linkedin.png';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-item-center'>
                    <Col sm={6}>
                        <h1 className='text-center mb-160'>D Vehu Alonge</h1>
                    </Col>
                    <Col sm='6' className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href=""><img src={navIcon1} alt="" /></a>
                            <a href=""><img src={navIcon2} alt="" /></a>
                            <a href=""><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved, D Vehu Alonge</p>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}