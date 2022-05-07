import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import clsx from "clsx";
import styles from "./styles.module.css";
import {Box, Button, Card, CardActions, CardContent, Container, Grid, Typography} from "@mui/material";
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
import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const unmanicSiteApiBase = "http://localhost:5000"

let installationData = {}
function FetchInstallationData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(unmanicSiteApiBase + "/stats")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    installationData = {

    }
    return items;
}

function NewInstallationsChart() {
    FetchInstallationData();

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
        },
    };
    let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    let data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data}/>;
}

export default function MyReactPage() {
    return (
        <Layout
            title={`Unmanic Stats`}
            description="Unmanic is a simple tool for optimising your file library to a single, uniform format.">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Container maxWidth="md">

                            <Card sx={{minWidth: 500}}>
                                <CardContent>
                                    <NewInstallationsChart/>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Reload</Button>
                                </CardActions>
                            </Card>
                        </Container>
                    </Grid>
                </Grid>
            </header>
        </Layout>
    );
}
