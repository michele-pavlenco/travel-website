import React from 'react';
import { Container } from 'react-bootstrap';
import data from '../data/data.json'; // Importa il file JSON con i dati dei blog

// Funzione per ottenere dinamicamente l'immagine
const getImage = (imageName) => {
    try {
        return require(`../Images/blogs/${imageName}`);
    } catch (err) {
        console.error(`Errore durante il caricamento dell'immagine: ${imageName}`, err);
        return null;
    }
};

const Blogs = () => {
    return (
        <section id="blogs" className="my-5">
            <Container>
                <h2 className="text-center mb-5">Blogs</h2>

                {/* Primo blog */}
                <div className="blogs d-flex cards-container">


                    <div className="first-blog">
                        <div className="mcard h-100 position-relative d-flex justify-content-center align-items-center text-center">
                            <div className="blog-image">
                                <img
                                    src={getImage(data.blogs[0].image)}
                                    alt={data.blogs[0].title}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                            <div className="blog-content p-3 position-absolute">
                                <h3>{data.blogs[0].title}</h3>
                            </div>
                        </div>
                    </div>

                    {/* Secondo e terzo blog */}
                    <div className="second-third-blogs d-flex flex-column">
                        {data.blogs.slice(1).map((blog, index) => (
                            <div className="mcard h-100 position-relative d-flex justify-content-center align-items-center text-center" key={index}>
                                <div className="blog-image">
                                    <img
                                        src={getImage(blog.image)}
                                        alt={blog.title}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                                <div className="blog-content p-3 position-absolute">
                                    <h3 className="font-weight-bold">{blog.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Blogs;