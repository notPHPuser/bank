import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const addPost = async () => {
    try {
      await axios.post('http://localhost:5001/api/posts', { login, email, password });
      setLogin('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='register'>
        <h1 className='text_register'>Регестрация</h1>
        <form onSubmit={addPost}>
          <input
            name='login'
            className='forReg'
            type='text'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder='Введите логин'
            required
          />
          <input
            name='email'
            className='forReg'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Введите почту'
            required
          />
          <input
            name='password'
            className='forReg'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Введите пароль'
            required
          />

          <button className='submitRegister' type='submit'>
            Зарегестрироваться
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
