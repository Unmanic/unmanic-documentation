/*
* Docs:
*   - https://react-chartjs-2.js.org/components/line
*   - https://react-chartjs-2.js.org/examples/line-chart
*   - https://www.chartjs.org/docs/3.7.0/samples/area/line-stacked.html
*   - https://www.chartjs.org/docs/3.7.1/charts/line.html
*   - https://www.chartjs.org/docs/3.7.1/charts/area.html
* */

import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    LogarithmicScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    LogarithmicScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

//const unmanicSiteApiBase = "http://localhost:5000"
const unmanicSiteApiBase = "https://api.unmanic.app"

function NewInstallationsChart() {

    const [chartTotal, setChartTotal] = useState([])
    const [chartX86, setChartX86] = useState([])
    const [chartArmv7l, setChartArmv7l] = useState([])
    const [chartAarch64, setChartAarch64] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${unmanicSiteApiBase}/stats/installations/time-series/month`, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    if (json.success) {
                        setChartTotal(json.data.results)
                    }
                })
            }).catch(error => {
                console.error(error)
            })
        }
        fetchData()
    }, [unmanicSiteApiBase])
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${unmanicSiteApiBase}/stats/installations/time-series/month/filter/x86`, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    if (json.success) {
                        setChartX86(json.data.results)
                    }
                })
            }).catch(error => {
                console.error(error)
            })
        }
        fetchData()
    }, [unmanicSiteApiBase])
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${unmanicSiteApiBase}/stats/installations/time-series/month/filter/armv7l`, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    if (json.success) {
                        setChartArmv7l(json.data.results)
                    }
                })
            }).catch(error => {
                console.error(error)
            })
        }
        fetchData()
    }, [unmanicSiteApiBase])
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${unmanicSiteApiBase}/stats/installations/time-series/month/filter/aarch64`, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    if (json.success) {
                        setChartAarch64(json.data.results)
                    }
                })
            }).catch(error => {
                console.error(error)
            })
        }
        fetchData()
    }, [unmanicSiteApiBase])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'New Installations',
            },
            filler: {
                propagate: false,
            },
            tooltip: {
                mode: 'index'
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: true
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Installations'
                },
                type: 'logarithmic',
                stacked: true,
            },
        },
    };
    let labels = chartTotal.map(x => {
        const date = new Date(x.year, x.month);  // 2009-11
        return date.toLocaleString('default', {month: 'long'})
    });
    let data = {
        labels,
        datasets: [
            {
                label: 'Armv7l',
                data: chartArmv7l.map(x => x.count),
                borderColor: 'rgb(251,216,114)',
                backgroundColor: 'rgb(251,216,114, 0.7)',
                fill: true,
            },
            {
                label: 'Aarch64',
                data: chartAarch64.map(x => x.count),
                borderColor: 'rgb(0,157,110)',
                backgroundColor: 'rgb(0,157,110, 0.7)',
                fill: true,
            },
            {
                label: 'x86/x86_64',
                data: chartX86.map(x => x.count),
                borderColor: 'rgb(0,159,221)',
                backgroundColor: 'rgb(0,159,221, 0.7)',
                fill: true,
            },
        ],
    };
    return <Line options={options} data={data}/>;
}

export default NewInstallationsChart;
