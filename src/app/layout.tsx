import React from 'react';
import '../styles/globals.module.scss';
import Header from '../components/Header';
import App from '../App';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <App />
            </body>
        </html>
    );
};

export default Layout;