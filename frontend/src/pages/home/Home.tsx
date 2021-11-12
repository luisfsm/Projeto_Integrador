import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import './Home.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import CadastroPostagem from '../../components/postagens/cadastroPostagem/CadastroPostagem';
import ListarPostagem from '../../components/postagens/listarPostagem/ListarPostagem';


function Home() {
    return (
        <>
            <Grid container>
                    <Grid item xs={2}  className="retanguloHome"  justifyContent="center">
                        <Box className="LogoHome" alignItems="center" flexDirection="column" position="fixed">
                            <Box>
                                <img src="https://i.imgur.com/EB2HE5Q.png" alt="logo" className="logoHome" width="250px" height="250px" />
                            </Box>
                            <Box>
                                <Typography className="textHome" alignItems="center"> <HomeSharpIcon className="iconHome" /> Home</Typography>
                            </Box>
                            <Box>
                                <Typography className="textHome" alignItems="center"><HealingSharpIcon className="iconHome" /> Temas</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8} justifyContent="center">
                        <ListarPostagem />
                


                    </Grid>
                    <Grid item xs={2}>

                    </Grid>



            </Grid>
        </>
    )
}

export default Home