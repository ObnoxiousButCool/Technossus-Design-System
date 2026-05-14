/**
 * Client-side entry point.
 * Uses hydrateRoot to attach React to SSG-pre-rendered HTML.
 * Falls back to createRoot if no SSG HTML is present (dev / cold start).
 */
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import '../css/variables.css';

const container = document.getElementById('root')!;

// If the root already contains pre-rendered HTML, hydrate; otherwise create fresh.
const hasSSRContent = container.innerHTML.trim().length > 0;

const tree = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

if (hasSSRContent) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
