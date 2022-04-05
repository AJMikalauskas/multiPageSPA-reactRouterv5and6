import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// This import and wrap around App.js activates the abilities of React Router 
    // Allows defining of routes to be done. in the App.js
root.render(<BrowserRouter><App /></BrowserRouter>);
