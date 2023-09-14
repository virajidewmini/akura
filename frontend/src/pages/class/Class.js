import * as React from 'react';
import { useState } from 'react';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
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

  const handleSubmit =async(e)=>{
    e.preventDefault();

    const Class= {grade,subjectName,teacherName,date,time,hall}

    const response= await fetch('/api/Class',{
      method:'POST',
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
      setTeacherName('')
      setDate('')
      setTime('')
      setHall('')
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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="grade"
                  name="grade"
                  required
                  fullWidth
                  id="grade"
                  label="Grade"
                  onChange={(e)=>setGrade(e.target.value)}
                  value={grade}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="subjectName"
                  label="Subject Name"
                  name="subjectName"
                  autoComplete="subject-name"
                  onChange={(e)=>setSubjectName(e.target.value)}
                  value={subjectName}
                />
              </Grid>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
                  name="hall"
                  label="Hall"
                  type="hall"
                  id="hall"
                  autoComplete="hall"
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
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer />
        </Container>
    </Box>
    </Box>
  );
}