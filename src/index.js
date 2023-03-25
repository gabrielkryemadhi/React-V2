import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sum } from './sum';
import { Welcome } from './welcome';

const arr = [2, 0, 7, 7, 8]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     <Welcome />
     <Sum num={arr}/>
     </>
);
