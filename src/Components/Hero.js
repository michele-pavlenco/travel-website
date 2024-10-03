import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Hero = () => {
    return (
        <div id='hero'>
            <Container className="position-relative  d-flex justify-content-center align-items-center">
                <div className="position-absolute m-4">
                    <div className="m-auto text-white text-center">
                        <h1>Travel to explore</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris</p>
                    </div>
                    <div className="imput-container p-2 justify-content-center align-items-center bg-white rounded px-2">
                        <div className='text-dark text-left'>
                            <p className='mb-0'>Where You Wantto go</p>
                            <FloatingLabel label="Search youre location">
                                <Form.Control type="contry" placeholder="Search youre location" />
                            </FloatingLabel>
                        </div>
                        <div className='text-dark'>
                            <p className='mb-0'>Check-in</p>
                            <FloatingLabel label="Add date">
                                <Form.Control type="date" placeholder="Add date" />
                            </FloatingLabel>
                        </div>
                        <div className='text-dark'>
                            <p className='mb-0'>Check-out</p>
                            <FloatingLabel label="Add date">
                                <Form.Control type="date" placeholder="Add date" />
                            </FloatingLabel>
                        </div>
                        <div className='hero-button'>
                            <Button variant="primary">Explore Now</Button>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    )
}

export default Hero