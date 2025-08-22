import Semaphore from '../navigation/semaphore/Semaphore';
import styles from './SemaphoresToolbar.module.css';

export default function SemaphoresToolbar() {
  return (
    <div className={styles.bar} role="list" aria-label="System status indicators">
      <Semaphore
        name="Crazy Dove"
        state="green"
        icon={<img src="/icon_bird.png" alt="Crazy Dove" width={16} height={16} />}
      />{' '}
      <Semaphore
        name="Chess"
        state="yellow"
        icon={<img src="/icon_chess.png" alt="Chess" width={16} height={16} />}
      />
      <Semaphore
        name="Super Cars"
        state="red"
        icon={<img src="/icon_car.png" alt="Super Cars" width={16} height={16} />}
      />
      <Semaphore
        name="Todo"
        state="red"
        icon={<img src="/icon_app.png" alt="TODO" width={16} height={16} />}
      />
      <Semaphore icon={<img src="/icon_money_red.png" alt="TODO" width={16} height={16} />} />
      <Semaphore icon={<img src="/icon_message_yellow.png" alt="TODO" width={16} height={16} />} />
      <Semaphore icon={<img src="/icon_alarm_green.png" alt="TODO" width={16} height={16} />} />
    </div>
  );
}
