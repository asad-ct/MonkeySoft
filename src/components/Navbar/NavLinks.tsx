import Link from 'next/link';
import styles from './navbar.module.css';

interface NavLink {
    label: string;
    href: string;
    external?: boolean;
}

interface NavLinksProps {
    links: NavLink[];
}

export default function NavLinks({ links }: NavLinksProps) {
    return (
        <nav className={styles.navLinks}>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={styles.navLink}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
