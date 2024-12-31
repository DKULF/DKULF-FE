import App from '@/App';
import RootLayout from '@/layouts/RootLayout';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <BrowserRouter>
        <RootLayout>
          <App />
        </RootLayout>
      </BrowserRouter>
    </ReactQueryProvider>
  </React.StrictMode>,
);
