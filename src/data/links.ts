export interface LinkItem {
    href: string;
    title: string;
}

export const headerLinks: LinkItem[] = [
    { href: "/", title: "Home" },
    { href: "/features", title: "Features" },
    { href: "/pricing", title: "Pricing" },
    { href: "/contact", title: "Contact" },
    { href: "/login", title: "Login" },
    { href: "/about", title: "About" }
];

export const footerLinks: LinkItem[] = [ 
    { href: "/about", title: "About" },
    { href: "/team", title: "Team" },
    { href: "/careers", title: "Careers" },
    { href: "/blog", title: "Blog" },
    { href: "/docs", title: "Docs" },
    { href: "/support", title: "Support" },
    { href: "/contact", title: "Contact" },
    { href: "/privacy", title: "Privacy" },
    { href: "/terms", title: "Terms" }
];
