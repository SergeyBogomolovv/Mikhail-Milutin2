import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './fonts/JosefinSans-VariableFont_wght.ttf'
import './fonts/Nunito-VariableFont_wght.ttf'
import './fonts/Rubik-VariableFont_wght.ttf'
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename='/Mikhail-Milutin2'>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

