import React from 'react';
import './RecomendedProduct.css';
import cardCP from '../../assets/cardCP.png';
import gifts20000 from '../../assets/gifts20000.png';
import iphone13 from '../../assets/iphone13.png';
import pig from '../../assets/pig.png';
import car from '../../assets/car.png';

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
        <div className='second_rp'>
          <div id='c1' className='second_rp_choice'>
            <h1 className='h_c'>Сим-карта AdbK</h1>
            <p className='p_c'>
              Попробуйте связь от AdbK до 13 <br /> марта и получите шанс <br /> выиграть iPhone 13
              на 128 ГБ.
            </p>
            <img className='photo_c' src={iphone13} alt='' />
            <a className='a_c'>Учавствовать</a>
          </div>
          <div id='c2' className='second_rp_choice'>
            <h1 className='h_c'>Вклады</h1>
            <p className='p_c'>
              Откройте вклад с пополнением и частичным изъятием. Каждый <br /> месяц получайте
              проценты <br /> на карту или вклад.
            </p>
            <img id='pig_photo' src={pig} alt='' className='photo_c' />
            <a className='a_c'>Открыть вклад</a>
          </div>
          <div id='c3' className='second_rp_choice'>
            <h1 className='h_c'>Страхование ОСАГО</h1>
            <p className='p_c'>Электроннрый полис с олнаййн-калькулятором и скидками</p>
            <img id='car_photo' src={car} alt='' className='photo_c' />
            <a className='a_c'>Рассчитать стоимость</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecomendedProduct;
