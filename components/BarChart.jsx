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

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['31.10.2021-30.11.2021', '30.11.2021-31.12.2021', '31.12.2021-31.01.2022', '31.01.2022-28.02.2022', '28.02.2022-31.03.2022', '31.03.2022-30.04.2022', '30.04.2022-31.05.2022', '31.05.2022-30.06.2022', '30.06.2022-31.07.2022', '31.07.2022-31.08.2022', '31.08.2022-30.09.2022', '30.09.2022-31.10.2022', '31.10.2022-30.11.2022', '30.11.2022-31.12.2022', '31.12.2022-31.01.2023', '31.01.2023-28.02.2023', '28.02.2023-31.03.2023', '31.03.2023-30.04.2023', '30.04.2023-31.05.2023', '31.05.2023-30.06.2023', '30.06.2023-31.07.2023', '31.07.2023-31.08.2023', '31.08.2023-30.09.2023', '30.09.2023-31.10.2023'],
        datasets: [
            {
                label: 'CR ',
                data: [5.749486652977413, 3.9915966386554618, 12.183908045977011, 8.009708737864079, 9.585492227979273, 15.625, 7.602339181286549, 11.76470588235294, 12.337662337662337, 10.197368421052632, 0.4761904761904762, 0.6718406116066257, 0.9203379601689802, 0.8515469770082317, 1.130611665641705, 0.6577411068732, 0.6527331189710611, 0.7140089666242321, 0.593566819368504, 0.6335984403730699, 0.6152724778116023, 0.8757135443694863, 0.7360146331903403, 0.5913272010512484],
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

export default BarChart;
