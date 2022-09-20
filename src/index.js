import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './context/theme';
import App from './App';
import GlobalStyles from './styles/globalStyle';
import { ModalProvider } from './context/modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalProvider>
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  </ModalProvider>
);
