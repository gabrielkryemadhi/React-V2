import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from './container';
import { Counter } from './state';
import { Sum } from './sum';
import { Welcome } from './welcome';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <>
     <Container title="Component composition">
     <Welcome />
     <Sum />
     <Counter inicialValue={7} />
     </Container>
     </>
);
