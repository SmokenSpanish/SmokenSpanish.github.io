import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from './theme/ThemeProvider';
import { routerBasename } from './lib/base';
import './styles/global.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={routerBasename()}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
