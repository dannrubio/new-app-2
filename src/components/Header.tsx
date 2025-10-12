import React from 'react';
import HeaderLink from './HeaderLink';
import { headerLinks } from '../data/links';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    {headerLinks.map((link) => (
                        <li key={link.href}>
                            <HeaderLink href={link.href} title={link.title} />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;