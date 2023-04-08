import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom'

import App from './App.js';

const root = createRoot(document.getElementById('root'))
root.render(<App />);