import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import CadastroPostagem from '../../components/postagens/cadastroPostagem/CadastroPostagem';
import ListarPostagem from '../../components/postagens/listarPostagem/ListarPostagem';


function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={2} className="retanguloHome" justifyContent="center">
                    <Box className="logoTop" alignItems="center" flexDirection="column" position="fixed">
                        <Box>
                            <img src="https://i.imgur.com/FpzQD5k.png" alt="logo" className="logoHome" />
                        </Box>

                        <Link to="/temas" className="text-decorator-none">
                            <Box>
                                <Typography className="textHome" alignItems="center"><HealingSharpIcon className="iconHome" /> Temas</Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box>
                                <Typography className="textHome" alignItems="center"><HealingSharpIcon className="iconHome" /> Novo Tema</Typography>
                            </Box>
                        </Link>

                    </Box>
                </Grid>

                <Grid item xs={8} justifyContent="center">
                    <Box paddingY={10}>
                        <Box className="cadastroPadding">
                            <CadastroPostagem />
                        </Box>
                        <Box className="listPostPadding" >
                            <ListarPostagem />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={2}>

                </Grid>

            </Grid>
        </>
    )
}

export default Home