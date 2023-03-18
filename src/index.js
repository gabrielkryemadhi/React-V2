import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Counter startPoint={4} period={2000} incrementValue={11}/>
);
