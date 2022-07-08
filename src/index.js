import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const personTypes = [
  { name: 'Unknown', value: 'unknown' },
  { name: 'Actor', value: 'actor' },
  { name: 'Composer', value: 'composer' },
  { name: 'Singer', value: 'singer' },
  { name: 'King', value: 'king' },
  { name: 'Programmer', value: 'programmer' },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App personTypes={personTypes} />);
