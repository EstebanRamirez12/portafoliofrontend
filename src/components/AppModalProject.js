import React, { useState, useEffect } from 'react';
import '../styles/modalProjects.css';
import EmpleadoCel from '../assets/img/EmpleadoCel.jpeg';
import HomeCel from '../assets/img/HomeCel.jpeg';
import RepoAlmacen from '../assets/img/RepoAlmacen.jpeg';
import RepoVentas from '../assets/img/RepoVentas.jpeg';
import CrearProduct from '../assets/img/CrearProduct.jpeg';
import sistemaAfore from '../assets/img/afore2.png';
import segob1 from '../assets/img/segob1.jpeg';
import segob2 from '../assets/img/segob2.jpeg';
import segob3 from '../assets/img/segob3.jpeg';
import segob4 from '../assets/img/segob4.jpeg';
import segob5 from '../assets/img/segob5.jpeg';
const AppModalProject = ({ isOpen, onClose, title, fullDescription }) => {
    const [activeIndex, setActiveIndex] = useState(0); // Define activeIndex utilizando useState
    const [intervalId, setIntervalId] = useState(null); // Guarda el ID del intervalo
    let images = [];
    if(title === 'Gestor de flores'){
        images = [
            RepoAlmacen,
            EmpleadoCel,
            RepoVentas,
            HomeCel,
            CrearProduct     
        ];
    }else if(title === 'Citibanamex Afore'){
        images = [
            sistemaAfore

        ];
    }else if(title === 'Sistema de evaluación'){
        images = [
            segob1,
            segob2,
            segob3,
            segob4,
            segob5

        ];
    }
     

    useEffect(() => {
        // Iniciar el intervalo al abrir el modal
        if (isOpen) {
            const id = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            }, 5000); // Cambia de imagen cada 5 segundos
            setIntervalId(id);
        } else {
            // Limpiar el intervalo al cerrar el modal
            clearInterval(intervalId);
            setIntervalId(null);
        }

        // Limpiar el intervalo al desmontar el componente
        return () => {
            clearInterval(intervalId);
        };
    }, [isOpen]); // Ejecutar efecto cuando cambie el estado de isOpen

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='modal-background'>
            <div className={`modalProjects modal ${isOpen ? 'open' : ''}`}>
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <div className="carousel">
                        <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                            {images.map((image, index) => (
                                <div key={index} className={`carousel-slide`}>
                                    <img src={image} alt={`Slide ${index}`} />
                                </div>
                            ))}
                        </div>
                        <button className="prev" onClick={handlePrev}>&#10094;</button>
                        <button className="next" onClick={handleNext}>&#10095;</button>
                    </div>
                    <div className='projectName'><h1>{title}</h1></div>
                    <div className="text-container">
          <div className="scrollable-text">
            {fullDescription}
          </div>
        </div>
                </div>
            </div>
        </div>
    );
};

export default AppModalProject;
