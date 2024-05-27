import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithProvider from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <Router>
            <AppWithProvider />
        </Router>
    </Provider>
);
