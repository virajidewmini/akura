import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useState } from 'react';
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

  const[indexNo,setIndexNo]=useState('')
  const[error,setError]=useState(null)

  const handleSubmit =async(e)=>{
    e.preventDefault();

    const checkin= {indexNo}

    const response= await fetch('/api/checkin',{
      method:'POST',
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
            Check In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="indexNumber"
                  required
                  fullWidth
                  id="indexNumber"
                  label="Index Number"
                  onChange={(e)=>setIndexNo(e.target.value)}
                  value={indexNo}
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Check In
            </Button>
            <Grid container justifyContent="flex-end">
            
            </Grid>
          </Box>
        </Box>
        <Footer />
        </Container>
    </Box>
    </Box>
  );
}