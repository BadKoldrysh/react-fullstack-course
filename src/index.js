import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const persons = [
  {
    id: 1,
    name: 'Arthur the King'
  },
  {
    id: 2,
    name: 'Lancelot'
  },
  {
    id: 3,
    name: 'Uter'
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />);
