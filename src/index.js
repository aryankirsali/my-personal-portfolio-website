import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeContextWrapper from './components/theme/themeContextWrapper';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>
);
