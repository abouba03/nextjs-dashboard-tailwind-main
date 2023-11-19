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

const Inflation = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Сегмент id', 'Кластер', 'Средний возраст работников', 'Тип организации', 'bank_2', 'bank_3', 'bank_4', 'bank_5', 'bank_6', 'bank_7', 'bank_8', 'bank_9', 'bank_10', 'bank_13', 'bank_14', 'bank_15', 'bank_16', 'bank_17', 'bank_18', 'bank_19', 'bank_20', 'bank_21', 'bank_23', 'bank_24', 'bank_26', 'bank_27', 'bank_28', 'bank_29', 'bank_31', 'bank_32', 'bank_34', 'bank_35', 'bank_36', 'bank_37', 'bank_38', 'bank_39', 'bank_40', 'bank_45', 'bank_47', 'ns_promotion', 'acquiring_mobile', 'arenda_seyf', 'bank_straxovanie_imush', 'bank_straxovanie_lich', 'bank_straxovanie_otvet', 
        'capital_markets', 'cash_management', 'dcd', 'eko_tot', 'garantee_gos', 'garantee_kontract', 'garantee_other', 'invest_kredit', 'itog_bank', 'kbk', 'konversion', 'mb_a', 'ns_bukh', 'ns_business', 'ns_document', 'ns_in_app', 'nso', 'ns_terminal', 'ns_torg', 'oborot_kredit', 'obsluzh_rts_rur', 'obsluzh_rts_val', 'overdraft_kredit', 'pfi', 'products_lizing', 'us', 'veksel', 'bank_guarantees', 'credit', 'corporate_cards', 'valuta_control', 'deposit', 'inkass', 'rko', 'zarplat_projects', 'samoinkass', 'ОКВЭД, основная деятельность', 'ОКВЭД, дополнительные', 'Наименование основного ОКВЭД', 'Компания в стадии ликвидации'],
        datasets: [
            {
                label: 'Inflation ',
                data: [5.379657402692138, 4.46782642829053, 7.5599972878983674, 3.466655471707046, 0, 1.0011518448738554, 1.0008165881198277, 1.007202824393137, 1.0117145235790297, 1.0010596959420563, 1.0066467343565748, 1.0437175161807362, 0, 0, 1.0042801748024268, 1.0067601374303567, 1.0236481200649379, 1.0059509413471315, 1.0121395755129752, 1.0027770526136819, 1.0043214630041182, 1.018381301978118, 0, 1.0585789936839283, 0, 1.0127646066482694, 1.002458383970912, 1.0132317071068944, 0, 1.0252554758101293, 0, 1.001447747054112, 1.000485674164815, 1.0125598083077207, 1.000393018294085, 1.0056677632100086, 1.015112671437101, 0, 0, 0, 1.039615994188134, 0, 1.0437908197534929, 1.088150838946892, 1.8385287474328076, 0, 1.0088206815647105, 0, 0, 0, 4.766785034542815, 2.1551950887292026, 1.0882500620074143, 11.262757004961799, 0, 2.695666534314378, 1.2410748235731213, 1.0120444266028392, 1.0003330537958215, 1.0505440704467852, 1.3618243813174993, 1.020674400901953, 0, 1.000168122963068, 2.3768230573845504, 7.563157036329005, 2.7040122505433954, 1.15248874950895, 2.1177052187055123, 1.0088515729013527, 0, 1.0029744024807477, 4.348270583004814, 2.2664080633545463, 1.7302423971991039, 1.0685159265621305, 1.0400528132836446, 1.0131840485325803, 13.889558560637537, 2.5034390807993963, 1.081914796142307, 8.94951685787001, 3.131541872420452, 3.783626211365663, 1.3252923520127051],
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
                text: ''
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

export default Inflation;
