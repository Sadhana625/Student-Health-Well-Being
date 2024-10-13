import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using 'react-dom/client'
import App from './App';
import './index.css'; // Your global styles

// Create a root element
const rootElement = document.getElementById('root'); // Ensure this matches the ID in index.html

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root only if element is found
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
