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


// Randomly select a colour
/*function RandomColour() => {
    let r = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    let g = Math.floor(Math.random() * (225 - 50 + 1) + 50)
    let b = Math.floor(Math.random() * (225 - 50 + 1) + 100)
    return [r, g, b]
    // Generate x2 random hex characters
    let n1 = Math.floor(Math.random() * 16).toString(16);
    let n2 = Math.floor(Math.random() * 16).toString(16);
    // Predefine a pattern so we are generating colours within that pattern
    const number = '0' + n1 + n2 + 'FDD';
    // Return the HEX colour
    return "#" + number;
}*/

function CurrentInstallationsChart() {

    // TODO: Make this configurable (default to logarithmic)
    // 'linear', 'logarithmic'
    let displayScale = 'logarithmic';

    const [chartData, setChartData] = useState([])
    //const [chartLinux, setChartLinux] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`${unmanicSiteApiBase}/stats/installations/active-count/week/all`, {
                method: 'GET'
            }).then((response) => {
                response.json().then((json) => {
                    if (json.success) {
                        /*let dataDict = {}
                        for (let i = 0; i < json.data['filter-os'].length; i++) {
                            let osData = json.data['filter-os'][i];
                            dataDict[osData.search.toLowerCase()] = osData
                            switch (osData.search.toLowerCase()) {
                                case 'linux':
                                    setChartLinux(osData)
                                    break;
                            }
                        }*/
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
    //let labels = [''] // chartData.map(x => x.search);
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
        /*datasets: chartData.map((x) => {
            let colours = randomColour()
            console.log(colours[0])
            console.log(colours[1])
            console.log(colours[2])
            return {
                label: x.search,
                data: [x.count],
                borderColor: `rgb(${colours[0]},${colours[1]},221)`,
                backgroundColor: `rgb(${colours[0]},${colours[1]},${colours[2]}, 0.7)`,
            }
        }),*/
    };
    return <Bar options={options} data={data}/>;
}

export default CurrentInstallationsChart;
