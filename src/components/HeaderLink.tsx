import React from 'react';

interface HeaderLinkProps {
    href: string;
    title: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = (args) => {
    return (
        <a className="input-button" target="_blank" href={args.href}>{args.title}</a> 
    )
};

export default HeaderLink;