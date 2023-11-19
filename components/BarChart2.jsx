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

const BarChart2 = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['31.10.2021-30.11.2021', '30.11.2021-31.12.2021', '31.12.2021-31.01.2022', '31.01.2022-28.02.2022', '28.02.2022-31.03.2022', '31.03.2022-30.04.2022', '30.04.2022-31.05.2022', '31.05.2022-30.06.2022', '30.06.2022-31.07.2022', '31.07.2022-31.08.2022', '31.08.2022-30.09.2022', '30.09.2022-31.10.2022', '31.10.2022-30.11.2022', '30.11.2022-31.12.2022', '31.12.2022-31.01.2023', '31.01.2023-28.02.2023', '28.02.2023-31.03.2023', '31.03.2023-30.04.2023', '30.04.2023-31.05.2023', '31.05.2023-30.06.2023', '30.06.2023-31.07.2023', '31.07.2023-31.08.2023', '31.08.2023-30.09.2023', '30.09.2023-31.10.2023'],
        datasets: [
            {
                label: 'CR',
                data: [1.1049723756906076, 1.1049723756906076, 1.6483516483516485, 1.1111111111111112, 2.2346368715083798, 1.6304347826086956, 1.6304347826086956, 5.319148936170213, 12.290502793296088, 7.547169811320755, 1.8209408194233687, 1.193139448173005, 0.7763221737020863, 0.9278350515463918, 1.1229646266142617, 0.7683352735739232, 0.9097801364670205, 1.1361791916896609, 0.6840530141085934, 0.5348955680081509, 1.107670319199619, 1.2689460697920338],
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
                text: 'Daily Revenue'
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

export default BarChart2;
