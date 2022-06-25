import styles from './style.module.scss';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button} type="button">{children}</button>
  );
}

export default Button;
