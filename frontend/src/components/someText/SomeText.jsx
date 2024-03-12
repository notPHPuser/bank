import React from 'react';
import './SomeText.css';
import { Link } from 'react-router-dom';

function SomeText() {
  return (
    <>
      <h1 className='goodText'>Нам доверяют более 20 млн клиентов</h1>
      <div className='WeAreGood'>
        <div className='goodItem'>
          <p className='p_first_goodItem'>
            AdbK обладатель пяти наград премии <br /> "Банк года" Банки.ру
          </p>
          <p className='p_second_goodItem'>
            Adbk был признан лучшим в следующих категориях: <br />
            -"Забота о клиенте" <br /> -"Digital-банк года" <br /> -"Народный рейтинг страховых
            компаний"
          </p>
          <Link to='/' className='btn_goodItem'>
            Подробнее
          </Link>
        </div>
      </div>
    </>
  );
}

export default SomeText;
