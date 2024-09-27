import React, { useState, useEffect, useRef } from 'react';
import './RelatedProducts.css';

function RelatedProducts({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);
  const carouselRef = useRef(null);

  const totalSlides = products.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const resetAutoSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideInterval.current);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="related-products">
      <h3 className="related-products__title">Produtos Relacionados</h3>
      <div className="carousel">
        {totalSlides > 1 && (
          <button
            className="carousel__button carousel__button--prev"
            onClick={() => {
              prevSlide();
              resetAutoSlide();
            }}
            aria-label="Anterior"
          >
            &#10094;
          </button>
        )}

        <div className="carousel__viewport">
          <div className="carousel__container" ref={carouselRef}>
            {products.map((prod, index) => (
              <div key={index} className="carousel__card">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="carousel__image"
                  loading="lazy"
                />
                <h4 className="carousel__name">{prod.name}</h4>
                <p className="carousel__price">Preço: R$ {prod.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {totalSlides > 1 && (
          <button
            className="carousel__button carousel__button--next"
            onClick={() => {
              nextSlide();
              resetAutoSlide();
            }}
            aria-label="Próximo"
          >
            &#10095;
          </button>
        )}
      </div>

      {totalSlides > 1 && (
        <div className="carousel__dots">
          {products.map((_, idx) => (
            <span
              key={idx}
              className={`carousel__dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => {
                setCurrentIndex(idx);
                resetAutoSlide();
              }}
            ></span>
          ))}
        </div>
      )}
    </section>
  );
}

export default RelatedProducts;
