import React from 'react';
import Chart from 'react-apexcharts'

const ApexChart = (listLoaiSP, title) => {

  let listDate = []
  listLoaiSP.map((item, index) => {
    listDate = item.date;
  })


  const chartData = {
    series: listLoaiSP,
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
        text: title,
        align: 'center',
        style: {
          fontSize: '25px',
          fontFamily: 'Roboto'
        }
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
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
        categories: listDate,
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