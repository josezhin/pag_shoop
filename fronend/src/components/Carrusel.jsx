import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';

// Crear un contexto para almacenar los datos de la API
const CarouselContext = React.createContext();

// Componente de Carrusel
export const Carrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);
  const carouselItems = useRef([]);
  const carouselIndicators = useRef([]);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/product/');
        setCarouselImages(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error al obtener las imágenes del carrusel:', error);
      }
    };
  
    fetchCarouselImages();
  }, []);
  

  useEffect(() => {
    carouselItems.current.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }, [currentSlide]);

  useEffect(() => {
    carouselIndicators.current.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.setAttribute('aria-current', 'true');
        indicator.classList.add('bg-white');
        indicator.classList.add('dark:bg-gray-800');
      } else {
        indicator.setAttribute('aria-current', 'false');
        indicator.classList.remove('bg-white');
        indicator.classList.remove('dark:bg-gray-800');
      }
    });
  }, [currentSlide]);

  return (
    <CarouselContext.Provider value={carouselImages}>
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`hidden duration-700 ease-in-out ${index === currentSlide ? '' : 'hidden'}`}
              ref={(el) => (carouselItems.current[index] = el)}
              data-carousel-item
            >
              <img
                src={image.image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={image.name}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white dark:bg-gray-800' : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              ref={(el) => (carouselIndicators.current[index] = el)}
            ></button>
          ))}
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() =>
            setCurrentSlide((currentSlide - 1 + carouselItems.current.length) % carouselItems.current.length)
          }
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
            <FaArrowLeft />
          </span>
        </button>

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() => setCurrentSlide((currentSlide + 1) % carouselItems.current.length)}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

// Componente que consume el contexto del Carrusel
export const CarouselConsumer = ({ children }) => (
  <CarouselContext.Consumer>
    {carouselImages => <>{children(carouselImages)}</>}
  </CarouselContext.Consumer>
);
