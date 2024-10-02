import React, { useState } from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import data from '../data/data.json';

const getImage = (imageName) => {
    try {
        return require(`../Images/recommended-destinations/${imageName}`);
    } catch (err) {
        console.error(`Errore durante il caricamento dell'immagine: ${imageName}`, err);
        return null;
    }
};

const RecommendedDestinations = () => {
    // Stato per memorizzare la categoria attiva (tab selezionato)
    const [activeCategory, setActiveCategory] = useState('All');

    // Filtra le destinazioni in base alla categoria selezionata
    const filteredDestinations = activeCategory === 'All'
        ? data.recommended_destinations
        : data.recommended_destinations.filter(dest => dest.category === activeCategory);

    return (
        <div id="recommended-destinations" className="my-5">
            <Container>
                <h2 className="text-center mb-4">Recommended Destinations</h2>

                {/* Bootstrap Tabs per filtrare le destinazioni */}
                <Tabs
                    id="controlled-tab-example"
                    activeKey={activeCategory}
                    onSelect={(k) => setActiveCategory(k)}
                    className="mb-4 d-flex justify-content-center align-items-center border-0">

                    <Tab eventKey="All" title="All"></Tab>
                    <Tab eventKey="The Weekend Break" title="The Weekend Break"></Tab>
                    <Tab eventKey="The Package Holiday" title="The Package Holiday"></Tab>
                    <Tab eventKey="The Group Tour" title="The Group Tour"></Tab>
                    <Tab eventKey="Long Term Slow Travel" title="Long Term Slow Travel"></Tab>
                </Tabs>

                <Row>
                    {filteredDestinations.map((destination, index) => (
                        <Col md={4} className="mycard mb-4" key={index}>
                            <Card className="h-100 border-0">
                                <Card.Img
                                    variant="top"
                                    src={getImage(destination.image)} alt={destination.title}
                                />
                                <Card.Body>
                                    <Card.Title>{destination.title}</Card.Title>
                                    <Card.Text>{destination.description}</Card.Text>
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <p className='w-50'>
                                            {destination.icons && destination.icons.map((icon, i) => (
                                                <img
                                                    key={i}
                                                    src={getImage(icon)}
                                                    alt={`Icon ${i}`}
                                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                                />
                                            ))}
                                        </p>
                                        <p className="w-50 text-right"><strong>{destination.price}</strong></p>
                                        <p className="w-50">{destination.distance}</p>
                                        <p className="w-50 text-right">{destination.trip_duration}</p>
                                       
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default RecommendedDestinations;