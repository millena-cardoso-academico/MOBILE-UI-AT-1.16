import React from 'react';
import './SellerInfo.css';

function SellerInfo({ seller }) {
  return (
    <section className="seller-info">
      <h3 className="seller-info__title">Informações do Vendedor</h3>
      <div className="seller-info__card">
        <p><strong>Nome:</strong> {seller.name}</p>
        <p><strong>Email:</strong> {seller.email}</p>
        <p><strong>Telefone:</strong> {seller.phone}</p>
        <p><strong>Nota:</strong> {seller.rating} / 5</p>
      </div>
    </section>
  );
}

export default SellerInfo;
