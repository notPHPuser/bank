import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <div className='header-width'>
        <div className='all'>
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
