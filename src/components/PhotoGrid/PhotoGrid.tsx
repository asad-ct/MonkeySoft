'use client';

import styles from './photoGrid.module.css';

const images = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
];

export default function PhotoGrid() {
    return (
        <section className="relative w-full min-h-screen bg-[#060606] flex items-center justify-center py-20 px-10">
            <div className={styles.parent}>
                <div className={`${styles.div1} ${styles.gridItem}`}>
                    <img src={images[0]} alt="Grid item 1" />
                </div>
                <div className={`${styles.div2} ${styles.gridItem}`}>
                    <img src={images[1]} alt="Grid item 2" />
                </div>
                <div className={`${styles.div3} ${styles.gridItem}`}>
                    <img src={images[2]} alt="Grid item 3" />
                </div>
                <div className={`${styles.div4} ${styles.gridItem}`}>
                    <img src={images[3]} alt="Grid item 4" />
                </div>
                <div className={`${styles.div5} ${styles.gridItem}`}>
                    <img src={images[4]} alt="Grid item 5" />
                </div>
                <div className={`${styles.div6} ${styles.gridItem}`}>
                    <img src={images[5]} alt="Grid item 6" />
                </div>
                <div className={`${styles.div7} ${styles.gridItem}`}>
                    <img src={images[6]} alt="Grid item 7" />
                </div>
                <div className={`${styles.div8} ${styles.gridItem}`}>
                    <img src={images[7]} alt="Grid item 8" />
                </div>
                <div className={`${styles.div9} ${styles.gridItem}`}>
                    <img src={images[8]} alt="Grid item 9" />
                </div>
            </div>
        </section>
    );
}
