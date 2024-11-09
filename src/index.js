import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import reportWebVitals from './reportWebVitals'; // Performance measuring tool

// Lazy load the App component for better performance
const App = React.lazy(() => import('./App'));

// Create a root element to render the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app with Suspense to handle the lazy-loaded App component
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals(console.log); // Log performance metrics to the console
