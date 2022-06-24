import styles from './style.module.scss';

function Button({ children }) {
  return (
    <button className={styles.button} type="button">{children}</button>
  );
}

export default Button;
