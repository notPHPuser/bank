import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import RecomendedProduct from './components/product/RecomendedProduct';
import SomeText from './components/someText/SomeText';

function App() {
  return (
    <>
      <div className='header-width'>
        <div className='all'>
          <Header />
          <Main />
          <RecomendedProduct />
          <SomeText />
        </div>
      </div>
    </>
  );
}

export default App;
