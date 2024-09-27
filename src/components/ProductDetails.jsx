import React, { useState } from 'react';
import './ProductDetails.css';

function ProductDetails({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.images;

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="product-details">
      <div className="carousel">
        <button className="carousel__button carousel__button--prev" onClick={prevImage}>
          &#10094;
        </button>
        <img
          className="carousel__image"
          src={images[currentImageIndex]}
          alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
        />
        <button className="carousel__button carousel__button--next" onClick={nextImage}>
          &#10095;
        </button>
      </div>
      <div className="product-details__info">
        <h2 className="product-details__title">{product.name}</h2>
        <p className="product-details__description">{product.description}</p>
        <p className="product-details__price"><b>Preço:</b> R$ {product.price.toFixed(2)}</p>
        <p className="product-details__rating"><b>Nota:</b> {product.rating} / 5</p>
      </div>
    </section>
  );
}

export default ProductDetails;
