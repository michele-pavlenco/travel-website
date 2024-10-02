import React from 'react';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import data from '../data/data.json';

const Guarantees = () => {
    const getImage = (imageName) => {
        try {
            return require(`../Images/${imageName}`);
        } catch (err) {
            console.error(`Errore durante il caricamento dell'immagine: ${imageName}`, err);
            return null;
        }
    };

    return (
        <div id='guarantees'>
            <Container>
                <div className='cards-container d-flex justify-content-between flex-wrap my-5'>

                    {data.features.map((feature, index) => (
                        <div className='card d-flex flex-column p-3' key={index}>
                            <Image name="" src={getImage(feature.image)} alt={feature.title} />
                            <h3 className='py-2'>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Guarantees;