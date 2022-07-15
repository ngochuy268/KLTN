import React from 'react';
import Chart from 'react-apexcharts';
import styles from './TongQuan.module.scss'

class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
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
      };
    }

  

    render() {
      return (
            <div id={styles.chart}>
                <Chart options={this.state.options} series={this.state.series} type="donut" />
            </div>
        );
    }
  }

export default PieChart