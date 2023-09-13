import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Home() {


  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <Navbar />
    <Box
        component="main"
        sx={{
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        }}
    >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                }}
            >
            </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                }}
            >
            </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            </Paper>
            </Grid>
        </Grid>
        <Footer />
        </Container>
    </Box>
    </Box>
  );
}