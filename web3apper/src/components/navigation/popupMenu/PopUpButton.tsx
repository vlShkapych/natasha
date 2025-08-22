import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './PopUpButton.module.css';

type Props = {
  name: string;
  icon?: ReactNode;
  id?: string;
  onClick?: () => void;
  children?: ReactNode;
  level?: number;
};

export default function PopUpButton({ name, icon, id, onClick, children, level = 0 }: Props) {
  const [openDirection, setOpenDirection] = useState<'right' | 'left'>('right');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hasChildren = React.Children.toArray(children).length > 0;

  useEffect(() => {
    if (wrapperRef.current && children) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      const willOverflowRight = rect.left + 200 > screenWidth; // 200 is estimated submenu width
      setOpenDirection(willOverflowRight ? 'left' : 'right');
    }
  }, []);

  return (
    <div className={`${styles.popupWrapper} ${styles[`level${level}`]}`} ref={wrapperRef} id={id}>
      <button onClick={onClick} className={styles.button}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {icon}
          {name}
        </span>
        {hasChildren && level !== 0 && <span className={styles.arrow}>▶</span>}
      </button>

      {children && (
        <div
          className={`${styles.popupContent} ${
            openDirection === 'left' ? styles.left : styles.right
          }`}
        >
          {/* children buttons */}
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<Props>, { level: level + 1 })
              : child,
          )}
        </div>
      )}
    </div>
  );
}
