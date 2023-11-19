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

const BarChartPrAcq = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels:['30.06.2022', '31.07.2022', '31.08.2022', '30.09.2022', '31.10.2022', '30.11.2022', '31.12.2022', '31.01.2023', '28.02.2023', '31.03.2023', '30.04.2023', '31.05.2023', '30.06.2023', '31.07.2023', '31.08.2023', '30.09.2023'], 
        datasets: [
            {
                label: 'PR ',
                data: [1.0, 1.0, 1.0, 0.857142857, 0.571428571, 0.571428571, 0.571428571, 0.571428571, 0.571428571, 0.571428571, 0.714285714, 0.857142857, 1.0, 1.0, 1.0, 1.0] ,
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
                text: 'Эквайринг'
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

export default BarChartPrAcq;
