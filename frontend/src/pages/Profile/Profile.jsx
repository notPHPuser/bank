import React from 'react';
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
        <ul className='ul_profile'>
          <li className='profile_name'>Михаил</li>
          <li className='profile_name'>Креветкин</li>
        </ul>
        <div className='row'></div>
      </div>
    </>
  );
}

export default Profile;
