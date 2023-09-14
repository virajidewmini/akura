import * as React from 'react';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";

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

function handleUpdate(id) {

}

export default function BasicTable() {
  const navigate = useNavigate();
  
  const [checkers,setCheckers]= useState(null);
  useEffect(()=>{
    const fetchChecker = async() => {
      const response = await fetch('/api/checker/')
      const json = await response.json();

      if(response.ok){
        setCheckers(json)
      }
    }
    fetchChecker();
  },[])

  const handleDelete =async(id)=>{
    const response = await fetch('/api/checker/'+id,{
      method:"DELETE"
    })
    const json= await response.json()
    if(response.ok){
      console.log("Elama Panda");
    }

  }

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
          <Typography variant="h3" gutterBottom> Checker </Typography>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>Contained</Button>
        </Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right"><b>First Name</b></TableCell>
            <TableCell align="right"><b>Last Name</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Phone number</b></TableCell>
            <TableCell align="right"><b>Update</b></TableCell>
            <TableCell align="right"><b>Delete</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {checkers && checkers.map((checker) => (
            <TableRow
              key={checker.indexNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {student.indexNo}
              </TableCell> */}
              <TableCell align="right">{checker.firstName}</TableCell>
              <TableCell align="right">{checker.lastName}</TableCell>
              <TableCell align="right">{checker.email}</TableCell>
              <TableCell align="right">{checker.parentName}</TableCell>
              <TableCell align="right">{checker.parentPhone}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => navigate(`/checker/${checker._id}`)}>Update</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(checker._id)}>Delete</Button></TableCell> 
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
