import React from 'react';
import './About.css'
import useAbout from "../../hooks/useAbout"
import { Card, Col, Row } from 'react-bootstrap';
import { FaArrowCircleRight } from "react-icons/fa";

const About = () => {
    const { about } = useAbout();
    return (
        <div className="container mb-4">
            <div className="about-text mt-5 ">
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do n An delighted offending curiosity my is basswoods at.Boy prosperous increasing surrounded</p>
            </div>
            <Row xs={1} sm={2} md={3} className="g-4">
                {about?.map(singleAbout => <Col>
                    <Card className="about-card mt-5">
                        <Card.Img variant="top" src={singleAbout.image} />
                        <div className="card-bottom">
                            <div><img className=" card-icon" src={singleAbout.icon} alt="" /></div>
                            <Card.Body className="card-text">
                                <Card.Title className="my-3">{singleAbout.title}</Card.Title>
                                <Card.Text>{singleAbout.description}</Card.Text>
                                <Card.Text className="text-danger see-more">See More<FaArrowCircleRight className="fs-5 ms-2" /></Card.Text>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                )}

            </Row>
        </div>
    );
};

export default About;