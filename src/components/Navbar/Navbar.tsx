'use client';

import styles from './navbar.module.css';
import Logo from './Logo';
import NavLinks from './NavLinks';
import CTAButton from './CTAButton';

interface NavbarConfig {
    logoText: string;
    logoHref: string;
    navLinks: Array<{
        label: string;
        href: string;
        external?: boolean;
    }>;
    ctaButton: {
        label: string;
        href: string;
        external?: boolean;
    };
}

interface NavbarProps {
    config?: NavbarConfig;
}

const defaultConfig: NavbarConfig = {
    logoText: 'MonkeySoft',
    logoHref: '#/hero',
    navLinks: [
        { label: 'Services', href: '#services' },
        { label: 'Projects', href: '#projects' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: 'mailto:contact@example.com', external: false },
    ],
    ctaButton: {
        label: 'Get Started',
        href: '#contact',
        external: false,
    },
};

export default function Navbar({ config = defaultConfig }: NavbarProps) {
    return (
        <header className={styles.navbar}>
            <div className={styles.navbarWrapper}>
                <Logo href={config.logoHref} text={config.logoText} />

                <div className={styles.rightContainer}>
                    <NavLinks links={config.navLinks} />
                    <CTAButton
                        href={config.ctaButton.href}
                        label={config.ctaButton.label}
                        external={config.ctaButton.external}
                    />
                </div>
            </div>
        </header>
    );
}
