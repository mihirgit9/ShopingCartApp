import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import {store} from './Redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Provider store={store}>
            <App />
            <ToastContainer autoClose={1000} position= {toast.POSITION.TOP_CENTER} theme='dark'/>
        </Provider> 
    </BrowserRouter>
 
);
