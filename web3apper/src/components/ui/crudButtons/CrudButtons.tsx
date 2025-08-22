import styles from './CrudButtons.module.css';

import { RiAddBoxFill } from 'react-icons/ri';
import { IoCopy } from 'react-icons/io5';

import { MdDelete } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';

import { PiKeyReturnFill } from 'react-icons/pi';

import { RiFileHistoryFill } from 'react-icons/ri';

import { RiEditBoxFill } from 'react-icons/ri';

export default function CrudButtons() {
  return (
    <div className={styles.crudForm}>
      <RiAddBoxFill className={styles.createBtn} />
      <RiEditBoxFill className={styles.editBtn} />
      <IoCopy className={styles.copyBtn} />
      <MdDelete className={styles.deleteBtn} />
    </div>
  );
}
