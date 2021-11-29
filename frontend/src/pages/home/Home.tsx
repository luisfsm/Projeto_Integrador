import React from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HealingSharpIcon from '@mui/icons-material/HealingSharp';
import CadastroPostagem from '../../components/postagens/cadastroPostagem/CadastroPostagem';
import ListarPostagem from '../../components/postagens/listarPostagem/ListarPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import PaidIcon from '@mui/icons-material/Paid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ModalTemas from '../../components/temas/modalTemas/ModalTemas';
import ListarNoticia from '../../components/noticias/ListarNoticia';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import VerticalSplitSharpIcon from '@mui/icons-material/VerticalSplitSharp';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container className='bodyHome'>
                <Grid item xs={2} paddingY={10} paddingX={3}>
                    <Box className="leftBar">
                        <Box alignItems="center">
                            <Link to="/temas" className="text-decorator-none">
                                <Box display="flex" >

                                    <HealingSharpIcon style={{ color: "black", marginLeft: "6px" }} />
                                    <Typography className="cursor" color="initial" style={{ color: "black", marginLeft: "2px", fontSize: "19px" }}>
                                        Temas
                                    </Typography>
                                </Box>
                            </Link>

                            <Box p={1}  marginTop={2}>
                                <ModalTemas />
                            </Box>
                            <Link to="/sobre" className="text-decorator-none">
                                <Box display="flex" marginTop={2}>
                                    <PeopleAltSharpIcon style={{ color: "black", marginLeft: "6px" }} />
                                    <Typography className="cursor" color="initial" style={{ color: "black", marginLeft: "2px", fontSize: "19px" }}>
                                        Sobre nós
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={8} justifyContent="center">
                    <Box paddingY={10}>
                        <Box paddingX={10} paddingY={1} className="marginLeftModal">
                            <ModalPostagem />
                        </Box>

                        <Box className="listPostPadding" >
                            <ListarPostagem />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={2} mt={0} paddingY={10} paddingX={1}>
                    <Box alignItems="center" className="rightBar">
                        <div className="rightBarTitle">
                            <h4>Eventos</h4>
                            <div className="rightBarFTitle">
                                <a href="#">Veja Tudo</a>
                            </div>
                        </div>

                        <div className="event">
                            <div className="left-event">
                                <Typography variant="h5">
                                    09
                                </Typography>
                                <span>Agosto | 21</span>
                            </div>
                            <div className="right-event">
                                <Typography variant="h5">
                                    ODS
                                </Typography>
                                <Typography variant="h6">
                                    <LocationOnIcon fontSize="small" />
                                    São Paulo
                                </Typography>
                                <a href="https://conhecendoosods.com.br/sobre-o-evento/" target="_blank">
                                    Mais Informações
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="event">
                                <div className="left-event">
                                    <Typography variant="h5">
                                        21
                                    </Typography>
                                    <span>Março | 22</span>
                                </div>

                                <div className="right-event">
                                    <Typography variant="h5">
                                        ONU
                                    </Typography>
                                    <Typography variant="h6">
                                        <LocationOnIcon fontSize="small" />
                                        Portugal
                                    </Typography>
                                    <a href="https://sabiasque.pt/agenda/evento/2248-declaracao-universal-dos-direitos-da-agua.html" target="_blank">
                                        Mais Informações
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="rightBarTitle">
                            <h5>Anúncio</h5>
                            <div className="rightBarFTitle">
                                <a href="#">Veja Tudo</a>
                            </div>
                        </div>
                        <ListarNoticia />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home