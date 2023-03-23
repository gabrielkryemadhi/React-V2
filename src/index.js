import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './container';
import { Input } from './input';
import './style.css'
import { Welcome } from './welcome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     <Container title="My awesome Application" >
       <h1>My awesome Application</h1>
       <Welcome />
       <Input />  
     </Container>
     </>
);
