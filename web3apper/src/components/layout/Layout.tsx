import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopToolbar from './TopToolbar';
import SemaphoresToolbar from './SemaphoresToolbar';
import BottomBar from './BottomBar';
import styles from './Layout.module.css';
import WindowManager from './WindowManager';
import Home from '../../pages/Home';

function Layout() {
  const [showTop, setShowTop] = useState(false);

  return (
    <div className={styles.container}>
      <TopToolbar visible={showTop} onToggle={() => setShowTop(!showTop)} />
      <SemaphoresToolbar />
      <WindowManager></WindowManager>
      <div className={styles.content}>
        <Home />
        {/* <Outlet /> */}
      </div>
      <BottomBar />
    </div>
  );
}

export default Layout;
