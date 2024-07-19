import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { COLORS } from "../../constants/chart.constant";

const BasicBar = (props) => {

  const [data, setData] = useState({

    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Gráfico 1',
        align: 'left'
      },
      chart: {
        background: '#fff'
      },

      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },


  })


  return (
    <div>
      <div id="chart">
        <ReactApexChart options={data.options} series={data.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}


export default BasicBar;
