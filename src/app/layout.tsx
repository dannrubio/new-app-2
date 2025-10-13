import React from 'react';
import '../styles/globals.css';
import Header from '../components/Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};

export default Layout;