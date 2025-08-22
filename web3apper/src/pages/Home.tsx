import PopUpButton from '../components/navigation/popupMenu/PopUpButton';
import CrudForm from '../components/ui/crudForm/CrudForm';
import DraggableResizableContainer from '../components/ui/DraggableResizableContainer/DraggableResizableContainer';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { useAppSelector } from '../store/hooks/useAppSelector';

import styles from './Home.module.css';

export interface Auditable {
  id: number;
  referenceId: string;
  createdBy: number;
  updatedBy: number;

  owner?: UserEntity; // можна зробити окремий тип
  createdAt: string; // LocalDateTime -> string (ISO)
  updatedAt: string; // LocalDateTime -> string (ISO)
}

export interface UserEntity extends Auditable {
  userId: string;
  firstName?: string;
  lastName?: string;
  email: string;
  loginAttempts?: number;
  lastLogin?: string; // LocalDateTime
  phone?: string;
  bio?: string;
  imageUrl?: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  enabled: boolean;
  mfa: boolean;
  qrCodeSecret?: string;
  qrCodeImageUri?: string;
  role?: RoleEntity[];
}
export interface RoleEntity extends Auditable {
  name: string;
  authorities: string; // або зробити enum Authority
}

export default function Home() {
  const windows = useAppSelector((state) => state.windows);
  const dispatch = useAppDispatch();
  type Entity = Auditable & Record<string, unknown>;
  console.log('rerere');
  return (
    <div className={styles.mainContainer}>
      {windows.map((window) => (
        <DraggableResizableContainer
          id={window.id}
          code={window.code}
          title={window.title}
          isFocused={window.isFocused}
        >
          <CrudForm<Entity> id={window.id} api={window.api}></CrudForm>
        </DraggableResizableContainer>
      ))}
    </div>
  );
}
