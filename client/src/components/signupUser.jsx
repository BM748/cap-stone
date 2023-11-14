import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import React, {useState} from 'react';
import axios from "axios"
// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright'}
//             <Link color="inherit" href="htyps://mui.com/">

//             </Link>
//         </Typography>
//     );
// }

const defaultTheme = createTheme();


export default function SignUser(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState ('');
    const [userName, setUserName] = useState('');
    const [password,setPassword] = useState('');


    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        axios.post('http://localhost:5081/api/user/create', {
            userName, 
            emailId: email,
            password, 
            name
        }).then((result) => {
            console.log(result)
        }).catch(e => console.error(e))



        console.log({
            email:data.get('email'),
        });
    };

    return(
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop:8,
                    display: 'flex',
                    flexDirections:'column',
                    alignItems:'center',
                }}
                >
                    <Avatar sx={{m:1,bgcolor: 'secondary.main'}}>
                        <PersonIcon />
                    </Avatar>
                     <Typography component="h1" variant="h5">
                        Sign up
                     </Typography>
                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:3}}>

                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            autoFocus
                            value={name}
                            onChange={handleChangeName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="userName"
                            label="user name"
                            value={userName}
                            onChange={handleChangeUserName}
                            autoComplete="free solo"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="emailId"
                            label="email"
                            autoComplete="email"
                            value={email}
                            onChange={handleChangeEmail}
                            />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handleChangePassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                         type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                      Sign Up
                     </Button>

                     </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
