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

    const[indexNo,setIndexNo]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setemail]=useState('')
    const[gender,setgender]=useState('')
    const[phoneNumber,setPhoneNumber]=useState('')
    const[dob,setdob]=useState('')
    const[parentName,setParentName]=useState('')
    const[parentEmail,setParentEmail]=useState('')
    const[parentPhone,setparentPhone]=useState('')
    const[error,setError]=useState(null)

    let { id } = useParams(); 

    console.log(id);

    const [student,setStudent]= useState(null);
    useEffect(()=>{
      const fetchStudent = async() => {
        const response = await fetch('/api/student/'+id)
        const json = await response.json();
  
        if(response.ok){
          setIndexNo(json.indexNo)
          setFirstName(json.firstName)
          setLastName(json.lastName)
          setemail(json.email)
          setgender(json.gender)
          setPhoneNumber(json.phoneNumber)
          setdob(json.dob)
          setParentName(json.parentName)
          setParentEmail(json.parentEmail)
          setparentPhone(json.parentPhone)
        }
      }
      fetchStudent();
    },[])

    const handleSubmit =async(e)=>{
      e.preventDefault();

      const student= {indexNo,firstName,lastName,email,gender,phoneNumber,dob,parentName,parentEmail,parentPhone}

      const response= await fetch('/api/student/'+id,{
        method:'PATCH',
        body: JSON.stringify(student),
        headers:{
          'Content-Type':'application/json'
        }
      })
      const json = await response.json()

      if(!response.ok){
          setError(json.error)
      }
      if(response.ok){
        setIndexNo('')
        setFirstName('')
        setLastName('')
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
            Student Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="indexNo"
                  label="Index No:"
                  name="IndexNo"
                  autoComplete="Index Number "
                  onChange={(e)=>setIndexNo(e.target.value)}
                  value={indexNo}
                  autoFocus
                />
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  autoComplete="gender"
                  onChange={(e)=>setgender(e.target.value)}
                  value={gender}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNo"
                  label="Phone No:"
                  name="phoneNo"
                  autoComplete="Phone Number "
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  name="dob"
                  autoComplete="Date of Birth"
                  onChange={(e)=>setdob(e.target.value)}
                  value={dob}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="parentsName"
                  label="Parent's Name"
                  name="parentsName"
                  autoComplete="Parent's Name"
                  onChange={(e)=>setParentName(e.target.value)}
                  value={parentName}
                />
              </Grid>
              
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="parentsemail"
                  label="Parent's Email"
                  name="parentsemail"
                  autoComplete="Parent's Email"
                  onChange={(e)=>setParentEmail(e.target.value)}
                  value={parentEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="parentsNo"
                  label="Parent's Phone No"
                  name="parentsNo"
                  autoComplete="Parent's Phone No"
                  onChange={(e)=>setparentPhone(e.target.value)}
                  value={parentPhone}
                />
              </Grid>

            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Update
            </Button>

          </Box>
        </Box>
        <Footer />
        </Container>
    </Box>
    </Box>
  );
}