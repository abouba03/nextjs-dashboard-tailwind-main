import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartPrPKO = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels:['31.10.2021', '30.11.2021', '31.12.2021', '31.01.2022', '28.02.2022', '31.03.2022', '30.04.2022', '31.05.2022', '30.06.2022', '31.07.2022', '31.08.2022', '30.09.2022', '31.10.2022', '30.11.2022', '31.12.2022', '31.01.2023', '28.02.2023', '31.03.2023', '30.04.2023', '31.05.2023', '30.06.2023', '31.07.2023', '31.08.2023', '30.09.2023', '31.10.2023'], 
        datasets: [
            {
                label: 'PR ',
                data: [0.0, 1.0, 1.0, 0.923076923, 0.846153846, 0.769230769, 0.615384615, 0.615384615, 0.461538462, 0.461538462, 0.384615385, 0.384615385, 0.384615385, 0.461538462, 0.384615385, 0.307692308, 0.384615385, 0.615384615, 0.692307692, 0.769230769, 1.0, 1.0, 0.923076923, 0.923076923, 0.923076923] ,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4',
              }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PKO'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChartPrPKO;
