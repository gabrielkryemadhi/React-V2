import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyList } from './mylist';

const tasks = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     <MyList tasks={['Billy', 'Kate']} />
     </>
);
