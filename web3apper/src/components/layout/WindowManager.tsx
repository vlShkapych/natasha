import styles from './WindowManager.module.css';

import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { closeWindow, focusWindow } from '../../store/actions/windowActionCreators';
import { BiX } from 'react-icons/bi';

export default function WindowManager() {
  const windows = useAppSelector((state) => state.windows);
  const dispatch = useAppDispatch();

  return (
    windows.length > 0 && (
      <div className={styles.bar} role="list" aria-label="Window manager">
        {windows.map((window) => (
          <div
            className={styles.tab}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(focusWindow(window.id));
            }}
          >
            <div>{window.title}</div>
            <div
              className={styles.closeIcon}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(closeWindow(window.id));
              }}
            >
              <BiX />
            </div>
          </div>
        ))}
      </div>
    )
  );
}
