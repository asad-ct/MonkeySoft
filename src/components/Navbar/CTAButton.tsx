import Link from 'next/link';
import styles from './navbar.module.css';

interface CTAButtonProps {
    href: string;
    label?: string;
    external?: boolean;
}

export default function CTAButton({
    href,
    label = 'Get Started',
    external = false
}: CTAButtonProps) {
    return (
        <Link
            href={href}
            className={styles.ctaButton}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
        >
            {label}
        </Link>
    );
}
