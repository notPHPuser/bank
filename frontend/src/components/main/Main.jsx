import React from 'react';
import './Main.css';
import money2 from '../../assets/money2.png';
import cards from '../../assets/cards.png';
import credit_card from '../../assets/credit_card.png';
import crown from '../../assets/crown.png';
import moneybox from '../../assets/moneybox.png';
import money_chart from '../../assets/money_chart.png';
import sim_card from '../../assets/sim_card.png';
import shield from '../../assets/shield.png';
import plane from '../../assets/plane.png';

function Main() {
  return (
    <>
      <a href='#' className='main-page'>
        <p className='p-main'>Подписка AdbK Pro в подарок</p>
        <p className='p-not-main'>Еще больше кэшбека и бонусов от Adbk партнеров</p>
        <a className='a-main' href=''>
          Подключить
        </a>
        <img className='photo_money' src={money2} alt='' />
      </a>
      <div className='choice_services'>
        <div className='choice_services_all'>
          <div className='all_cards_link'>
            <a href='' className='all_cards'>
              <img className='photo_card_one' src={cards} alt='' />
              Дебетовые <br /> карты
            </a>
            <a href='' className='all_cards'>
              <img className='photo_card_one' src={cards} alt='' />
              Кредитные <br /> карты
            </a>
            <a href='' className='all_cards'>
              <img className='photo_credit_card' src={credit_card} alt='' />
              Кредиты
            </a>
          </div>

          <div className='premiun_services'>
            <a href='' className='all_prem_services'>
              <img className='crown' src={crown} alt='' />
              Премиум
            </a>
            <a href='' className='all_prem_services'>
              <img className='moneybox' src={moneybox} alt='' />
              Вклады
            </a>
            <a href='' className='all_prem_services'>
              <img className='money_chart' src={money_chart} alt='' />
              Инвестиции
            </a>
          </div>

          <div className='Additional_services'>
            <a href='' className='all_add_services'>
              <img className='sim_card' src={sim_card} alt='' />
              Сим-карта
            </a>
            <a href='' className='all_add_services'>
              <img className='shield' src={shield} alt='' />
              Страхование
            </a>
            <a href='' className='all_add_services'>
              <img className='plane' src={plane} alt='' />
              Путешествие
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
