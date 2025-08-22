import styles from './BottomBar.module.css';

export default function BottomBar() {
  const now = new Date().toLocaleTimeString();

  return (
    <div className={styles.bottom}>
      <span>{now}</span>
      <div className={styles.buttons}>
        <button>Settings</button>
        <button>Help</button>
      </div>
    </div>
  );
}
