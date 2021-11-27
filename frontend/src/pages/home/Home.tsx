import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import CadastroPostagem from '../../components/postagens/cadastroPostagem/CadastroPostagem';
import ListarPostagem from '../../components/postagens/listarPostagem/ListarPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CarouselComponent from '../../components/carousel/CarouselComponent';


function Home() {
    return (
        <>
            <Grid container>
                <Grid item xs={2}>
                    <Box className="leftBar">
                        <Box className="logoTop" alignItems="center" position="fixed">

                            <Link to="/temas" className="text-decorator-none">
                                <Box>
                                    <Typography className="textHome" alignItems="center"><HealingSharpIcon /> Temas</Typography>
                                </Box>
                            </Link>

                            <Box>
                                <Typography className="textHome" alignItems="center"><PaidIcon
                                /> Donate</Typography>
                            </Box>

                            <Box>
                                <Typography className="textHome" alignItems="center"><HealingSharpIcon /> Postagens</Typography>
                            </Box>

                            <Link to="/formularioTema" className="text-decorator-none">
                                <Box>
                                    <Typography className="textHome" alignItems="center"><HealingSharpIcon /> Novo Tema</Typography>
                                </Box>
                            </Link>

                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={8} justifyContent="center">
                    <Box paddingY={10}>
                        <Box paddingX={25} paddingY={1} className="marginLeftModal">
                            <ModalPostagem />
                        </Box>
                        <Box className="listPostPadding" >
                            <ListarPostagem />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    <Box alignItems="center" position="fixed" className="rightBar">
                        <div className="rightBarTitle">
                            <Typography variant="h4">
                                Eventos
                            </Typography>
                        </div>

                        <div className="event">
                            <div className="left-event">
                                <Typography variant="h5">
                                    18
                                </Typography>
                                <span>Março</span>
                            </div>

                            <div className="right-event">
                                <Typography variant="h5">
                                    ONU
                                </Typography>
                                <p>
                                    São Paulo
                                </p>
                                <p>
                                    Mais Informações
                                </p>

                            </div>
                        </div>

                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Home