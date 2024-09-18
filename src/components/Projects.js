import { Col, Container, Tab, Row, Nav } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/cosmos.jpg';
import projImg1 from '../assets/img/projImg1.jpeg';
import projImg2 from '../assets/img/projImg2.jpeg';
import projImg3 from '../assets/img/projImg3.jpeg';
import projImg4 from '../assets/img/projImg4.jpeg';
import projImg5 from '../assets/img/projImg5.jpeg';
import projImg6 from '../assets/img/projImg6.jpeg';
import projImg7 from '../assets/img/projImg7.jpeg';
import projImg8 from '../assets/img/projImg8.jpeg';
import stackImg1 from '../assets/img/stackImg1.png';
import { StackCard } from './StackCard';


const handleTopic = (e) => {
    if (e.target == document.getElementsByName('.nav-pills'[0])) {
        console.log('You Clicked Projects');
    }
}
export const Projects = () => {

    const projects = [
        {
            title: 'Doctor Appointment Booking Website',
            description: '',
            imgUrl: projImg1
        },

        {
            title: 'Tech Start Up',
            description: 'Dynamic display of services rendered by start up business',
            imgUrl: projImg2
        },
        {
            title: 'Daily POS',
            description: 'Track cash inflow, outflow, profit, and manages balance',
            imgUrl: projImg3
        },
        {
            title: 'E-Commerce Application System',
            description: 'Full-fletched enterprise level commerce application system',
            imgUrl: projImg4
        },
        {
            title: 'Hotel Booking Application',
            description: 'Hotel booking, hotel client management, tracking of rooms available',
            imgUrl: projImg5
        },
        {
            title: 'Real Estate Website',
            description: 'Web Application to manage available properties actively on sale',
            imgUrl: projImg6
        },
        {
            title: 'Travel and Tour Website',
            description: 'Users/ clients can visit website, check out exciting places of their desire, book a nearby hotel, and familiarize with the environment',
            imgUrl: projImg7
        },
        {
            title: 'Social Media Application',
            description: 'Login, Sign Up, Create Account, Chat, Search Querry and dynamically display UI Components',
            imgUrl: projImg8
        }
    ];

    const stackcard = [
        {
            title: 'AI & PS',
            description: 'I use Adobe Illustrator and Adobe Photoshop to create simple, yet beautifull, raster and no-raster graphical contents for screens and for prints',
            imgUrl: stackImg1
        },
        {
            title: 'HTML',
            description: 'A skeletal web programming language globally used to create web structures',
            imgUrl: stackImg1
        },
        {
            title: 'CSS',
            description: 'As a design enthusiast CSS reasonates with my understanding of life and technology. How ever beautifull platform i desire, CSS is my profound tool',
            imgUrl: stackImg1
        },
        {
            title: 'JavaScript',
            description: 'A scripting language used to cause interactivity for websites. ',
            imgUrl: stackImg1
        }
 
    ]

    return (
        <section className="project" id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Project</h2>
                        <p>
                            Every great project requires an indepth thought process to achieve. I have dedicated my core design approach to simplicity, modernity and relatability. Focusing on solving real world complex problems, with solutions in the most effecient and effective way.
                        </p>
                        <Tab.Container id='project-tabs' defaultActiveKey='first'>
                            <Nav variant='pills' className='nav-pills align-items-center justify-content-center mb-5' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second' onClick={handleTopic}>Technology</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third' onClick={handleTopic}>Personality</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <Row>
                                        {
                                            stackcard.map((stackcard, index) => {
                                                return (
                                                    <StackCard
                                                        key={index}
                                                        {...stackcard}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>Lorem Ipsum from third event key</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}