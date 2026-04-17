import Link from 'next/link';
import styles from './navbar.module.css';

interface LogoProps {
    href?: string;
    text?: string;
}

export default function Logo({ href = '#', text = 'Logo' }: LogoProps) {
    return (
        <Link href={href} className={styles.logo}>
            {text}
        </Link>
    );
}
