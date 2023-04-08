import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom'

import App from './App.js';

const root = createRoot(document.getElementById('root'))
root.render(<App />);
=======
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
>>>>>>> dev
