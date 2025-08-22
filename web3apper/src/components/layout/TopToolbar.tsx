import PopUpButton from '../navigation/popupMenu/PopUpButton';
import styles from './TopToolbar.module.css';

type Props = {
  visible: boolean;
  onToggle: () => void;
};

export default function TopToolbar({ visible, onToggle }: Props) {
  return (
    <div className={`${styles.toolbar} ${visible ? styles.visible : styles.hidden}`}>
      <button className={styles.toggleButton} onClick={onToggle}>
        {visible ? '▲ Hide' : '▼ Show'}
      </button>
      <div className={styles.content}>
        {visible && (
          <div>
            <PopUpButton name="Main">
              <PopUpButton name="Games">
                <PopUpButton name="Flappy Bird" onClick={() => alert('Flappy')} />
                <PopUpButton name="Tetris" onClick={() => alert('Tetris')} />
              </PopUpButton>
              <PopUpButton name="Sites">
                <PopUpButton name="Main Site" />
                <PopUpButton name="Admin" />
              </PopUpButton>
            </PopUpButton>
            <PopUpButton name="Main">
              <PopUpButton name="Games">
                <PopUpButton name="Flappy Bird" onClick={() => alert('Flappy')} />
                <PopUpButton name="Tetris" onClick={() => alert('Tetris')} />
              </PopUpButton>
              <PopUpButton name="Sites">
                <PopUpButton name="Main Site" />
                <PopUpButton name="Admin" />
              </PopUpButton>
            </PopUpButton>
            <PopUpButton name="Main">
              <PopUpButton name="Games">
                <PopUpButton name="Flappy Bird" onClick={() => alert('Flappy')} />
                <PopUpButton name="Tetris" onClick={() => alert('Tetris')} />
              </PopUpButton>
              <PopUpButton name="Sites">
                <PopUpButton name="Main Site" />
                <PopUpButton name="Admin" />
              </PopUpButton>
            </PopUpButton>
          </div>
        )}
      </div>
    </div>
  );
}
