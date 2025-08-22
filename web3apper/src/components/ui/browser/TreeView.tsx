import { useState } from 'react';
import styles from './TreeView.module.css';

export type TreeData = {
  id: number;
  type: 'group' | 'entity';
  header: string;
  children: TreeData[];
};

type PropsTreeView = {
  data: TreeData;
};

type PropsTreeNode = {
  data: TreeData;
};

function TreeNode({ data }: PropsTreeNode) {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = data.children && data.children.length > 0;

  return (
    <div className={styles.treeNode}>
      <div className={styles.treeHeader} onClick={() => hasChildren && setExpanded(!expanded)}>
        <span className={styles.icon}>
          {data.type === 'group' ? (expanded ? '📂' : '📁') : '📄'}
        </span>
        <span>{data.header}</span>
      </div>

      {hasChildren && expanded && (
        <div className={styles.children}>
          {data.children.map((child) => (
            <TreeNode key={child.id} data={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TreeView({ data }: PropsTreeView) {
  return (
    <div className={styles.treeView}>
      <TreeNode data={data} />
    </div>
  );
}
