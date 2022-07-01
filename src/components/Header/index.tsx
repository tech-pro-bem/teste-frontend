import styles from '../Header/styles.module.scss';

export function Header() {
    return(
        <header className={styles.header}>
            <span className={styles.span}>Pet Generator</span>
        </header>
    );
}