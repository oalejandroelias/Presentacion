import React from 'react'
import ReactApexChart from "react-apexcharts";

const Donut = () => {

    let data = {

        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 270
                }
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            legend: {
                formatter: function (val, opts) {
                    return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
            },
            title: {
                text: 'Gráfico 4'
            },
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





    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="donut" width={380} />
            </div>
            <div id="html-dist"></div>
        </div>
    );


}

export default Donut
