import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import CreateCards from './pages/createCards/CreateCards.jsx';
import YourCards from './pages/yourCards/YourCards.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/create_own',
    element: <CreateCards />,
  },
  {
    path: '/your_cards',
    element: <YourCards />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
