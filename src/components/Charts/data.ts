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

export const barData: chartjs.ChartData<'bar'> = {
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
export const barOptions: chartjs.ChartOptions<'bar'> = {
  responsive: true,
  plugins: { legend: { display: false } },
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

export const pieData: chartjs.ChartData<'doughnut'> = {
  labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: ['#305C45', '#E6A960', '#47A8BD', '#EDF7D2'],
      borderWidth: 0,
    },
  ],
};

export const pieOptions: chartjs.ChartOptions<'doughnut'> = {
  responsive: true,
  cutout: 100,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        boxHeight: 8,
        boxWidth: 6,
      },
    },
  },
};

export const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any }) {
    const { ctx, data } = chart;
    ctx.save();
    ctx.font = 'bolder 30px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      '14.3K',
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};
