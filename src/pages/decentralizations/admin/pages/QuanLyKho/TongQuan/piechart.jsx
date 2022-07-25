import React from 'react';
import Chart from 'react-apexcharts';
import styles from './TongQuan.module.scss'

function PieChart(tensp, soluong) {

  const chartData = {
    series: soluong.map(item => parseInt(item)),
    options: {
      chart: {
        type: 'donut',
      },
      labels: tensp,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  }
  return (
    <div id={styles.chart}>
      <Chart options={chartData.options} series={chartData.series} type="donut" />
    </div>
  );
}
export default PieChart