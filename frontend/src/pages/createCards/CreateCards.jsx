import React, { useState } from 'react';
import './CreateCards.css';
import Header from '../../components/header/Header';
import axios from 'axios';

function CreateCards() {
  const [name, setName] = useState('');
  const [money, setMoney] = useState('');
  const [photo, setPhoto] = useState('');

  const addCard = async () => {
    try {
      await axios.post('http://localhost:5001/api/cards', { name, money, photo });
      setName('');
      setMoney('');
      setPhoto('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='header-width'>
        <div className='all'>
          <Header />
        </div>
      </div>
      <div className='Create_cards_menu'>
        <form onSubmit={addCard}>
          <input
            className='for_create'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='What name'
          />
          <input
            className='for_create'
            type='number'
            name='money'
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            placeholder='What money'
          />
          <input
            className='for_create_photo'
            type='file'
            name='photo'
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder='What photo'
          />
          <button className='submit_own' type='submit'>
            Создать
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateCards;
