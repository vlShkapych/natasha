import { useState } from 'react';
import styles from './Browser.module.css';

export type BrowserProps = {
  browserSettings?: BrowsersSettings;
  browserColumns: string[];
  browserData: string[][];
};

export type BrowsersSettings = {
  headerBackColour: string;
  headerFontColour: string;
  headerFontStyle: string;
  dataBackColour: string;
  dataontColour: string;
  dataFontStyle: string;
};

function Browser({ browserSettings, browserColumns, browserData }: BrowserProps) {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(browserData[0][0]);

  return (
    <div className={styles.browser}>
      <table>
        <tr>
          {browserColumns.map((value, index) => (
            <th key={index} className={styles.browserHeader}>
              {value}
            </th>
          ))}
        </tr>
        {browserData.map((row, rowIndex) => (
          <tr
            className={`${styles.browserBody} ${row[0].toString().trim() === selectedItemId ? styles.selected : ''} `}
            key={row[0]}
            onClick={() => setSelectedItemId(row[0])}
          >
            {row.map((value, colIndex) => (
              <td key={colIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Browser;
