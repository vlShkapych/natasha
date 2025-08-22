import React from 'react';
import styles from './Semaphore.module.css';

type State = 'red' | 'yellow' | 'green';

interface SemaphoreProps {
  name?: string;
  state?: State;
  icon?: React.ReactNode;
}

export default function Semaphore({ name, state, icon }: SemaphoreProps) {
  return (
    <div className={styles.item} role="listitem" aria-label={`${name} status: ${state}`}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {name && <span className={styles.name}>{name}</span>}
      {state && <span className={`${styles.dioda} ${styles[state]}`} />}
    </div>
  );
}
