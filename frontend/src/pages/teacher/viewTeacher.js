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
  
  const [teacher,setTeacher]= useState(null);
  useEffect(()=>{
    const fetchTeacher = async() => {
      const response = await fetch('/api/teacher/')
      const json = await response.json();

      if(response.ok){
        setTeacher(json)
      }
    }
    fetchTeacher();
  },[])

  const handleDelete =async(id)=>{
    const response = await fetch('/api/teacher/'+id,{
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
          <Typography variant="h3" gutterBottom> Teacher </Typography>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>Contained</Button>
        </Stack>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right"><b>First Name</b></TableCell>
            <TableCell align="right"><b>Last Name</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Phone Number</b></TableCell>
            <TableCell align="right"><b>Address</b></TableCell>
            <TableCell align="right"><b>Subject</b></TableCell>
            <TableCell align="right"><b>Grade</b></TableCell>
            <TableCell align="right"><b>Delete</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teacher && teacher.map((teacher) => (
            <TableRow
              key={teacher._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {teacher._id}
              </TableCell>
              <TableCell align="right">{teacher.firstName}</TableCell>
              <TableCell align="right">{teacher.lastName}</TableCell>
              <TableCell align="right">{teacher.email}</TableCell>
              <TableCell align="right">{teacher.phone}</TableCell>
              <TableCell align="right">{teacher.address}</TableCell>
              <TableCell align="right">{teacher.subject}</TableCell>
              <TableCell align="right">{teacher.grade}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => navigate(`/teacher/${teacher._id}`)}>Update</Button></TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(teacher._id)}>Delete</Button></TableCell> 
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