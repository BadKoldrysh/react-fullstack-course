import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const persons = [
  {
    name: 'Arthur the King',
    number: '+420775090133'
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />);
