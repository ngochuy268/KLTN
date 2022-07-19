import React from 'react';
import Chart from 'react-apexcharts';
import styles from './TongQuan.module.scss'

function PieChart() {

const chartData = {
  series: [1000,2500,500,250],
  options: {
    chart: {
      type: 'donut',
    },
    labels: ['Bánh Flan 55g','Bánh Flan 35g','Bánh Flan 75g','Bánh Flan 100g'],
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