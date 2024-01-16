import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import PageNavigator from '@/pages/pages_controllers/Page_Navigator';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = document.getElementById('root');

const renderRoot = createRoot(root);

renderRoot.render(
    <React.StrictMode>
        <Router>
            <PageNavigator />
        </Router>
    </React.StrictMode>
);