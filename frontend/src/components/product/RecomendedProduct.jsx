import React from 'react';
import './RecomendedProduct.css';
import cardCP from '../../assets/cardCP.png';

function RecomendedProduct() {
  return (
    <>
      <div className='recProduct'>
        <h1 className='h1_rec'>Рекомендованные продукты</h1>
        <a href='' className='first_product1'>
          <h1 className='crh1'>Крелитная карта "AdbK Премиум"</h1>
          <p className='crp1'>Оформите до 1 мая карту и получите бесплатное обсуживание навсегда</p>
          <img className='cardCP' src={cardCP} alt='' />
          <a href='#' className='cra11'>
            Оформить карту
          </a>
        </a>
        <a href='' className='first_product2'></a>
      </div>
    </>
  );
}

export default RecomendedProduct;
