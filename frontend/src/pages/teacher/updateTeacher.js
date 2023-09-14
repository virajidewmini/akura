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

    
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setemail]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[address,setAddress]=useState('')
    const[subject,setSubject]=useState('')
    const[grade,setGrade]=useState('')
    const[error,setError]=useState(null)

    let { id } = useParams(); 

    console.log(id);

    const [teacher,setTeacher]= useState(null);
    useEffect(()=>{
      const fetchTeacher = async() => {
        const response = await fetch('/api/teacher/'+id)
        const json = await response.json();
  
        if(response.ok){
          
          setFirstName(json.firstName)
          setLastName(json.lastName)
          setemail(json.email)
          setPhoneNumber(json.phoneNumber)
          setAddress(json.address)
          setSubject(json.subject)
          setGrade(json.grade)
         
          
          
        }
      }
      fetchTeacher();
    },[])

    const handleSubmit =async(e)=>{
      e.preventDefault();

      const teacher= {firstName,lastName,email,phoneNumber,address,subject,grade}

      const response= await fetch('/api/teacher/'+id,{
        method:'PATCH',
        body: JSON.stringify(teacher),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const json = await response.json()

      if(!response.ok){
          setError(json.error)
      }
      if(response.ok){
        
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
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
            Teacher Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e)=>setFirstName(e.target.value)}
                  value={firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e)=>setLastName(e.target.value)}
                  value={lastName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setemail(e.target.value)}
                  value={email}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number:"
                  name="phone"
                  autoComplete="phone "
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </Grid>

              
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address:"
                  name="address"
                  autoComplete="address"
                  onChange={(e)=>setAddress(e.target.value)}
                  value={address}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  autoComplete="subject "
                  onChange={(e)=>setSubject(e.target.value)}
                  value={subject}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="grade"
                  label="Grade:"
                  name="grade"
                  autoComplete="grade"
                  onChange={(e)=>setGrade(e.target.value)}
                  value={grade}
                />
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