import React from 'react';
import { footerLinks } from '../data/links';
import FooterLink from './FooterLink';

interface FooterProps {
    columns?: number;
}

interface LinkItemProps {
    href: string;
    title: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, title }) => (
    <a href={href}>{title}</a>
);

const Footer: React.FC<FooterProps> = ({ columns = 2 }) => {
    const linksPerColumn = Math.ceil(footerLinks.length / columns);
    const columnsData = Array.from({ length: columns }, (_, i) => 
        footerLinks.slice(i * linksPerColumn, (i + 1) * linksPerColumn)
    ); 

    return (
        <footer className="Footer">
            {columnsData.map((col, colIndex) => (
                <ul id={`column-${colIndex}`} key={colIndex}>
                    {col.map((link) => (
                        <li key={link.href}>
                            <FooterLink href={link.href} title={link.title} />
                            {/* <a href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                                {link.title}
                            </a> */}
                        </li>
                    ))}
                </ul>
            ))}
        </footer>
    );
};

export default Footer;

// const containerStyle: React.CSSProperties = {
//     // display: 'flex',
//     // gap: '32px',
//     justifyContent: 'space-between',
//     // padding: '24px',
//     borderTop: '1px solid #eaeaea',
// };

// const columnStyle: React.CSSProperties = {
//     // display: 'flex',
//     flexDirection: 'row',
//     gap: '8px',
// };
