import { useEffect, useMemo, useRef, useState } from 'react';
import CrudButtons from '../crudButtons/CrudButtons';
import styles from './CrudForm.module.css';
import TreeView from '../browser/TreeView';
import { dataBrowser, columnsBrowser } from '../browser/testTreeData';
import Browser from '../browser/Browser';
import UserForm from '../forms/UserForm';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createCrudStore } from '../../../store/storeFactory/crudStoreFactory';
import { SetItems } from '../../../store/actions/crudFormActionCreator';
import { useAppSelector } from '../../../store/hooks/useAppSelector';
import { useCrudSelector } from '../../../store/hooks/crudSelector';

export default function CrudForm<T>({
  id,
  api,
}: {
  id: string;
  api: { baseUrl: string; entity: string };
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [browserWidth, setBrowserWidth] = useState(0.25);
  const isDraggingRef = useRef(false);

  const crudStore = createCrudStore<T>();

  const crud = useCrudSelector((state) => state.data);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${api.baseUrl}`);
      const data: any = await res.json();
      // crudStore.dispatch(SetItems<T>(data));
      console.log('status', res.status, 'content-type', res.headers.get('content-type'));
      console.log('data');
      console.log(data);
    }

    fetchData();
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = (e.clientX - containerRect.left) / containerRect.width;
    setBrowserWidth(Math.max(0.1, Math.min(0.9, newWidth)));
  };

  return (
    <Provider store={crudStore}>
      <div className={styles.crudContainer} ref={containerRef}>
        <div className={styles.toolbar}>
          <div className={styles.header}>Tree Toolbar</div>
          <div className={styles.crudButtons}>
            <CrudButtons />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.browser} style={{ width: `${browserWidth * 100}%` }}>
            <Browser browserData={dataBrowser} browserColumns={columnsBrowser} />
          </div>
          <div className={styles.resizer} onMouseDown={handleMouseDown}></div>
          <div className={styles.form}>
            <UserForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}
