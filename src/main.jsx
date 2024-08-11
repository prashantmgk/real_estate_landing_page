import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './store/AuthContext.tsx';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <MantineProvider>
         <Notifications />
         <AuthProvider>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </AuthProvider>
      </MantineProvider>
   </React.StrictMode>
);
