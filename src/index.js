import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const personTypes = [
  { name: 'Unknown', value: 'unknown' },
  { name: 'Actor', value: 'actor' },
  { name: 'Composer', value: 'composer' },
  { name: 'Singer', value: 'singer' },
  { name: 'King', value: 'king' },
];
const persons = [
  { name: 'Arthur the King', number: '+420775090133', type: 'king' },
  { name: 'Adam West', number: '+420771290133', type: 'actor' },
  { name: 'Bedrich Smetana', number: '+420778990621', type: 'composer' },
  { name: 'Tom Waits', number: '+38077399062', type: 'singer' },
  { name: 'Walter Paul', number: '+38057891062', type: 'unknown' },
  { name: 'Carl IV', number: '+380661891062', type: 'king' },
  { name: 'Tom Cruise', number: '+3817731232', type: 'actor' },
  { name: 'Wolfgang Amadeus Mozart', number: '+420775899112', type: 'composer' },
  { name: 'Brad Pitt', number: '+18992351130', type: 'actor' },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} personTypes={personTypes} />);
