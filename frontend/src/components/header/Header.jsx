import React from 'react';
import './header.css';
import logo from '../../assets/profile.png';
import ListProfile from './listProfile/ListProfile';

function Header() {
  return (
    <>
      <div className='header'>
        <a className='adbk' href=''>
          AdbK
        </a>
        <ul className='list-header'>
          <li className='li-head'>Частым лицам</li>
          <li className='li-head'>Бизнусу</li>
          <li className='li-head'>Премиум</li>
          <li className='li-head'>Еще</li>
        </ul>
        <div className='profile'>
          <span>Личный кабинет</span>
          <img src={logo} className='logo' />
          <div className='listPro'>
            <ListProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
