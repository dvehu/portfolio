import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/milky.jpg';
import skill1 from '../assets/img/software.png';
import skill2 from '../assets/img/web.png';
import skill3 from '../assets/img/branding.png';
import skill4 from '../assets/img/photography.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 }, 
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                In 2017, I started a technological career. Having immersed myself in photography, branding, website developmet and software engineering, I have found the synchronisity of technology.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                
                                <div className="item">
                                    <div class='chart x-75'>
                                    <img src={skill1} alt="An icon that represent's software engineering" />
                                        <div></div>
                                        <p>75%</p>
                                    </div>
                                   <h5>Software Engineering</h5>
                                </div>

                                <div className="item">
                                    <div class="chart x-83">
                                    <img src={skill2} alt="An icon that represent's web development" />
                                        <div></div>
                                        <p>83%</p>
                                    </div>
                                    <h5>Web Development</h5>
                                </div>

                                <div className="item">
                                    <div class="chart x-92">
                                    <img src={skill3} alt="An icon that represent's Brand Identity Design" />
                                        <div></div>
                                        <p>92%</p>
                                    </div>
                                    <h5>Design</h5>
                                </div>

                                <div className="item">
                                    <div class='chart x-90'>
                                        <img src={skill4} alt="An icon that represent's Photography" />
                                        <div></div>
                                        <p>90%</p>
                                    </div>
                                    <h5>Photography</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Showing galaxy background" />
        </section>
    )
}