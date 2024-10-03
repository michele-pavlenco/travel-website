import React from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../data/data.json';


const getImage = (imageName) => {
    try {
        return require(`../Images/${imageName}`);
    } catch (err) {
        console.error(`Errore durante il caricamento dell'immagine: ${imageName}`, err);
        return null;
    }
};

const Reviews = () => {
    return (
        <div id='reviews'>
            <Container>
                <h2 className='my-5 text-center'>Happy Customer</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.75,
                        },
                    }}
                    className="mySwiper"
                >
                    {data.happy_customers.map((customer, index) => (
                        <SwiperSlide key={index}>
                            <div className='slide d-flex flex-column p-3 position-relative'>
                                <p>{customer.testimonial}</p>
                                <div className='d-flex'>
                                    <Image className=' h-100' name={customer.name} src={getImage(customer.image)} alt={customer.name} />
                                    <div className='px-3'>
                                        <h3 className='py-2 mb-0 pb-0'>{customer.name}</h3>
                                        <h5>{customer.role}</h5>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default Reviews;