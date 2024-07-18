import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

const Patterned = () => {
    let data = ({

        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    opacity: 0.25
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '60%',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
            },
            title: {
                text: 'Gráfico 2'
            },
            xaxis: {
                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
            },
            yaxis: {
                title: {
                    text: undefined
                },
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return val + "K"
                    }
                }
            },
            fill: {
                type: 'pattern',
                opacity: 1,
                pattern: {
                    style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

                }
            },
            states: {
                hover: {
                    filter: 'none'
                }
            },
            legend: {
                position: 'right',
                offsetY: 40
            }
        },


    });





    return (
        <div>
            <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );


}

export default Patterned
