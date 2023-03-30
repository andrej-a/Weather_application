import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { PersistGate } from 'redux-persist/es/integration/react';

import App from '@/components/App';

import ErrorBoundary from './components/ErrorBoundary';
import store, { persistor } from './store';
import theme from './styles/theme';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </PersistGate>,
);
