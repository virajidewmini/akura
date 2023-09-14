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
    const[error,setError]=useState(null)

    let { id } = useParams(); 

    console.log(id);

    const [student,setStudent]= useState(null);
    useEffect(()=>{
      const fetchCheckin = async() => {
        const response = await fetch('/api/checkin/'+id)
        const json = await response.json();
  
        if(response.ok){
          setIndexNo(json.indexNo)


        }
      }
      fetchStudent();
    },[])

    const handleSubmit =async(e)=>{
      e.preventDefault();

      const student= {indexNo}

      const response= await fetch('/api/checkin/'+id,{
        method:'PATCH',
        body: JSON.stringify(checkin),
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