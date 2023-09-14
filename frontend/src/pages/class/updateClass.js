import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function Form() {

    const[grade,setGrade]=useState('')
    const[subjectName,setSubjectName]=useState('')
    const[teacherName,setTeacherName]=useState('')
    const[date,setDate]=useState('')
    const[time,setTime]=useState('')
    const[hall,setHall]=useState('')
    const[error,setError]=useState(null)

    let { id } = useParams(); 

    console.log(id);

    const [Class,setClass]= useState(null);
    useEffect(()=>{
      const fetchClass = async() => {
        const response = await fetch('/api/Class/'+id)
        const json = await response.json();
  
        if(response.ok){
          setGrade(json.grade)
          setSubjectName(json.subjectName)
          setTeacherName(json.teacherName)
          setDate(json.date)
          setTime(json.time)
          setHall(json.hall)
        }
      }
      fetchClass();
    },[])

    const handleSubmit =async(e)=>{
      e.preventDefault();

      const Class= {grade,subjectName,teacherName,date,time,hall}

      const response= await fetch('/api/Class/'+id,{
        method:'PATCH',
        body: JSON.stringify(Class),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const json = await response.json()

      if(!response.ok){
          setError(json.error)
      }
      if(response.ok){
        setGrade('')
        setSubjectName('')
        setError('')

        console.log(json)
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
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Class Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="grade"
                  label="Grade:"
                  name="Grade"
                  autoComplete="Grade "
                  onChange={(e)=>setGrade(e.target.value)}
                  value={grade}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="subject-name"
                  name="subjectName"
                  required
                  fullWidth
                  id="subjectName"
                  label="Subject Name"
                  onChange={(e)=>setSubjectName(e.target.value)}
                  value={subjectName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="teacherName"
                  label="Teacher Name"
                  name="teacherName"
                  autoComplete="teacher-name"
                  onChange={(e)=>setTeacherName(e.target.value)}
                  value={teacherName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="date"
                  label="Date"
                  name="date"
                  autoComplete="date"
                  onChange={(e)=>setDate(e.target.value)}
                  value={date}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="time"
                  label="Time"
                  name="time"
                  autoComplete="time"
                  onChange={(e)=>setTime(e.target.value)}
                  value={time}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="hall"
                  label="Hall"
                  name="hall"
                  autoComplete="Hall "
                  onChange={(e)=>setHall(e.target.value)}
                  value={hall}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>

          </Box>
        </Box>
        <Footer />
        </Container>
    </Box>
    </Box>
  );
}