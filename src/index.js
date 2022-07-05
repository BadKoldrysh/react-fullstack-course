import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const persons = [
  { name: 'Arthur the King', number: '+420775090133' },
  { name: 'Adam West', number: '+420771290133' },
  { name: 'Bedrich Smetana', number: '+420778990621' },
  { name: 'Tom Waits', number: '+38077399062' },
  { name: 'Walter Paul', number: '+38057891062' },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />);
