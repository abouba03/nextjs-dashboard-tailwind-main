import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { faker } from '@faker-js/faker';
import { data as jsonData } from '@/data/data';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const generateFakeData = () =>
  Array.from({ length: 100 }, () => ({
    x: faker.datatype.number({ min: -100, max: 100 }),
    y: faker.datatype.number({ min: -100, max: 100 }),
  }));

const ScatterChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: 'Total',
        data: generateFakeData(),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  });

  useEffect(() => {
    const totals = jsonData.map((item) => item.total);

    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: totals.map((total) => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: total,
          })),
        },
      ],
    }));
  }, []);

  return <Scatter options={options} data={chartData} />;
};

export default ScatterChart;
