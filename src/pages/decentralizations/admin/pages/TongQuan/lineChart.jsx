import React from 'react';
import Chart from 'react-apexcharts'

function ApexChart() {

  const chartData = {
      series: [{
        name: "Rau câu",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Bánh bông lan",
        data: [45, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Bánh Flan',
        data: [45, 35, 12,56, 36, 48, 62, 78, 80, 96, 95, 34]
      },
      {
        name: 'Bánh mì',
        data: [47, 57, 74, 80, 50, 48, 60, 70, 80, 64, 52, 43]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      title: {
        text: 'SỐ LƯỢNG HÀNG TRONG 8 TUẦN GẦN ĐÂY',
        align: 'center',
        style: {
          fontSize: '25px',
          fontFamily: 'Roboto'
        }
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
          '10 Jan', '11 Jan', '12 Jan'
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
      responsive: [
        {
          breakpoint: 2165,
          options: {
            title: {
              style: {
                fontSize: '20px'
              }
            }
          },
        },
        {
          breakpoint: 1636,
          options: {
            title: {
              style: {
                fontSize: '15px'
              }
            }
          }
        }
      ]
    }
  }

    return (
          <div id="chart">
              <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
          </div>
      );
}

export default ApexChart;