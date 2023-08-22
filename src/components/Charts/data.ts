import { faker } from '@faker-js/faker';
import * as chartjs from 'chart.js';

const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const barData = {
  labels: months,
  datasets: [
    {
      label: 'sales',
      data: months.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor: '#E6A960',
      borderRadius: 100,
      barThickness: 5,
    },
  ],
};
export const options: chartjs.ChartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback(tickValue) {
          return tickValue ? `₦ ${tickValue}k` : '';
        },
      },
    },
  },
};
