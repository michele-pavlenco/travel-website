import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import hero from '../Images/Hero.png';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Hero = () => {
    return (
        <div id='hero'>
            <Container className="position-relative  d-flex justify-content-center align-items-center">
                {/* <Image src={hero} fluid className='backgroung-image' /> */}
                <div className="position-absolute m-4">
                    <div className="w-50 m-auto text-white text-center">
                        <h1>Travel to explore</h1>
                        <p>Discover the world through our unique travel experience Discover the world through our unique travel experience Discover the world through our unique travel experience</p>
                    </div>
                    <div className="imput-container justify-content-center align-items-center bg-white rounded px-2">
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

                        <Button variant="primary">Explore Now</Button>
                    </div>
                </div>


            </Container>
        </div>
    )
}

export default Hero