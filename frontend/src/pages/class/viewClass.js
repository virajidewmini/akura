import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function handleDelete(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}
function handleUpdate(id) {
  // Define the logic for handling the button click here
  console.log(`Button clicked for row with id ${id}`);
}

export default function BasicTable() {
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
        <Stack spacing={2}>
          <Typography variant="h3" gutterBottom> Class </Typography>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>Contained</Button>
        </Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Dessert (100g serving)</b></TableCell>
            <TableCell align="right"><b>Calories</b></TableCell>
            <TableCell align="right"><b>Fat&nbsp;(g)</b></TableCell>
            <TableCell align="right"><b>Carbs&nbsp;(g)</b></TableCell>
            <TableCell align="right"><b>Protein&nbsp;(g)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleUpdate(row.id)}>Update</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
        <Footer />
        </Container>
    </Box>
    </Box>
  );
}
