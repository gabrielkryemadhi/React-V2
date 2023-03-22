import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './container';
import { Input } from './input';
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     <Container>
       <Input />  
     </Container>
     </>
);
