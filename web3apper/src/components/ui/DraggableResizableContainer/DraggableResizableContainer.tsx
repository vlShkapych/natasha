// DraggableResizableContainer.tsx
import React, { useRef, useState, useEffect, type ReactNode } from 'react';
import { BiMinus, BiWindow, BiX } from 'react-icons/bi'; // або інші пакети, наприклад Ai, Hi

import styles from './DraggableResizableContainer.module.css';
import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { closeWindow, focusWindow } from '../../../store/actions/windowActionCreators';
type Props = {
  children: ReactNode;
  initialX?: number;
  initialY?: number;
  initialWidth?: number;
  initialHeight?: number;
  title?: string;
  isFocused?: boolean;
  id: string;
  code: string;
};

export default function DraggableResizableContainer({
  children,
  initialX = 50,
  initialY = 50,
  initialWidth = 300,
  initialHeight = 200,
  title = 'Окно',
  id,
  isFocused = true,
  code,
}: Props) {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [hidden, setHide] = useState(false);

  const dispatch = useAppDispatch();
  const onMouseDownDrag = (e: React.MouseEvent) => {
    setDragging(true);

    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    console.log('onMouseDownDrag', dragStart.current);
  };

  const onMouseDownResize = (e: React.MouseEvent) => {
    setResizing(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y });
      console.log('onMousemOVE&DRAG', dragging);
    } else if (resizing) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;

      setSize((prev) => ({ width: prev.width + dx, height: prev.height + dy }));
      dragStart.current = { x: e.clientX, y: e.clientY };

      console.log('onMousemOVE&DRAG', dragStart.current);
    }
  };
  const onMouseUp = () => {
    setDragging(false);
    setResizing(false);
    console.log('onMouseUp', dragging);
  };
  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [resizing, dragging]);

  useEffect(() => {
    setHide((prev) => {
      return prev === true ? false : prev;
    });
  }, [isFocused]);

  const setWindowMax = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className={`${styles.draggableWindow} ${hidden ? styles.hide : styles.show}`}
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
      }}
    >
      <div onMouseDown={onMouseDownDrag} className={styles.windowHeader}>
        <div className={styles.windowTitle}>{title}</div>
        <div className={styles.buttonsControlGroup}>
          <button
            className={styles.buttonControl}
            onClick={(e) => {
              e.stopPropagation();
              setHide(true);
            }}
          >
            <BiMinus />
          </button>
          <button className={styles.buttonControl} onClick={setWindowMax}>
            <BiWindow />
          </button>
          <button
            className={styles.buttonControl}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(closeWindow(id));
            }}
          >
            <BiX />
          </button>
        </div>
      </div>
      <div className={styles.windowContent}>{children}</div>
      <div className={styles.resizeHandle} onMouseDown={onMouseDownResize} />
    </div>
  );
}
