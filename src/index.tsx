import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/es/integration/react';

import App from '@/components/App';

import ErrorBoundary from './components/ErrorBoundary';
import store, { persistor } from './store';

ReactDOM.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </PersistGate>,
    document.getElementById('root'),
);
