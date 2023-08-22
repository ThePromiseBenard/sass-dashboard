"use client"

import styles from './Charts.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { barData, options } from './data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,

);

const Charts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>sales analytics</p>
          <span>
            yearly
            <MdKeyboardArrowDown />
          </span>
        </div>
        <Bar options={options} data={barData} />
      </div>
      <div className={styles.left}>
        <div className={styles.title}>
          <p>total visitors</p>
        </div>
      </div>
    </div>
  );
};
export default Charts;
