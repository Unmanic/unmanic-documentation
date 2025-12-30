import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

//const unmanicSiteApiBase = "http://localhost:5000"
const unmanicSiteApiBase = "https://api.unmanic.app"

function CurrentInstallationsChart() {

    // TODO: Make this configurable (default to logarithmic)
    // 'linear', 'logarithmic'
    let displayScale = 'logarithmic';

    const [chartData, setChartData] = useState([])
    //const [chartLinux, setChartLinux] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${unmanicSiteApiBase}/api/stats/installations/active-count/week/all`, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    if (json.success) {
                        setChartData(json.data['filter-os'])
                    }
                })
            }).catch(error => {
                console.error(error)
            })
        }
        fetchData()
    }, [unmanicSiteApiBase])


    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: 'Active Installations This Week (by OS platform)',
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Installations',
                },
                type: displayScale,
            },
            y: {
                display: true,
            },
        },
    };
    let labels = chartData.map(x => x.search);
    let data = {
        labels,
        datasets: [
            {
                label: '',
                data: chartData.map(x => x.count),
                borderColor: 'rgb(0,159,221)',
                backgroundColor: 'rgb(0,159,221, 0.7)',
            }
        ],
    };
    return <Bar options={options} data={data}/>;
}

export default CurrentInstallationsChart;
