import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome name={<strong>John</strong>} age="10"/>
  </React.StrictMode>
);
