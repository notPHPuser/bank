import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import './Profile.css';

function Profile() {
  return (
    <>
      <div className='header-width'>
        <div className='all'>
          <Header />
        </div>
      </div>
      <div className='my_profile'>
        <h1 className='hello'>Здравствуйте!</h1>
        <Link className='create_own_href' to='/create_own'>
          Создать карту
        </Link>
      </div>
    </>
  );
}

export default Profile;
