import React from 'react';
import './RecomendedProduct.css';
import cardCP from '../../assets/cardCP.png';
import gifts20000 from '../../assets/gifts20000.png';

function RecomendedProduct() {
  return (
    <>
      <div className='recProduct'>
        <h1 className='h1_rec'>Рекомендованные продукты</h1>
        <a href='' className='first_product1'>
          <h1 className='crh1'>Крелитная карта "AdbK Премиум"</h1>
          <p className='crp1'>
            Оформите до 1 мая карту и получите бесплатное <br /> обсуживание навсегда
          </p>
          <img className='cardCP' src={cardCP} alt='' />
          <a href='#' className='cra11'>
            Оформить карту
          </a>
        </a>
        <a href='' className='first_product2'>
          <h1 className='crh2'>AdbK Инвестиции</h1>
          <p className='crp2'>Даем 20000 на первые инвестиции</p>
          <img className='gifts20000' src={gifts20000} alt='' />
          <a href='#' className='cra22'>
            Получить 20000
          </a>
        </a>
        <div className='second_rp'></div>
      </div>
    </>
  );
}

export default RecomendedProduct;
