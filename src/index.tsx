import React from 'react';
import ReactDOM from 'react-dom';

/* Import 'Jost' font */
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/900.css';

import './styles/index.css';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
