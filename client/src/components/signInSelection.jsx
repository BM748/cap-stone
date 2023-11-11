import BrushIcon from '@mui/icons-material/Brush';
import PersonIcon from '@mui/icons-material/Person';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const defaultTheme = createTheme();

export default function Selection(){
    const navigate = useNavigate()
    const[selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName === selectedButton ? null : buttonName);

    };


        const handleContinue = (buttonName) => {
            setSelectedButton(buttonName);
            if (selectedButton === 'artist'){
                navigate('/signupArtist');
            } else if (selectedButton === 'patron'){
                navigate('/signupUser');
            }
        };

    return(
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <Button
            variant='outlined'  startIcon={<BrushIcon />}
              
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: selectedButton ==='artist' ? '#e0e0e0' : 'transparent',
            }}
            onClick={() => handleButtonClick('artist')}
            >
            Artist
            </Button>

            <Button
            variant='outlined' startIcon={<PersonIcon/>}

            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: selectedButton ==='patron' ? '#e0e0e0' : 'transparent',
            }}
            onClick={() => handleButtonClick('patron')}
            >

                Patron

            </Button>


            <Button
            variant='outlined'
            color='primary'
            sx={{marginTop: 2}}
            onClick={handleContinue}
            disabled={!selectedButton}
            >
                Continue
            </Button>


        </Container>
    </ThemeProvider>
    )
}



