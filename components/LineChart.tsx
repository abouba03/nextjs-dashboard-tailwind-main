import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { data as jsonData } from '@/data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Line Chart - Multi Axis',
    },
  }
};

const getWeekdayLabels = () => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const currentDay = today.getDay();
  return [...weekdays.slice(currentDay), ...weekdays.slice(0, currentDay)];
};

const generateFakeData = () =>
  getWeekdayLabels().map(() =>
    faker.datatype.number({ min: -1000, max: 5000 })
  );

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: getWeekdayLabels(),
    datasets: [
      {
        label: 'Total',
        data: generateFakeData(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      }
    ],
  });

  useEffect(() => {
    const totals = jsonData.map((item) => item.total);
    
    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: totals,
        },
        {
          ...prevChartData.datasets[1],
          data: totals,
        },
      ],
    }));
  }, []);

  return <Line options={options} data={chartData} />;
};

export default LineChart;
