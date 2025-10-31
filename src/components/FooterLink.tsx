import React from 'react';

interface FooterLinkProps {
    href: string;
    title: string;
}

const FooterLink: React.FC<FooterLinkProps> = (args) => {
    return (
        <a target="_blank" href={args.href}>{args.title}</a> 
    )
};

export default FooterLink;