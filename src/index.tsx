import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'react-error-boundary';
import PageError from 'widgets/PageError';
import { StoreProvider } from 'app/providers/StoreProvider';

const appContainer = document.getElementById('root');
const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary fallback={<PageError />}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
