import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';

function YourCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/cards');
        setCards(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, []);

  return (
    <>
      <div className='header-width'>
        <div className='all'>
          <Header />
        </div>
      </div>
      <div className='your_cards'>
        {cards.map((cards) => (
          <li key={cards.id}>
            <p>{cards.name}</p>
            <img src='' alt='' />
          </li>
        ))}
      </div>
    </>
  );
}

export default YourCards;
