import React from 'react';
import Layout from '@theme/Layout';
import {Card, CardContent, Container, Grid} from "@mui/material";
import NewInstallationsChart from "../components/installations/NewInstallations";
import CurrentInstallationsChart from "../components/installations/CurrentInstallations";


export default function MyReactPage() {
    return (
        <Layout
            title={`Unmanic Stats`}
            description="Unmanic is a simple tool for optimising your file library to a single, uniform format.">
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="md">
                        <Card sx={{minWidth: 360}}>
                            <CardContent>
                                <NewInstallationsChart/>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Container maxWidth="md">
                        <Card sx={{minWidth: 360}}>
                            <CardContent>
                                <CurrentInstallationsChart/>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
            </Grid>
        </Layout>
    );
}
